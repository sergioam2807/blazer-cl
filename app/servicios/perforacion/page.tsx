import { PageComponent } from "@/components/pageComponent";

const perforacionTestigueraData = {
  title: "Perforación con Testiguera",
  subtitle: "Extracción precisa de muestras geotécnicas.",
  images: [
    { src: "/testiguera1.jpg", alt: "Perforación" },
    { src: "/testiguera2.jpg", alt: "Perforación" },
  ],
  descripcion: `La perforación con testiguera permite obtener muestras cilíndricas del subsuelo para análisis geotécnicos. Ideal para estudios de suelo, obras civiles y exploración de materiales.`,
  caracteristicas: [
    { title: "Extracción limpia y precisa de testigos." },
    { title: "Equipos especializados y operarios capacitados." },
    { title: "Adecuado para diferentes tipos de terreno." },
    { title: "Resultados confiables para análisis técnicos." },
    { title: "Cumplimiento de estándares de calidad." },
  ],
  video: { code: "A25E4nKH_5k", initialTime: 3, endTime: 45 },
  calidad: {
    titulo: "Precisión Técnica y Cumplimiento",
    items: [
      { title: "Certificados", img: "/icons/certified.svg" },
      { title: "Cumplimiento", img: "/icons/compliance.svg" },
      { title: "Calidad", img: "/icons/star.svg" },
      { title: "Seguridad", img: "/icons/security.svg" },
    ],
  },
};

export default function PerforacionPage() {
  return (
    <PageComponent
      calidad={perforacionTestigueraData.calidad}
      caracteristicas={perforacionTestigueraData.caracteristicas}
      descripcion={perforacionTestigueraData.descripcion}
      images={perforacionTestigueraData.images}
      subtitle={perforacionTestigueraData.subtitle}
      title={perforacionTestigueraData.title}
      video={perforacionTestigueraData.video}
    />
  );
}
