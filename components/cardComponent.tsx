import { Card, CardHeader, CardBody } from "@heroui/card";
import Image from "next/image";

export default function CardComponent({
  text,
  icon,
  title,
}: {
  text?: string;
  icon?: string;
  title?: string;
}) {
  return (
    <Card className="py-4 h-72 bg-black   hover:bg-opacity-60 hover:text-black transition-all duration-300 ease-in-out rounded-xl shadow-lg group flex flex-col">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center gap-2">
        <h4 className="font-bold text-large sm:text-2xl uppercase group-hover:text-white text-center h-14 sm:h-10">
          {title}
        </h4>
        <p className="text-tiny font-bold sm:text-center sm:text-medium group-hover:text-white text-center">
          {text}
        </p>
      </CardHeader>
      <CardBody className="overflow-visible flex justify-center items-center py-6 flex-1">
        <Image
          alt="Card background"
          className={
            `object-cover rounded-xl filter brightness-0 invert  transition-all duration-300` +
            (icon === "/icons/colgante.png" ? " rotate-180" : "")
          }
          height={80}
          src={icon || "/andamio-colgante.jpg"}
          width={80}
        />
      </CardBody>
    </Card>
  );
}
