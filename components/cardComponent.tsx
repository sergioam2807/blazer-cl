import { Card, CardHeader, CardBody } from "@heroui/card";
import Image from "next/image";
import Link from "next/link";

export default function CardComponent({
  text,
  icon,
  title,
  url,
}: {
  text?: string;
  icon?: string;
  title?: string;
  url?: string;
}) {
  return (
    <Link className="block group" href={url || "#"}>
      <Card className="py-4 h-72 bg-yellow-400 bg-opacity-60 hover:bg-opacity-100 hover:text-black transition-all duration-300 ease-in-out rounded-xl shadow-lg group flex flex-col">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center gap-2">
          <h4 className="font-bold text-large uppercase group-hover:text-black">
            {title}
          </h4>
          <p className="text-tiny font-bold group-hover:text-black text-start">
            {text}
          </p>
        </CardHeader>
        <CardBody className="overflow-visible flex justify-center items-center py-6 flex-1">
          <Image
            alt="Card background"
            className={
              `object-cover rounded-xl filter brightness-0 invert group-hover:filter-none transition-all duration-300` +
              (icon === "/icons/colgante.png" ? " rotate-180" : "")
            }
            height={80}
            src={icon || "/andamio-colgante.jpg"}
            width={80}
          />
        </CardBody>
      </Card>
    </Link>
  );
}
