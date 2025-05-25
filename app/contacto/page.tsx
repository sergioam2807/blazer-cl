"use client";
import { Card, CardFooter, CardHeader } from "@heroui/card";
import Image from "next/image";

import MessageForm from "@/components/messageForm";
import HeaderPageTitle from "@/components/headerPageTitle";

const contactos = [
  {
    icon: "/icons/location.svg",
    alt: "Ubicación",
    text: "Viña del Mar, Chile",
  },
  {
    icon: "/icons/email.svg",
    alt: "Email",
    text: "Blazer.ltda@gmail.com",
    href: "mailto:Blazer.ltda@gmail.com",
  },
  {
    icon: "/icons/phone.svg",
    alt: "Teléfono",
    text: "Servicios: +56 9 3393 3641",
    href: "https://wa.me/56933933641",
  },
  {
    icon: "/icons/phone.svg",
    alt: "Teléfono",
    text: "Transporte: +56 9 7383 3905",
    href: "https://wa.me/56973833905",
  },
];

export default function ContactoPage() {
  return (
    <div className="w-full flex items-start text-start px-4 py-8 flex-col gap-8">
      <HeaderPageTitle pageTitle="Contáctanos" />

      <div className="w-full flex flex-col sm:flex-row">
        <div className="sm:w-1/3 max-w-3xl mx-auto relative z-10">
          <div className="flex flex-col  gap-4 py-8 md:py-10">
            <p className="text-2xl font-extrabold leading-snug">
              Estamos aquí para ayudarte
            </p>
          </div>
          <Card className="text-center py-8 px-8 bg-yellow-500/80">
            <div className="absolute top-4 right-5 sm:right-3 sm:-top-2 h-64 w-0.5 bg-black ml-4" />
            <div className="absolute -top-5 right-2 sm:-right-3 sm:-top-10 w-72 h-0.5 bg-black mt-12" />

            <CardHeader className="font-bold text-3xl mb-6">
              Cotiza con nosotros
            </CardHeader>
            {contactos.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center ml-3 mb-4">
                <Image
                  alt={item.alt}
                  className="rounded-xl"
                  height={30}
                  src={item.icon}
                  width={30}
                />
                {item.href ? (
                  <a
                    className="text-lg text-justify font-semibold  hover:text-gray-800 transition-colors"
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.text}
                  </a>
                ) : (
                  <p className="text-lg text-justify font-semibold">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
            <CardFooter className="text-md font-light text-justify">
              Si tienes preguntas, necesitas una cotización o deseas saber más
              sobre nuestros servicios, no dudes en escribirnos. Nuestro equipo
              está listo para brindarte una atención rápida y personalizada.
            </CardFooter>
          </Card>
        </div>
        <div>
          <div className="flex flex-col gap-4 py-5">
            <p className="hidden text-lg font-light text-center ">
              También puedes completar el siguiente formulario y nos pondremos
              en contacto contigo a la brevedad.
            </p>
          </div>
          {/* Formulario de contacto */}
          <div className="w-full max-w-xl mx-auto mt-8 sm:mt-0 relative z-10 rounded-2xl shadow-2xl px-8 ">
            <p className="sm:flex text-lg font-light text-center mb-5">
              También puedes completar el siguiente formulario y nos pondremos
              en contacto contigo a la brevedad.
            </p>
            <MessageForm />
          </div>
          <p className="italic text-base mt-4 text-gray-100 text-center">
            La seguridad y calidad de tu proyecto comienza con una buena
            comunicación.
          </p>
        </div>
      </div>
    </div>
  );
}
