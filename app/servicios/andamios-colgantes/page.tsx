import { PageComponent } from "@/components/pageComponent";

const andamiosColgantesData = {
  title: "Andamios Colgantes",
  subtitle: "Andamios colgantes para trabajos en altura.",
  images: [
    { src: "/andamio-colgante.jpg", alt: "Andamio colgante" },
    { src: "/andamio-colgante2.jpg", alt: "Andamio" },
  ],
  descripcion: `Solución versátil y eficiente para trabajos en altura. Acceso seguro y cómodo a áreas de difícil acceso, como fachadas de edificios, techos y estructuras industriales. Ideales para trabajos de mantenimiento, limpieza, pintura y construcción.`,
  caracteristicas: [
    { title: "Fácil instalación y desmontaje." },
    { title: "Acceso seguro a áreas de difícil acceso." },
    { title: "Diseño modular y versátil." },
    { title: "Capacidad de carga adecuada para trabajos pesados." },
    { title: "Estabilidad y seguridad garantizadas." },
  ],
  video: { code: "BZV41zlN2Uc", initialTime: 3, endTime: 76 },
  calidad: {
    titulo: "Calidad Garantizada y Seguridad Comprobada",
    items: [
      {
        title: "Certificados",
        img: "/icons/certified.svg",
      },
      {
        title: "Confiabilidad",
        img: "/icons/trust.svg",
      },
      {
        title: "Calidad",
        img: "/icons/star.svg",
      },
      {
        title: "Seguridad",
        img: "/icons/security.svg",
      },
    ],
  },
};

export default function AndamiosColgantesPage() {
  return (
    <PageComponent
      calidad={andamiosColgantesData?.calidad}
      caracteristicas={andamiosColgantesData.caracteristicas}
      descripcion={andamiosColgantesData.descripcion}
      images={andamiosColgantesData.images}
      subtitle={andamiosColgantesData.subtitle}
      title={andamiosColgantesData.title}
      video={andamiosColgantesData.video}
    />
  );
}
