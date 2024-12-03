import Image from "next/image";
import React, { useRef } from "react";
import StartIcon from "../SVGs/StartIcon/StartIcon";
import { motion, useInView } from "framer-motion";

const CardPresentation = ({
  children,
  variant,
  img,
  title,
  height,
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  img: string;
  title: string;
  height: string;
}) => {
  const stylesCard =
    variant === "primary"
      ? {
          bg: "bg-pink-100",
          bgHeader: "bg-pink-900",
          textTitle: "text-pink-900",
          svgFill: "fill-pink-700",
        }
      : {
          bg: "bg-indigo-200",
          bgHeader: "bg-indigo-950",
          textTitle: "text-indigo-950",
          svgFill: "fill-indigo-700",
        };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <article
    ref={ref}
      className={`${stylesCard.bg} rounded-[8px] ${height} relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto`}
    >
      <header
        className={`rounded-t-[8px] ${stylesCard.bgHeader} h-[180px] phone-lg:h-[250px] relative flex justify-center`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.5,
          }}
          className="absolute bottom-0 phone-lg:w-[270px] phone-lg:h-[213px]"
        >
          <Image
            className="phone-lg:w-[270px] phone-lg:h-[213px]"
            src={img}
            alt="image presentation"
            width={172}
            height={165}
            priority
          />
        </motion.div>
      </header>
      <section className="py-[16px] px-[30px] flex flex-col justify-center h-[calc(100%-180px)] phone-lg:h-[calc(100%-250px)]">
        <h3
          className={`font-playfair-display font-bold text-[32px] ${stylesCard.textTitle} text-center lg:text-[40px]`}
        >
          {title}
        </h3>
        {children}
        <div className="flex justify-between absolute left-[10px]  bottom-[10px] w-[calc(100%-20px)]">
          <StartIcon className={`${stylesCard.svgFill}`} />
          <StartIcon className={`${stylesCard.svgFill}`} />
        </div>
      </section>
    </article>
  );
};

export default CardPresentation;
