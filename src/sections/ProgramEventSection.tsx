"use client";
import GradientLayout from "@/layouts/GradientLayout";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CardPresentation from "@/components/CardPresentation/CardPresentation";

const ProgramEventSection = () => {
  return (
    <GradientLayout invert={false}>
      <section className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <CardPresentation
          height="h-[calc(100vh-24px)]"
          img="assets/modulo5.svg"
          title="Programa"
          variant="secondary"
        >
          <section className="relative">
            <div>
              <hr className="outline-none border-none w-[2px] h-[300px] bg-indigo-50 absolute left-[50%] top-[16px]"/>
              {/* First step */}
              <div className="h-[16px] w-[16px] rounded-full bg-indigo-400 absolute left-[calc(50%-8px)] top-[16px]"></div>
              <div className="h-[16px] w-[16px] rounded-full bg-pink-400 absolute left-[calc(50%-8px)] top-[32px]"></div>
              {/* Second step */}
              <div className="h-[16px] w-[16px] rounded-full bg-indigo-400 absolute left-[calc(50%-8px)] top-[88px]"></div>
              <div className="h-[16px] w-[16px] rounded-full bg-pink-400 absolute left-[calc(50%-8px)] top-[104px]"></div>
              {/* Third step */}
              <div className="h-[16px] w-[16px] rounded-full bg-indigo-400 absolute left-[calc(50%-8px)] top-[160px]"></div>
              <div className="h-[16px] w-[16px] rounded-full bg-pink-400 absolute left-[calc(50%-8px)] top-[176px]"></div>
              {/* Fourth step */}
              <div className="h-[16px] w-[16px] rounded-full bg-indigo-400 absolute left-[calc(50%-8px)] top-[232px]"></div>
              <div className="h-[16px] w-[16px] rounded-full bg-pink-400 absolute left-[calc(50%-8px)] top-[248px]"></div>
              {/* Fifth step */}
              <div className="h-[16px] w-[16px] rounded-full bg-indigo-400 absolute left-[calc(50%-8px)] top-[304px]"></div>
            </div>
            <div className="flex justify-between h-[60px] relative">
              <div className="rounded-[4px] bg-indigo-50 w-[125px] h-[60px]">
                <div className="bg-indigo-900 rounded-t-[4px] relative">
                  <div
                    className="w-0 h-0
                    border-t-[10px] border-t-transparent
                    border-b-[10px] border-b-transparent
                    border-l-[20px] border-l-indigo-900 absolute right-[-8px] top-[5px]"
                  ></div>
                  <p className="font-nautigal font-bold text-[24px] text-white text-center">
                    Protocolo
                  </p>
                </div>
                <div>
                  <p className="font-playfair-display font-bold text-[16px] text-indigo-950 text-center">
                    08:00 P.M.
                  </p>
                </div>
              </div>

              <div className="rounded-[4px] bg-indigo-50 w-[125px] h-[60px] relative top-[16px]">
                <div className="bg-indigo-900 rounded-t-[4px] relative">
                  <div
                    className="w-0 h-0
                    border-t-[10px] border-t-transparent
                    border-b-[10px] border-b-transparent
                    border-r-[20px] border-r-indigo-900 absolute left-[-8px] top-[5px]"
                  ></div>
                  <p className="font-nautigal font-bold text-[24px] text-white text-center">
                    Entrada
                  </p>
                </div>
                <div>
                  <p className="font-playfair-display font-bold text-[16px] text-indigo-950 text-center">
                    08:10 P.M.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between h-[60px] relative mt-[16px]">
              <div className="rounded-[4px] bg-indigo-50 w-[125px] h-[60px]">
                <div className="bg-indigo-900 rounded-t-[4px] relative">
                  <div
                    className="w-0 h-0
                    border-t-[10px] border-t-transparent
                    border-b-[10px] border-b-transparent
                    border-l-[20px] border-l-indigo-900 absolute right-[-8px] top-[5px]"
                  ></div>
                  <p className="font-nautigal font-bold text-[24px] text-white text-center">
                    Vals
                  </p>
                </div>
                <div>
                  <p className="font-playfair-display font-bold text-[16px] text-indigo-950 text-center">
                    08:15 P.M.
                  </p>
                </div>
              </div>

              <div className="rounded-[4px] bg-indigo-50 w-[125px] h-[60px] relative top-[16px]">
                <div className="bg-indigo-900 rounded-t-[4px] relative">
                  <div
                    className="w-0 h-0
                    border-t-[10px] border-t-transparent
                    border-b-[10px] border-b-transparent
                    border-r-[20px] border-r-indigo-900 absolute left-[-8px] top-[5px]"
                  ></div>
                  <p className="font-nautigal font-bold text-[24px] text-white text-center">
                    Brindis
                  </p>
                </div>
                <div>
                  <p className="font-playfair-display font-bold text-[16px] text-indigo-950 text-center">
                    08:20 P.M.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between h-[60px] relative mt-[16px]">
              <div className="rounded-[4px] bg-indigo-50 w-[125px] h-[60px]">
                <div className="bg-indigo-900 rounded-t-[4px] relative">
                  <div
                    className="w-0 h-0
                    border-t-[10px] border-t-transparent
                    border-b-[10px] border-b-transparent
                    border-l-[20px] border-l-indigo-900 absolute right-[-8px] top-[5px]"
                  ></div>
                  <p className="font-nautigal font-bold text-[24px] text-white text-center">
                    Cena
                  </p>
                </div>
                <div>
                  <p className="font-playfair-display font-bold text-[16px] text-indigo-950 text-center">
                    08:45 P.M.
                  </p>
                </div>
              </div>

              <div className="rounded-[4px] bg-indigo-50 w-[125px] h-[60px] relative top-[16px]">
                <div className="bg-indigo-900 rounded-t-[4px] relative">
                  <div
                    className="w-0 h-0
                    border-t-[10px] border-t-transparent
                    border-b-[10px] border-b-transparent
                    border-r-[20px] border-r-indigo-900 absolute left-[-8px] top-[5px]"
                  ></div>
                  <p className="font-nautigal font-bold text-[24px] text-white text-center">
                    Show
                  </p>
                </div>
                <div>
                  <p className="font-playfair-display font-bold text-[16px] text-indigo-950 text-center">
                    09:20 P.M.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between h-[60px] relative mt-[16px]">
              <div className="rounded-[4px] bg-indigo-50 w-[125px] h-[60px]">
                <div className="bg-indigo-900 rounded-t-[4px] relative">
                  <div
                    className="w-0 h-0
                    border-t-[10px] border-t-transparent
                    border-b-[10px] border-b-transparent
                    border-l-[20px] border-l-indigo-900 absolute right-[-8px] top-[5px]"
                  ></div>
                  <p className="font-nautigal font-bold text-[24px] text-white text-center">
                    Baile
                  </p>
                </div>
                <div>
                  <p className="font-playfair-display font-bold text-[16px] text-indigo-950 text-center">
                    09:45 P.M.
                  </p>
                </div>
              </div>

              <div className="rounded-[4px] bg-indigo-50 w-[125px] h-[60px] relative top-[16px]">
                <div className="bg-indigo-900 rounded-t-[4px] relative">
                  <div
                    className="w-0 h-0
                    border-t-[10px] border-t-transparent
                    border-b-[10px] border-b-transparent
                    border-r-[20px] border-r-indigo-900 absolute left-[-8px] top-[5px]"
                  ></div>
                  <p className="font-nautigal font-bold text-[24px] text-white text-center">
                    Pastel
                  </p>
                </div>
                <div>
                  <p className="font-playfair-display font-bold text-[16px] text-indigo-950 text-center">
                    10:30 P.M.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between h-[60px] relative mt-[16px]">
              <div className="rounded-[4px] bg-indigo-50 w-[125px] h-[60px]">
                <div className="bg-indigo-900 rounded-t-[4px] relative">
                  <div
                    className="w-0 h-0
                    border-t-[10px] border-t-transparent
                    border-b-[10px] border-b-transparent
                    border-l-[20px] border-l-indigo-900 absolute right-[-8px] top-[5px]"
                  ></div>
                  <p className="font-nautigal font-bold text-[24px] text-white text-center">
                    Recuerdos
                  </p>
                </div>
                <div>
                  <p className="font-playfair-display font-bold text-[16px] text-indigo-950 text-center">
                    12:00 A.M.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </CardPresentation>
      </section>
    </GradientLayout>
  );
};

export default ProgramEventSection;
