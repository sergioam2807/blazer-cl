"use client";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface AnimatedCardProps {
  title: string;
  subtitle: string;
  img: string;
  delay?: number;
  url?: string;
}

export default function AnimatedCard({
  title,
  subtitle,
  img,
  delay = 0,
  url,
}: AnimatedCardProps) {
  const [hovered, setHovered] = useState(false);

  const cardContent = (
    <motion.div
      className="transition-transform duration-300"
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Card
        className="bg-yellow-500 w-[300px] h-[350px] pb-4 transition-all duration-300 overflow-hidden flex flex-col"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <CardBody className="bg-white p-0 flex justify-center items-center h-[250px] w-full overflow-hidden rounded-none">
          <motion.div
            animate={{ scale: hovered ? 0.8 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              alt="Card background"
              className="w-[400px] h-full rounded-none"
              height={250}
              src={img}
              style={{ border: "none" }}
              width={250}
            />
          </motion.div>
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center min-h-[10px]">
          <h4 className="font-bold text-large text-center sm:text-xl">
            {title}
          </h4>
        </CardHeader>
        <p className="text-sm font-normal pt-2 text-center px-4 sm:text-medium h-[75px]">
          {subtitle}
        </p>
      </Card>
    </motion.div>
  );

  return url ? (
    <Link className="block" href={url}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}
