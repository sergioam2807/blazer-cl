import { PageComponent } from "@/components/pageComponent";

const andamiosFijosData = {
  title: "Andamios Fijos",
  subtitle: "Solidez y seguridad para trabajos prolongados en altura.",
  images: [
    { src: "/andamiofijo1.jpg", alt: "Andamio fijo" },
    { src: "/andamiofijo2.jpg", alt: "Andamio" },
  ],
  descripcion: `Los andamios fijos ofrecen una solución robusta y estable para proyectos de construcción que requieren una base permanente. Ideales para trabajos prolongados en fachadas, estructuras o interiores industriales.`,
  caracteristicas: [
    { title: "Estructura firme y estable para uso continuo." },
    { title: "Montaje seguro en superficies planas." },
    { title: "Aptos para uso en interiores y exteriores." },
    { title: "Resistentes a condiciones climáticas adversas." },
    { title: "Cumplen con normativas de seguridad vigentes." },
  ],
  calidad: {
    titulo: "Comprometidos con la Seguridad y la Eficiencia",
    items: [
      { title: "Certificados", img: "/icons/certified.svg" },
      { title: "Confiabilidad", img: "/icons/trust.svg" },
      { title: "Calidad", img: "/icons/star.svg" },
      { title: "Seguridad", img: "/icons/security.svg" },
    ],
  },
};

export default function AndamiosFijosPage() {
  return (
    <PageComponent
      calidad={andamiosFijosData.calidad}
      caracteristicas={andamiosFijosData.caracteristicas}
      descripcion={andamiosFijosData.descripcion}
      images={andamiosFijosData.images}
      subtitle={andamiosFijosData.subtitle}
      title={andamiosFijosData.title}
    />
  );
}
