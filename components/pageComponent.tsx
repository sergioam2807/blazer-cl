import React from "react";
import Image from "next/image";

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
  video,
}: {
  title: string;
  subtitle: string;
  images?: { src: string; alt: string }[];
  descripcion: string;
  caracteristicas: { title: string }[];
  calidad: { titulo: string; items: { title: string }[] };
  video?: { code: string; initialTime: number; endTime: number };
}) => {
  return (
    <div className="w-full flex items-start text-start px-4 py-8 flex-col gap-8">
      <HeaderPageTitle pageTitle={title} />

      <p className="sm:hidden text-2xl font-extrabold leading-snug">
        {subtitle}
      </p>
      <div className="flex sn gap-4 justify-center w-full sm:items-start items-center flex-col sm:flex-row">
        <div className="flex flex-col gap-16 text-lg font-bold basis-4/5">
          <p className="hidden sm:flex text-2xl font-extrabold leading-snug">
            {subtitle}
          </p>
          <div className="hidden sm:flex flex-col gap-4 text-lg font-bold basis-1/5">
            <p className="text-md font-light text-justify sm:text-xl">
              {descripcion}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-12xl aspect-video flex">
            {video ? (
              <iframe
                allowFullScreen
                allow="autoplay; encrypted-media"
                className="w-full aspect-video pointer-events-none rounded-xl opacity-80"
                src={`https://www.youtube.com/embed/${video.code}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&start=${video.initialTime}&end=${video.endTime}&loop=1&playlist=${video.code}`}
                title="YouTube video player"
              />
            ) : (
              images?.map((img, i) => (
                <Image
                  key={i}
                  alt={img.alt}
                  className="w-full object-cover rounded-xl mb-4"
                  height={200}
                  src={img.src}
                  width={200}
                />
              ))
            )}
          </div>
        </div>
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
