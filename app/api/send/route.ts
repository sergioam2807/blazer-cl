import { Resend } from "resend";

import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Blazer.cl<onboarding@resend.dev>",
      to: ["blazer.ltda@gmail.com"],
      subject: `Hola Blazer! ${formData.nombre} intenta contactarte`,
      react: EmailTemplate({
        asunto: formData.asunto,
        firstName: formData.nombre,
        correo: formData.correo,
        telefono: formData.telefono,
        mensaje: formData.mensaje,
      }),
    });

    if (error) {
      return new Response(
        JSON.stringify({ error: error.message || "Error desconocido" }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: "Correo enviado exitosamente!", data }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Hubo un error al intentar enviar el correo." }),
      { status: 500 }
    );
  }
}
