import React from "react";

import SmallCard from "./smallCard";
import ListPage from "./listPage";
import HeaderPageTitle from "./headerPageTitle";

export const PageComponent = ({
  title,
  subtitle,
  images,
  descripcion,
  caracteristicas,
  calidad,
}: {
  title: string;
  subtitle: string;
  images: { src: string; alt: string }[];
  descripcion: string;
  caracteristicas: { title: string }[];
  calidad: { titulo: string; items: { title: string }[] };
}) => {
  return (
    <div className="w-full flex items-start text-start px-4 py-10 flex-col gap-8">
      <HeaderPageTitle pageTitle={title} />

      <p className="text-2xl font-extrabold leading-snug">{subtitle}</p>
      <div className="flex gap-4 justify-center w-full sm:items-start">
        <div className="hidden sm:flex flex-col gap-4 text-lg font-bold basis-3/5">
          <p className="text-md font-light text-justify sm:text-xl">
            {descripcion}
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-20xl aspect-video">
            <iframe
              allowFullScreen
              allow="autoplay; encrypted-media"
              className="w-full aspect-video pointer-events-none rounded-xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1"
              title="YouTube video player"
            />
          </div>
        </div>

        {/* {images.map((img, i) => (
          <Image
            key={i}
            alt={img.alt}
            className="w-full object-cover rounded-xl"
            height={200}
            src={img.src}
            width={200}
          />
        ))} */}
      </div>
      <div className="text-start flex flex-col gap-4 text-lg font-bold sm:hidden">
        <p className="text-md font-light text-justify sm:text-xl">
          {descripcion}
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
          {calidad.titulo}
        </h2>
        <SmallCard list={calidad.items} />
      </div>
    </div>
  );
};
