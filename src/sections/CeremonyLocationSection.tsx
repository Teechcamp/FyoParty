import CardPresentation from "@/components/CardPresentation/CardPresentation";
import GradientLayout from "@/layouts/GradientLayout";
import Link from "next/link";
import React from "react";

const url = "https://maps.app.goo.gl/1eXdyrMsrtvtoqcYA";

const CeremonyLocationSection = () => {
  return (
    <GradientLayout invert={false}>
      <section>
        <CardPresentation
          img="assets/modulo3.svg"
          title="Ceremonia Religiosa"
          variant="secondary"
          height="h-[650px]"
        >
          <section className="pt-[30px]">
            <div>
              <p className="font-playfair-display font-bold text-[24px] text-indigo-700 text-center">
                Centro Evangelistico Maranatha
              </p>
              <p className="font-playfair-display font-bold text-[50px] text-indigo-700 text-center pt-[4px] pb-[16px]">
                5:00 P.M.
              </p>
              <p className="font-playfair-display font-bold text-[16px] text-indigo-950 text-center">
                C. 18 53, Barrio de Sta Ana, 24010 San Francisco de Campeche,
                Camp.
              </p>
            </div>
            <div className="text-center pt-[24px]">
              <a href={url} target="_blank">
                <button className="rounded-[32px] text-indigo-100 w-[fit-content] py-[10px] px-[24px] bg-indigo-950 font-playfair-display font-bold text-[20px] hover:bg-indigo-950/80">
                  Cómo llegar
                </button>
              </a>
            </div>
          </section>
        </CardPresentation>
      </section>
    </GradientLayout>
  );
};

export default CeremonyLocationSection;
