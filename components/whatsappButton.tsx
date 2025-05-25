"use client";
import { usePathname } from "next/navigation";

const defaultPhone = "56933933641";
const transportePhone = "5697383905";

const messages: Record<string, string> = {
  "/contacto": "Hola, quiero cotizar sobre sus servicios.",
  "/servicios/transporte": "Hola, quiero cotizar sobre transporte.",
  "/servicios/andamios-colgantes":
    "Hola, quiero cotizar sobre andamios colgantes.",
  "/servicios/andamios-fijos": "Hola, quiero cotizar sobre andamios Fijos.",
  "/servicios/perforacion":
    "Hola, quiero cotizar sobre perforación con testiguera.",
  default: "Hola, quiero más información.",
};

export default function WhatsappButton() {
  const pathname = usePathname();
  const message = messages[pathname] || messages["default"];
  const phone =
    pathname === "/servicios/transporte" ? transportePhone : defaultPhone;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      aria-label="Contactar por WhatsApp"
      className="fixed z-50 bottom-6 right-6 opacity-80 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center transition-colors"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg fill="currentColor" height="28" viewBox="0 0 24 24" width="28">
        <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.19-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.68.96.98-3.59-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.29 1.23.46 1.65.59.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
      </svg>
    </a>
  );
}
