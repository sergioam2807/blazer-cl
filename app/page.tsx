import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";

import andamio from "@/public/andamio-colgante.jpg";
import FadeInSection, { SubText, Ofrecemos } from "@/components/heroText";
import Slider from "@/components/slider";
import CardComponent from "@/components/cardComponent";

const cardData = [
  {
    title: "Experiencia",
    text: "Más de 11 años en el mercado",
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
              href="https://github.com/heroui-inc/heroui"
              variant="bordered"
            >
              Contacto
            </Button>
          </div>
        </div>
      </div>

      {/* Solo visible en desktop */}
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
          {/* <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 to-transparent" /> */}
        </div>

        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center px-7 py-10 relative z-10">
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

      <section className=" flex flex-col items-center justify-center gap-4">
        <div className="relative w-full">
          <div className="absolute top-9 left-0 sm:-left-3 sm:-top-2 h-64 w-0.5 bg-yellow-500 ml-4 " />
          <div className="absolute top-0 left-2 sm:-left-3 sm:-top-10 w-72 h-0.5 bg-yellow-500 mt-12" />

          <div className="bg-black w-full text-start py-12 px-8 sm:mb-16">
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

          <div className="absolute bottom-3 right-0 sm:-bottom-3 sm:-right-2 h-64 w-0.5 bg-yellow-500 mr-4 z-10" />
          <div className="absolute -bottom-7 right-2 sm:-bottom-12 sm:-right-2 w-72 h-0.5 bg-yellow-500 mb-12 z-10" />
        </div>
        <div className="bg-gradient-to-b from-gray-200 to-white w-full text-center sm:mt-16 sm:-mb-24">
          <Slider />
        </div>
      </section>
      <div className="hidden lg:block w-full">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#eab308"
            fillOpacity="0.9"
          />
        </svg>
      </div>
      <Ofrecemos />
      <footer className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="w-fit">
              <h4 className="font-bold text-yellow-500 text-lg mb-1">
                Blazer Ltda.
              </h4>
              <div className="h-0.5 bg-yellow-500 w-full rounded" />
            </div>
            <br className="mt-1 h-2 w-1/2 bg-yellow-500" />
            <p className="font-bold">
              Soluciones para la construcción desde 2014
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contacto</h4>
            <p>Blazer.ltda@gmail.com</p>
            <p>+56 9 1234 5678</p>
            <p>Viña del mar, Chile</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Síguenos</h4>
            <div className="flex gap-3">
              <Link
                href="https://www.facebook.com/p/Blazer-Andamios-100008934150281/?locale=es_LA"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt="Facebook"
                  className="hover:opacity-80 transition-opacity filter invert"
                  height={28}
                  src="/facebook.png"
                  width={28}
                />
              </Link>
              <Link
                href="https://www.instagram.com/serviciosblazerltda?igsh=cmd4dW04enlvaGVn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt="Instagram"
                  className="hover:opacity-80 transition-opacity filter invert"
                  height={28}
                  src="/instagram.png"
                  width={28}
                />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} Blazer Ltda. Todos los derechos
          reservados.
        </p>
      </footer>
    </>
  );
}
