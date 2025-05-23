import Image from "next/image";

import HeaderPageTitle from "@/components/headerPageTitle";
import ListPage from "@/components/listPage";
import SmallCard from "@/components/smallCard";

const caracteristicas = [
  "Fácil instalación y desmontaje.",
  "Acceso seguro a áreas de difícil acceso.",
  "Diseño modular y versátil.",
  "Capacidad de carga adecuada para trabajos pesados.",
  "Estabilidad y seguridad garantizadas.",
];

export default function AndamiosColgantesPage() {
  return (
    <div className="w-full flex items-start text-start px-4 py-10 flex-col gap-8">
      <HeaderPageTitle pageTitle="Andamios Colgantes" />

      <p className="text-2xl font-extrabold leading-snug">
        Andamios colgantes para trabajos en altura.
      </p>
      <div className="flex gap-4 justify-center w-full">
        <Image
          alt="Andamio"
          className="w-full object-cover opacity-70 rounded-xl"
          height={150}
          src="/andamio-colgante.jpg"
          width={150}
        />
        <Image
          alt="Andamio"
          className="w-full  object-cover opacity-70 rounded-xl"
          height={150}
          src="/andamio-colgante.jpg"
          width={150}
        />
      </div>
      <div className="text-start flex flex-col gap-4 text-lg font-bold">
        <p className="text-md font-light text-justify">
          Solución versátil y eficiente para trabajos en altura. Acceso seguro y
          cómodo a áreas de difícil acceso, como fachadas de edificios, techos y
          estructuras industriales. Ideales para trabajos de mantenimiento,
          limpieza, pintura y construcción.
        </p>
      </div>

      <div className="w-full bg-yellow-500 py-8">
        <div className="flex flex-col gap-4 text-white">
          <h2 className="text-4xl font-extrabold leading-snug text-center my-6">
            Características
          </h2>
          <div className="w-full flex flex-col gap-4">
            <ListPage caracteristicas={caracteristicas} />
          </div>
        </div>
      </div>

      <div className="w-full text-start flex flex-col gap-4 text-lg font-bold">
        <h2 className="text-4xl font-extrabold leading-snug text-center my-6">
          Calidad Garantizada y Seguridad Comprobada
        </h2>
        <SmallCard />
      </div>
    </div>
  );
}
