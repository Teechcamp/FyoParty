import Image from "next/image";
import React from "react";
import StartIcon from "../SVGs/StartIcon/StartIcon";

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
          svgFill : "fill-pink-700"
        }
      : {
          bg: "bg-indigo-200",
          bgHeader: "bg-indigo-950",
          textTitle: "text-indigo-950",
          svgFill : "fill-indigo-700"
        };

  return (
    <article className={`${stylesCard.bg} rounded-[8px] ${height} relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto`}>
      <header className={`rounded-t-[8px] ${stylesCard.bgHeader} h-[180px] relative flex justify-center`}>
        <Image
          className="absolute bottom-0"
          src={img}
          alt="image presentation"
          width={172}
          height={165}
          priority
        />
      </header>
      <section className="py-[16px] px-[30px]">
        <h3 className={`font-playfair-display font-bold text-[32px] ${stylesCard.textTitle} text-center`}>
          {title}
        </h3>
        {children}
        <div className="flex justify-between absolute left-[10px]  bottom-[10px] w-[calc(100%-20px)]">
          <StartIcon  className={`${stylesCard.svgFill}`} />
          <StartIcon className={`${stylesCard.svgFill}`}  />
        </div>
      </section>
    </article>
  );
};

export default CardPresentation;
