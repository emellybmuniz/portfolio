import { qAll } from "./utils/dom";

const copyToClipboard_buttons = qAll<HTMLButtonElement>(".js-copy-btn");

const handleCopyClick = (event: Event) => {
  const button = event.currentTarget as HTMLButtonElement;
  const textToCopy = button.getAttribute("data-clipboard-text");

  if (!textToCopy) return;

  navigator.clipboard.writeText(textToCopy).then(() => {
    const text_span = button.querySelector("span");
    if (!text_span) return;

    const originalText = text_span.innerText;
    text_span.innerText = "Copiado!";

    setTimeout(() => {
      text_span.innerText = originalText;
    }, 2000);
  });
};

copyToClipboard_buttons.forEach((button) => {
  button.addEventListener("click", handleCopyClick);
});
