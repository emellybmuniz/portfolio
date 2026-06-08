interface Env {
  CONTACT_EMAIL: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const email = env.CONTACT_EMAIL;
  if (!email) {
    return new Response(
      JSON.stringify({
        error:
          "Server misconfiguration: CONTACT_EMAIL environment variable not set",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid form data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const payload: Record<string, unknown> = {};
  for (const [key, value] of formData.entries()) {
    payload[key] = value;
  }

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent":
          request.headers.get("User-Agent") ||
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Referer:
          request.headers.get("Referer") || "https://emellybeatriz.pages.dev",
        Origin:
          request.headers.get("Origin") || "https://emellybeatriz.pages.dev",
      },
    });

    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch (e) {
      return new Response(
        JSON.stringify({
          success: false,
          error:
            "O provedor de e-mail bloqueou a requisição da Cloudflare. Tente novamente mais tarde.",
          details: text.substring(0, 150),
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    if (response.ok) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Mensagem enviada com sucesso!",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          error: result.message || "Erro no envio",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  } catch (error: unknown) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Erro interno no servidor de contato.",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
