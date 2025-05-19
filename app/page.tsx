import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";

import andamio from "@/public/andamio-colgante.jpg";
import FadeInSection, { SubText } from "@/components/heroText";
import Slider from "@/components/slider";
import CardComponent from "@/components/cardComponent";

const cardData = [
  {
    title: "Experiencia",
    text: "Más de 20 años en el mercado",
    icon: "/icons/experiencia.png",
  },
  {
    title: "Múltiples Clientes",
    text: "Confianza de empresas líderes",
    icon: "/icons/clientes.png",
  },
  {
    title: "Trabajos de Calidad",
    text: "Proyectos exitosos garantizados",
    icon: "/icons/calidad.png",
  },
  {
    title: "Buen Stock de Productos",
    text: "Disponibilidad inmediata",
    icon: "/icons/stock.png",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <Image
          alt="Andamio"
          className="w-full opacity-30"
          height={400}
          src={andamio}
          width={400}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-7">
          <FadeInSection />
          <div className="w-full flex justify-end">
            <Button
              as={Link}
              className="mt-12"
              color="warning"
              href="https://github.com/heroui-inc/heroui"
              variant="bordered"
            >
              Contacto
            </Button>
          </div>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center gap-4">
        <div className="bg-black w-full text-start py-12 px-8">
          <SubText />

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {cardData.map((card, index) => (
              <CardComponent
                key={index}
                icon={card.icon}
                text={card.text}
                title={card.title}
              />
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-b from-gray-200 to-white w-full text-center ">
          <Slider />
        </div>
        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </>
  );
}
