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
          <p>+56 9 1234 5678</p>
          <p>Viña del mar, Chile</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Síguenos</h4>
          <div className="flex gap-3">
            <Link
              href="https://www.facebook.com/p/Blazer-Andamios-100008934150281/?locale=es_LA"
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
              href="https://www.instagram.com/serviciosblazerltda?igsh=cmd4dW04enlvaGVn"
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
