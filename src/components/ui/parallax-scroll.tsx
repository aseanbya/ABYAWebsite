"use client";

import { useRef } from "react";
import Image from "next/image";
import { cn } from "~/utils/cn";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

export const ParallaxScroll = ({
  items, // Changed from images to items to reflect the new data structure
  className,
}: {
  items: { image: string; name: string; position: string }[]; // Updated type to reflect the new expected data structure
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(items.length / 3);

  const firstPart = items.slice(0, third);
  const secondPart = items.slice(third, 2 * third);
  const thirdPart = items.slice(2 * third);

  return (
    <div
      className={cn("h-screen w-full items-start overflow-y-auto", className)}
      ref={gridRef}
    >
      <div
        className="mx-auto grid grid-cols-1 items-start gap-10 py-10 md:grid-cols-2 lg:grid-cols-3"
        ref={gridRef}
      >
        {/* Mapping through each part similar to before, but now also displaying the name and position */}
        <div className="grid gap-10">
          {firstPart.map((item, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <Image
                src={item.image}
                className="!m-0 h-80 w-full gap-10 rounded-lg object-cover object-left-top !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
              <div className="text-center">
                {item.name} - {item.position}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((item, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Image
                src={item.image}
                className="!m-0 h-80 w-full gap-10 rounded-lg object-cover object-left-top !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
              <div className="text-center">
                {item.name} - {item.position}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((item, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Image
                src={item.image}
                className="!m-0 h-80 w-full gap-10 rounded-lg object-cover object-left-top !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
              <div className="text-center">
                {item.name} - {item.position}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
