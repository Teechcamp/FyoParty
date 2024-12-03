import GradientLayout from "@/layouts/GradientLayout";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const MainSection = () => {
  return (
    <GradientLayout invert={false}>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="pt-[16px] px-[25px] h-[100vh] w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto "
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center relative phone-lg:pt-[48px] tablet-xl:pt-[120px]"
        >
          <h1 className="font-playfair-display font-bold text-[40px] text-indigo-100 phone-lg:text-[48px]">
            Sandra Valeria
          </h1>
          <h3 className="font-nautigal text-[48px] text-pink-300 relative top-[-32px] phone-lg:text-[56px]">
            Mis quince años
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-[16px]"
        >
          <h3 className="font-playfair-display font-bold text-[24px] text-indigo-100 phone-lg:text-[32px]">
            28 de diciembre
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="relative h-[calc(100vh-490px)] phone-lg:h-[calc(100vh-560px)] tablet-lg:h-[calc(100vh-680px)] desktop-lg:h-[calc(100vh-640px)] tablet-xl:h-[calc(100vh-780px)]"
        >
          <Image
            className="absolute top-[16px] phone-lg:w-[38px] phone-lg:h-[36px]"
            src={"assets/start.svg"}
            alt="start"
            width={24}
            height={22}
          />
          <Image
            className="absolute right-[8px] top-[-12px] phone-lg:w-[38px] phone-lg:h-[36px]"
            src={"assets/start.svg"}
            alt="start"
            width={24}
            height={22}
          />
          <Image
            className="absolute left-[calc(50%-12px)] top-[40%] phone-lg:w-[38px] phone-lg:h-[36px]"
            src={"assets/start.svg"}
            alt="start"
            width={24}
            height={22}
          />
          <Image
            className="absolute left-[32px] bottom-0 phone-lg:w-[38px] phone-lg:h-[36px]"
            src={"assets/start.svg"}
            alt="start"
            width={24}
            height={22}
          />
          <Image
            className="absolute right-[36px] bottom-[32px] phone-lg:w-[38px] phone-lg:h-[36px]"
            src={"assets/start.svg"}
            alt="start"
            width={24}
            height={22}
          />
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          className="flex justify-center"
        >
          <Image
            className="absolute bottom-0 md:w-[520px] md:h-[402px]"
            src={"assets/modulo1.svg"}
            alt="image presentation"
            width={360}
            height={312}
            priority
          />
        </motion.div>
      </motion.section>
    </GradientLayout>
  );
};

export default MainSection;
