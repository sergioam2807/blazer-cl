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
    <Card className="py-4 bg-yellow-400 bg-opacity-60 hover:bg-opacity-100 hover:text-black transition-all duration-300 ease-in-out rounded-xl shadow-lg group">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-2">
        <h4 className="font-bold text-large group-hover:text-black">{title}</h4>
        <p className="text-tiny uppercase font-bold group-hover:text-black">
          {text}
        </p>
        {/* <small className="text-default-500">{text}</small> */}
      </CardHeader>
      <CardBody className="overflow-visible flex justify-center items-center py-6">
        <Image
          alt="Card background"
          className="object-cover rounded-xl filter brightness-0 invert group-hover:filter-none transition-all duration-300"
          height={80}
          src={icon || "/andamio-colgante.jpg"}
          width={80}
        />
      </CardBody>
    </Card>
  );
}
