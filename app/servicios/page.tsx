import { serviciosData } from "../page";

import HeaderPageTitle from "@/components/headerPageTitle";
import CardComponent from "@/components/cardComponent";

export default function ServiciosPage() {
  return (
    <div className="w-full flex items-start text-start px-4 py-10 flex-col gap-8">
      <HeaderPageTitle pageTitle="Servicios" />
      <div className="text-start flex flex-col gap-4 text-xl font-bold">
        <p className="text-2xl font-extrabold leading-snug">
          Descubre todos los servicios que ofrecemos para ayudarte en tus
          proyectos.
        </p>
        <p className="text-lg font-light">
          ¿Tienes dudas? No dudes en contactarnos.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {serviciosData.map((card, index) => (
          <CardComponent
            key={index}
            icon={card.icon}
            text={card.text}
            title={card.title}
            url={card.url}
          />
        ))}
      </div>
    </div>
  );
}
