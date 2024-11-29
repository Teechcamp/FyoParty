import CardPresentation from "@/components/CardPresentation/CardPresentation";
import GradientLayout from "@/layouts/GradientLayout";
import React from "react";

const ScheduleSection = () => {
  return (
    <GradientLayout invert>
      <section className="h-[100vh]">
        <div className="bg-pink-100 px-[28px] flex items-center h-[124px] mb-[24px]">
          <p className="font-playfair-display font-bold text-[12px] text-pink-900 text-center">
            Te invito a celebrar el inicio de una nueva etapa en mi vida, llena
            de sueños, metas y grandes logros.
          </p>
        </div>

        <CardPresentation img="assets/modulo2.svg" title="Faltan" variant="primary">
          <h1>de</h1>
        </CardPresentation>
      </section>
    </GradientLayout>
  );
};

export default ScheduleSection;
