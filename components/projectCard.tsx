'use client"';
import Image from "next/image";

const proyectosData = [
  {
    title: "Edificio Central",
    img: "/proyects/andamio-colgante2.jpg",
    hito: "Montaje de andamios colgantes en tiempo récord para fachada principal.",
  },
  {
    title: "Hospital Regional",
    img: "/proyects/andamiofijo2.jpg",
    hito: "Solución de acceso seguro para trabajos en altura en pabellones.",
  },
  {
    title: "Centro Comercial Plaza",
    img: "/proyects/transporte1.jpg",
    hito: "Instalación de andamios colgantes para renovación de fachadas.",
  },
  {
    title: "Edificio Corporativo",
    img: "/proyects/transporte2.jpg",
    hito: "Montaje de andamios colgantes para trabajos de mantenimiento.",
  },
];

export default function FlipCardComponent() {
  return (
    <section className="w-full py-10">
      <div className="flex justify-center py-16 sm:py-20">
        <div className="flex justify-center flex-col gap-12 sm:gap-1 items-center">
          <p className="text-black font-bold mb-16 text-3xl sm:mb-16 sm:text-white">
            Proyectos destacados
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 ">
            {proyectosData.map((proyect) => (
              <div
                key={proyect.title}
                className="group h-72 w-72 [perspective:1000px]"
              >
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}

                  <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                    {proyect.img && (
                      <Image
                        alt={proyect.title}
                        className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                        height={220}
                        src={proyect.img}
                        width={220}
                      />
                    )}
                    <div className="absolute bottom-0 left-0 w-full bg-black/80 py-3 px-2 rounded-b-xl">
                      <p className="text-2xl text-white font-bold text-start m-0">
                        {proyect.title}
                      </p>
                    </div>
                  </div>

                  {/* Back Face */}

                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h2 className="text-2xl font-bold mb-4">
                        {proyect.title}
                      </h2>

                      <p className="text-lg text-pretty text-center mb-4">
                        {proyect.hito}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
