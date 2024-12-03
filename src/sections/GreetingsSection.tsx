import GradientLayout from "@/layouts/GradientLayout";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const GreetingsSection = () => {
  return (
    <GradientLayout invert>
      <section className="py-[24px] px-[30px] relative h-[100vh] w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <div className="w-full text-center relative">
          <h2 className="font-playfair-display font-semibold text-[30px] text-indigo-50 text-center">
            Gracias por acompañarme en este día tan
          </h2>
          <h2 className="font-nautigal underline font-bold text-[64px] text-indigo-50 text-center leading-[20px]">
            especial.
          </h2>
        </div>

        <div className="mt-[60px] text-center relative phone-lg:mt-[120px ]">
          <motion.button
            className="mt-8 bg-white/20 backdrop-blur-sm text-white font-semibold py-[10px] px-[45px] rounded-full text-xl border-2 border-white/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Asistiré
          </motion.button>
          <div className="relative bottom-0">
            <Image
              className="absolute top-[-64px] phone-lg:w-[38px] phone-lg:h-[36px]"
              src={"assets/start.svg"}
              alt="start"
              width={24}
              height={22}
            />
            <Image
              className="absolute right-[8px] top-[-72px] phone-lg:w-[38px] phone-lg:h-[36px]"
              src={"assets/start.svg"}
              alt="start"
              width={24}
              height={22}
            />
            <Image
              className="absolute left-[32px] top-[58px] phone-lg:w-[38px] phone-lg:h-[36px]"
              src={"assets/start.svg"}
              alt="start"
              width={24}
              height={22}
            />
            <Image
              className="absolute right-[36px] top-[62px] phone-lg:w-[38px] phone-lg:h-[36px]"
              src={"assets/start.svg"}
              alt="start"
              width={24}
              height={22}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            className="absolute bottom-0 md:w-[520px] md:h-[402px]"
            src="assets/modulo6.svg"
            alt="greetings image"
            width={280}
            height={265}
          />
        </div>
      </section>
    </GradientLayout>
  );
};

export default GreetingsSection;
