import CardPresentation from "@/components/CardPresentation/CardPresentation";
import GradientLayout from "@/layouts/GradientLayout";
import React from "react";

const url = "https://maps.app.goo.gl/1eXdyrMsrtvtoqcYA";

const ReceptionSection = () => {
  return (
    <GradientLayout invert>
      <section>
        <CardPresentation
          height="h-[650px]"
          img="assets/modulo4.svg"
          title="Recepción"
          variant="primary"
        >
          <section className="pt-[30px]">
            <div>
              <p className="font-playfair-display font-bold text-[24px] text-pink-700 text-center">
                Centro Evangelistico Maranatha
              </p>
              <p className="font-playfair-display font-bold text-[50px] text-pink-700 text-center pt-[4px] pb-[16px]">
                7:00 P.M.
              </p>
              <p className="font-playfair-display font-bold text-[16px] text-pink-950 text-center">
                C. 18 53, Barrio de Sta Ana, 24010 San Francisco de Campeche,
                Camp.
              </p>
            </div>
            <div className="text-center pt-[24px]">
              <a href={url} target="_blank">
                <button className="rounded-[32px] text-pink-100 w-[fit-content] py-[10px] px-[24px] bg-pink-950 font-playfair-display font-bold text-[20px] hover:bg-indigo-950/80">
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

export default ReceptionSection;
