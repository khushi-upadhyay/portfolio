
"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
    skills: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-black dark:text-white">
        Projects <br />
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-black dark:text-white">
        Here&apos;s a glimpse into some of my projects.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    skills: string;
  };
  translate: MotionValue<number>;
}) => {
  const isExternalLink = product.link.startsWith('http') || product.link.startsWith('https');

  return (
<motion.div
  style={{
    x: translate,
  }}
  whileHover={{
    y: -20,
  }}
  key={product.title}
  className="group/product h-96 w-[30rem] relative flex-shrink-0"
>
  {isExternalLink ? (
    <a
      href={product.link}
      className="block h-full w-full group-hover/product:shadow-2xl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover absolute inset-0"
        alt={product.title}
      />
    </a>
  ) : (
    <Link
      href={product.link}
      className="block h-full w-full group-hover/product:shadow-2xl"
    >
      <Image
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover absolute inset-0"
        alt={product.title}
      />
    </Link>
  )}
  <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black cursor-pointer pointer-events-none group-hover/product:pointer-events-auto"></div>
  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/product:opacity-100">
    <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-3xl text-white hover:underline">
      {product.title}
    </a>
    <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:underline">
      {product.skills}
    </a>
  </div>
</motion.div>
);
 };