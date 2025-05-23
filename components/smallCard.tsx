"use client";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";

export default function SmallCard() {
  const list = [
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
  ];

  return (
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card key={index} shadow="sm">
          <CardBody className="overflow-visible p-0 flex flex-col items-center justify-center">
            <Image
              alt={item.title}
              className=""
              height={200}
              src={item.img}
              width={200}
            />
          </CardBody>
          <CardFooter className="text-small justify-center">
            <p className="text-xl">{item.title}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
