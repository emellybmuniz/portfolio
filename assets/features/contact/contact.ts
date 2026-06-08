export class ContactFormManager {
  private form: HTMLFormElement | null;
  private statusContainer: HTMLElement | null;
  private submitButton: HTMLButtonElement | null = null;
  private originalButtonText: string = "";

  constructor() {
    this.form = document.getElementById("contactForm") as HTMLFormElement;
    this.statusContainer = document.getElementById("contactFormStatus");

    if (this.form) {
      this.submitButton = this.form.querySelector(
        'button[type="submit"]',
      ) as HTMLButtonElement;
      if (this.submitButton) {
        this.originalButtonText = this.submitButton.innerHTML;
      }
      this.init();
    }
  }

  private init() {
    this.form?.addEventListener("submit", this.handleSubmit.bind(this));
  }

  private async handleSubmit(event: Event) {
    event.preventDefault();

    if (!this.form || !this.statusContainer || !this.submitButton) return;

    // Loading state
    this.submitButton.disabled = true;
    this.submitButton.innerHTML = "<span>Enviando...</span>";
    this.statusContainer.style.display = "none";
    this.statusContainer.className = "contact__form-status";

    const formData = new FormData(this.form);

    try {
      const response = await fetch(this.form.action, {
        method: this.form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        this.statusContainer.textContent =
          "Mensagem enviada com sucesso! Entraremos em contato em breve.";
        this.statusContainer.style.color = "var(--color-success, #10b981)";
        this.form.reset();
      } else {
        this.statusContainer.textContent =
          result.error ||
          "Ocorreu um erro ao enviar a mensagem. Tente novamente.";
        this.statusContainer.style.color = "var(--color-error, #ef4444)";
      }
    } catch (error) {
      this.statusContainer.textContent =
        "Erro de conexão. Verifique sua internet e tente novamente.";
      this.statusContainer.style.color = "var(--color-error, #ef4444)";
    } finally {
      this.statusContainer.style.display = "block";
      this.submitButton.disabled = false;
      this.submitButton.innerHTML = this.originalButtonText;

      // Auto-hide success message after 5 seconds
      if (
        this.statusContainer.style.color.includes("success") ||
        this.statusContainer.style.color.includes("10b981")
      ) {
        setTimeout(() => {
          if (this.statusContainer) {
            this.statusContainer.style.display = "none";
          }
        }, 5000);
      }
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    new ContactFormManager();
  });
} else {
  new ContactFormManager();
}
