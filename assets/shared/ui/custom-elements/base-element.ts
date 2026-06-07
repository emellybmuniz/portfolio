export abstract class BaseElement extends HTMLElement {
  protected shadow: ShadowRoot | null = null;

  constructor(useShadow: boolean = false) {
    super();
    if (useShadow) {
      this.shadow = this.attachShadow({ mode: "open" });
    }
  }

  protected isInitialized = false;

  connectedCallback() {
    if (!this.isInitialized) {
      this.render();
      this.setupListeners();
      this.isInitialized = true;
    }
  }

  disconnectedCallback() {
    // We only want to remove listeners if the element is actually being destroyed
    // But since we teleport it, disconnectedCallback is fired.
    // So we shouldn't indiscriminately remove listeners unless we have a destroy() method.
  }

  protected abstract render(): void;
  protected setupListeners(): void {}
  protected removeListeners(): void {}

  protected emitEvent<T>(
    eventName: string,
    detail?: T,
    bubbles: boolean = true,
  ) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
        bubbles,
        composed: true,
      }),
    );
  }
}
