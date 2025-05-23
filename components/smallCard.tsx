"use client";
import { Card, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";

export default function SmallCard({
  list,
}: {
  list: { title: string; img?: string; description?: string }[];
}) {
  return (
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card key={index} shadow="sm">
          <CardBody className="overflow-visible p-0 flex flex-col items-center justify-center">
            {item.img && (
              <Image
                alt={item.title}
                className=""
                height={200}
                src={item.img}
                width={200}
              />
            )}
          </CardBody>
          <CardFooter className="text-small justify-center flex flex-col items-center">
            <p className="text-xl">{item.title}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
