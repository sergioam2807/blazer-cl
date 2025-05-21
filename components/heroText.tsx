"use client";
import { motion } from "framer-motion";

import AnimatedCard from "./animatedCard";

export default function FadeInSection() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="text-start text-3xl font-bold mt-8 sm:text-5xl sm:mb-10 text-white"
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      Soluciones seguras <br /> para grandes alturas y <br />
      proyectos exigentes
    </motion.div>
  );
}

export function SubText() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.h2
        animate={{ opacity: 1, y: 0 }}
        className="text-start text-2xl font-extrabold mt-8 sm:text-4xl "
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Confía en nuestra experiencia en andamios, perforaciones y transporte.
      </motion.h2>
      <motion.h2
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-2xl sm:mb-10 sm:text-3xl font-extralight"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Servicios rápidos, seguros y a la medida de tu obra.
      </motion.h2>
    </div>
  );
}

export function Ofrecemos() {
  return (
    <section className="w-full relative py-16 px-6">
      <div className="absolute inset-0 bg-yellow-500/90 -z-10" />

      <h2 className="text-3xl font-bold text-center mb-6 sm:text-4xl sm:mb-10">
        ¿Qué ofrecemos?
      </h2>
      <motion.p
        className="text-center sm:max-w-4xl max-w-2xl mx-auto mb-10 text-white font-bold sm:text-xl sm:mb-16"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        En Blazer Andamios brindamos soluciones integrales para la construcción,
        con arriendo de maquinarias certificadas, transporte de alta calidad y
        un equipo comprometido con la seguridad y eficiencia de cada proyecto.
      </motion.p>

      <div className="grid grid-cols-1 px-8 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Experiencia",
            description:
              "Más de 11 años en el mercado, brindando soluciones efectivas.",
            img: "card-images/andamio-colgante-card.jpg",
          },
          {
            title: "Múltiples Clientes",
            description:
              "Confianza de empresas líderes en el sector de la construcción.",
            img: "card-images/clientes.jpg",
          },
          {
            title: "Trabajos de Calidad",
            description:
              "Proyectos exitosos garantizados por nuestro equipo especializado.",
            img: "card-images/calidad.jpg",
          },
          {
            title: "Sevicio de Transporte",
            description:
              "Transporte de equipos y materiales a cualquier lugar del país.",
            img: "card-images/transporte.jpg",
          },
          {
            title: "Buen Stock de Productos",
            description:
              "Disponibilidad inmediata de andamios y maquinarias para su proyecto.",
            img: "card-images/stock.jpg",
          },
        ].map((item, idx, arr) => {
          const isLastTwoStart = arr.length % 3 === 2 && idx === arr.length - 2;

          if (isLastTwoStart) {
            return (
              <>
                <div key={`mobile-last-1-${idx}`} className="w-full lg:hidden">
                  <AnimatedCard
                    delay={idx * 0.15}
                    img={item.img}
                    subtitle={item.description}
                    title={item.title}
                  />
                </div>
                <div
                  key={`mobile-last-2-${idx + 1}`}
                  className="w-full lg:hidden"
                >
                  <AnimatedCard
                    delay={(idx + 1) * 0.15}
                    img={arr[idx + 1].img}
                    subtitle={arr[idx + 1].description}
                    title={arr[idx + 1].title}
                  />
                </div>

                <div
                  key={`desktop-last-two-${idx}`}
                  className="col-span-full hidden lg:flex justify-around gap-8"
                >
                  {[item, arr[idx + 1]].map((cardItem, i) => (
                    <div
                      key={`desktop-card-${idx + i}`}
                      className="w-full lg:w-[32%]"
                    >
                      <AnimatedCard
                        delay={(idx + i) * 0.15}
                        img={cardItem.img}
                        subtitle={cardItem.description}
                        title={cardItem.title}
                      />
                    </div>
                  ))}
                </div>
              </>
            );
          }

          const isLastExtra = arr.length % 3 === 2 && idx === arr.length - 1;

          if (isLastExtra) return null;

          return (
            <div key={`normal-card-${idx}`} className="w-full">
              <AnimatedCard
                delay={idx * 0.15}
                img={item.img}
                subtitle={item.description}
                title={item.title}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
