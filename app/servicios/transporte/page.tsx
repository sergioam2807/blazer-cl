import { PageComponent } from "@/components/pageComponent";

const transporteData = {
  title: "Servicio de Transporte",
  subtitle: "Logística eficiente y puntual para tu proyecto.",
  images: [
    { src: "/transporte1.jpg", alt: "Transporte" },
    { src: "/transporte3.jpg", alt: "Camion" },
  ],
  descripcion: `Ofrecemos transporte seguro y eficiente para el traslado de andamios, maquinaria y materiales a cualquier punto del país. Garantizamos tiempos de entrega y cuidado de la carga.`,
  caracteristicas: [
    { title: "Cobertura nacional." },
    { title: "Flota moderna y especializada." },
    { title: "Conductores con experiencia." },
    { title: "Cuidado y seguridad en el transporte de equipos." },
    { title: "Coordinación logística puntual." },
  ],
  calidad: {
    titulo: "Transporte Seguro y Confiable",
    items: [
      { title: "Certificados", img: "/icons/certified.svg" },
      { title: "Confiabilidad", img: "/icons/trust.svg" },
      { title: "Puntualidad", img: "/icons/time.svg" },
      { title: "Seguridad", img: "/icons/security.svg" },
    ],
  },
};

export default function TransportePage() {
  return (
    <PageComponent
      calidad={transporteData.calidad}
      caracteristicas={transporteData.caracteristicas}
      descripcion={transporteData.descripcion}
      images={transporteData.images}
      subtitle={transporteData.subtitle}
      title={transporteData.title}
    />
  );
}
