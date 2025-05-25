import Image from "next/image";

import HeaderPageTitle from "@/components/headerPageTitle";

const sellos = [
  {
    icon: "/icons/security.svg",
    title: "Seguridad como Prioridad",
    description:
      "Operamos bajo estrictos protocolos, garantizando protección en cada proyecto.",
  },
  {
    icon: "/icons/time.svg",
    title: "Compromiso con la Puntualidad",
    description:
      "Nuestra logística asegura entregas a tiempo y atención inmediata.",
  },
  {
    icon: "/icons/compliance.svg",
    title: "Equipos Certificados",
    description:
      "Andamios y maquinaria revisados constantemente para un rendimiento seguro.",
  },
  {
    icon: "/icons/trust.svg",
    title: "Relaciones de Confianza",
    description:
      "Clientes que vuelven gracias a una atención transparente y cercana.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <HeaderPageTitle pageTitle="Nosotros" />

      <section className="flex flex-col  mt-4">
        <div className="flex flex-col gap-4 mb-4">
          <h2 className="text-2xl font-bold">
            Más de 10 años de experiencia brindando soluciones confiables en
            altura y perforación.
          </h2>
          <p className="text-lg text-justify">
            En Blazer, nos especializamos en el arriendo de andamios colgantes y
            fijos, perforado con testiguera y servicio de transporte de alta
            carga, ofreciendo un servicio integral, seguro y eficiente para los
            sectores de la construcción, minería e industria en general.
          </p>
        </div>
        <div className="flex flex-col mt-4 gap-4 bg-white px-8 py-20 sm:flex-row">
          {sellos.map((sello, idx) => (
            <div
              key={idx}
              className="bg-black shadow-lg rounded-2xl p-6 text-center flex flex-col justify-between min-h-[260px] w-full sm:w-1/4"
            >
              <div>
                <h4 className="font-semibold text-lg mb-4 min-h-[48px] flex items-center justify-center">
                  {sello.title}
                </h4>
                <Image
                  alt={sello.title}
                  className="mx-auto mb-4"
                  height={75}
                  src={sello.icon}
                  width={75}
                />
              </div>
              <p className="text-sm text-white mt-auto">{sello.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col py-10 gap-8 px-2 mb-4 sm:flex-row">
          <div className="flex flex-col gap-4">
            <HeaderPageTitle pageTitle="Nuestra Misión" />

            <p className="text-lg text-justify">
              Proveer soluciones de arriendo de andamios y perforación con
              excelencia, seguridad y compromiso, superando las expectativas de
              nuestros clientes.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <HeaderPageTitle pageTitle="Nuestra Visión" />

            <p className="text-lg text-justify">
              Ser la empresa líder en arriendo de andamios y perforación,
              reconocida por su calidad, innovación y compromiso con la
              seguridad.
            </p>
          </div>
        </div>
      </section>
      <div className="text-center text-2xl py-4 font-bold">
        En Blazer, nuestra historia se construye con cada estructura levantada,
        cada perforación ejecutada y cada carga transportada con éxito.
      </div>
    </>
  );
}
