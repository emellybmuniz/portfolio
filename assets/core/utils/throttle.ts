export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  let lastArgs: Parameters<T> | null = null;
  let lastContext: any;

  return function (this: any, ...args: Parameters<T>) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
        if (lastArgs) {
          func.apply(lastContext, lastArgs);
          lastArgs = null;
          lastContext = null;
        }
      }, limit);
    } else {
      lastArgs = args;
      lastContext = context;
    }
  };
}
