import Image from "next/image";
import { Link } from "@heroui/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="w-fit">
            <h4 className="font-bold text-yellow-500 text-lg mb-1">
              Blazer Ltda.
            </h4>
            <div className="h-0.5 bg-yellow-500 w-full rounded" />
          </div>
          <br className="mt-1 h-2 w-1/2 bg-yellow-500" />
          <p className="font-bold">
            Soluciones para la construcción desde 2014
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contacto</h4>
          <p>Blazer.ltda@gmail.com</p>
          <p>Blazer Andamios Ltda : +56 9 3393 3641</p>
          <p>Transporte : +56 9 7383 3905</p>
          <p>Viña del mar, Chile</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Síguenos</h4>
          <div className="flex gap-3">
            <Link
              href="https://www.facebook.com/share/14V7LVnKfHv/?locale=es_LA"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt="Facebook"
                className="hover:opacity-80 transition-opacity filter invert"
                height={28}
                src="/facebook.png"
                width={28}
              />
            </Link>
            <Link
              href="https://www.instagram.com/serviciosblazerltda?igsh=MWM2dnJ1cHB3cHhnOQ=="
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt="Instagram"
                className="hover:opacity-80 transition-opacity filter invert"
                height={28}
                src="/instagram.png"
                width={28}
              />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} Blazer Ltda. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};
