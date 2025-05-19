import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import Image from "next/image";
import { Button } from "@heroui/button";
import Link from "next/link";

import { title } from "@/components/primitives";
import andamio from "@/public/andamio-colgante.jpg";

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <Image
          alt="Andamio"
          className="w-full opacity-30"
          height={400}
          src={andamio}
          width={400}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-7">
          <span className={`${title()} mt-8 text-white`}>
            Soluciones <br /> seguras para grandes alturas y <br />
            proyectos exigentes
          </span>
          <div className="w-full flex justify-end">
            <Button
              as={Link}
              className="mt-2"
              color="warning"
              href="https://github.com/heroui-inc/heroui"
              variant="bordered"
            >
              Contacto
            </Button>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center gap-4">
        <div>Nuestros Clientes</div>
        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </>
  );
}
