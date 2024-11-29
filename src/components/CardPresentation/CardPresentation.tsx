import Image from "next/image";
import React from "react";

const CardPresentation = ({
  children,
  variant,
  img,
  title,
}: {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  img: string;
  title: string;
}) => {
  const stylesCard =
    variant === "primary"
      ? {
          bg: "bg-pink-100",
          bgHeader: "bg-pink-900",
        }
      : {
          bg: "bg-indigo-100",
          bgHeader: "bg-indigo-900",
        };

  return (
    <article className={`${stylesCard.bg} rounded-[8px] h-full`}>
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
      <section>
        <h3 className="font-playfair-display font-bold text-[24px] text-indigo-100">
          {title}
        </h3>
        {children}
      </section>
    </article>
  );
};

export default CardPresentation;
