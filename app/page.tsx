import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";

import andamio from "@/public/andamio-colgante.jpg";
import FadeInSection, { SubText, Ofrecemos } from "@/components/heroText";
import Slider from "@/components/slider";
import AnimatedCard from "@/components/animatedCard";
import FlipCardComponent from "@/components/projectCard";

export const serviciosData = [
  {
    title: "Andamios Colgantes",
    text: " Arriendo de andamios colgantes eléctricos certificados para alturas de hasta 200 metros.",
    icon: "/card-images/wicosmo.jpg",
    url: "servicios/andamios-colgantes",
  },
  {
    title: "Andamios Fijos",
    text: "Arriendo de Andamios fijos para trabajos en altura, con certificación y seguridad garantizada.",
    icon: "/card-images/andamiofb.webp",
    url: "servicios/andamios-fijos",
  },
  {
    title: "Servicios de Perforación",
    text: "Perforación con testiguera para obtención de muestras geotécnicas.",
    icon: "/card-images/testigueradms240.jpg",
    url: "servicios/perforacion",
  },
  {
    title: "Servicios de Transporte",
    text: "Transporte de equipos y materiales a cualquier lugar del país.",
    icon: "/card-images/aumark6.jpg",
    url: "servicios/transporte",
  },
];

export default function Home() {
  return (
    <>
      {/* Solo visible en mobile */}
      <div className="sm:hidden relative w-full">
        <Image
          alt="Andamio"
          className="w-full opacity-30"
          height={400}
          src={andamio}
          width={400}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-7">
          <FadeInSection />
          <div className="w-full flex justify-end">
            <Button
              as={Link}
              className="mt-12"
              color="warning"
              href="/contacto"
              variant="bordered"
            >
              Contacto
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex w-full flex-col sm:flex-row relative mb-16">
        <div className="w-full sm:w-1/2 relative">
          <Image
            alt="Andamio"
            className="w-full h-[400px] object-cover opacity-70 rounded-xl"
            height={400}
            src={andamio}
            width={400}
          />
          <div className="absolute top-0 left-0 w-12 h-1 bg-yellow-500 rounded-tl-lg" />
          <div className="absolute top-0 left-0 w-1 h-12 bg-yellow-500 rounded-tl-lg" />

          {/* Esquina inferior derecha */}
          <div className="absolute bottom-0 right-0 w-12 h-1 bg-yellow-500 rounded-br-lg" />
          <div className="absolute bottom-0 right-0 w-1 h-12 bg-yellow-500 rounded-br-lg" />
        </div>

        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center px-7 py-10 relative z-10">
          <FadeInSection />
          <div className="w-full flex justify-end mr-40">
            <Button
              as={Link}
              className="mt-12"
              color="warning"
              href="/contacto"
              variant="bordered"
            >
              Contacto
            </Button>
          </div>
        </div>
      </div>

      <section className=" flex flex-col items-center justify-center gap-4">
        <div className="relative w-full">
          <div className="absolute top-9 left-0 sm:-left-3 sm:-top-2 h-64 w-0.5 bg-yellow-500 ml-4 " />
          <div className="absolute top-0 left-2 sm:-left-3 sm:-top-10 w-72 h-0.5 bg-yellow-500 mt-12" />

          <div className="bg-black w-full text-start py-12 px-8 sm:mb-16">
            <SubText />

            <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {serviciosData.map((card, index) => (
                <AnimatedCard
                  key={index}
                  img={card.icon}
                  subtitle={card.text}
                  title={card.title}
                  url={card.url}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-3 right-0 sm:-bottom-3 sm:-right-2 h-64 w-0.5 bg-yellow-500 mr-4 z-10" />
          <div className="absolute -bottom-7 right-2 sm:-bottom-12 sm:-right-2 w-72 h-0.5 bg-yellow-500 mb-12 z-10" />
        </div>
        <div className="bg-gradient-to-b from-gray-200 to-white w-full text-center sm:mt-16 ">
          <Slider />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-8 sm:bg-black bg-white">
            <FlipCardComponent />
          </div>
        </div>
      </section>
      <Ofrecemos />
    </>
  );
}
