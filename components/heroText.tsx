"use client";
import { motion } from "framer-motion";

import AnimatedCard from "./animatedCard";

export default function FadeInSection() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="text-start text-3xl font-bold mt-8"
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
        className="text-start text-2xl font-bold mt-8"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Confía en nuestra experiencia en andamios, perforaciones y transporte.
      </motion.h2>
      <motion.h2
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-2xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Servicios rápidos, seguros y a medida de tu obra.
      </motion.h2>
    </div>
  );
}

export function Ofrecemos() {
  return (
    <section className="w-full relative py-16 px-6">
      <div className="absolute inset-0 bg-yellow-500/90 -z-10" />
      <h2 className="text-3xl font-bold text-center mb-6">¿Qué ofrecemos?</h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mb-10 text-white font-bold"
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
            title: "Arriendo de Andamios",
            description:
              "Colgantes eléctricos y fijos certificados para alturas de hasta 200 metros.",
            img: "card-images/andamio-colgante-card.jpg",
          },
          {
            title: "Herramientas de Construcción",
            description:
              "Martillos demoledores, aspiradoras y más, en óptimas condiciones.",
            img: "card-images/herramientas.jpg",
          },
          {
            title: "Perforación con Testiguera",
            description:
              "Obtención de muestras geotécnicas con equipos especializados.",
            img: "card-images/perforacion.jpg",
          },
          {
            title: "Sevicio de Transporte",
            description:
              "Transporte de equipos y materiales a cualquier lugar del país.",
            img: "card-images/transporte.jpg",
          },
          {
            title: "Certificaciones de Seguridad",
            description:
              "Equipos certificados y seguros para trabajos en altura.",
            img: "card-images/certificacion.jpg",
          },
        ].map((item, idx) => (
          <AnimatedCard
            key={idx}
            delay={idx * 0.15}
            img={item.img}
            subtitle={item.description}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}
