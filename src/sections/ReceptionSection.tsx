import CardPresentation from "@/components/CardPresentation/CardPresentation";
import GradientLayout from "@/layouts/GradientLayout";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const url = "https://maps.app.goo.gl/eXqo4LFfiqDjcSJVA?g_st=iw";

const ReceptionSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <GradientLayout invert>
      <motion.section
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
      >
        <CardPresentation
          height="h-[calc(100vh-24px)]"
          img="assets/modulo4.svg"
          title="Recepción"
          variant="primary"
        >
          <section className="pt-[30px]">
            <div>
              <p className="font-playfair-display font-bold text-[24px] text-pink-700 text-center lg:text-[32px]">
                Salon de eventos Confort
              </p>
              <p className="font-playfair-display font-bold text-[50px] text-pink-700 text-center pt-[4px] pb-[16px] lg:text-[58px]">
                7:00 P.M.
              </p>
              <p className="font-playfair-display font-bold text-[16px] text-pink-950 text-center lg:text-[24px]">
                C. 13 #7, Yaldzib, 24560 Imí, Camp.
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
      </motion.section>
    </GradientLayout>
  );
};

export default ReceptionSection;
