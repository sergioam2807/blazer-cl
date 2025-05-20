"use client";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";

interface AnimatedCardProps {
  title: string;
  subtitle: string;
  img: string;
  delay?: number;
}

export default function AnimatedCard({
  title,
  subtitle,

  img,
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.button
      className="transition-transform duration-300"
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Card className="py-4 hover:scale-105 hover:opacity-80 transition-all duration-300">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h4 className="font-bold text-large text-center">{title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex flex-col items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-md"
            height={250}
            src={img}
            width={250}
          />
          <p className="text-tiny uppercase font-bold pt-2 text-center px-4">
            {subtitle}
          </p>
        </CardBody>
      </Card>
    </motion.button>
  );
}
