import CardPresentation from "@/components/CardPresentation/CardPresentation";
import GradientLayout from "@/layouts/GradientLayout";
import React, { useEffect, useState } from "react";

function calculateTimeLeft() {
  const difference = +new Date(2024, 11, 28, 18, 0, 0) - +new Date();
  let newTimeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    newTimeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return newTimeLeft;
}

const ScheduleSection = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    });

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <GradientLayout invert>
      <section className="h-[100vh] w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <div className="bg-pink-100 px-[28px] flex items-center h-[124px] mb-[24px]">
          <p className="font-playfair-display font-bold text-[12px] text-pink-900 text-center">
            Te invito a celebrar el inicio de una nueva etapa en mi vida, llena
            de sueños, metas y grandes logros.
          </p>
        </div>

        <CardPresentation
          img="assets/modulo2.svg"
          title="Faltan"
          variant="primary"
          height="h-[calc(100vh-172px)]"
        >
          <section className="grid gap-[16px] pt-[30px]">
            <section className="flex justify-evenly">
              <div className="text-center w-[50px]">
                <p className="font-playfair-display font-bold text-[40px] text-pink-700">
                  {timeLeft.days.toString().padStart(2, "0")}
                </p>
                <p className="font-playfair-display font-bold text-[16px] text-pink-700">
                  Días
                </p>
              </div>

              <div className="text-center w-[50px]">
                <p className="font-playfair-display font-bold text-[40px] text-pink-700">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </p>
                <p className="font-playfair-display font-bold text-[16px] text-pink-700">
                  Hrs
                </p>
              </div>

              <div className="text-center w-[50px]">
                <p className="font-playfair-display font-bold text-[40px] text-pink-700">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </p>
                <p className="font-playfair-display font-bold text-[16px] text-pink-700">
                  Min
                </p>
              </div>
              <div className="text-center w-[50px]">
                <p className="font-playfair-display font-bold text-[40px] text-pink-700">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </p>
                <p className="font-playfair-display font-bold text-[16px] text-pink-700">
                  Seg
                </p>
              </div>
            </section>

            <section>
              <p className="font-nautigal font-normal text-[38px] text-pink-950 text-center">
                Para mis quince años
              </p>
            </section>
          </section>
        </CardPresentation>
      </section>
    </GradientLayout>
  );
};

export default ScheduleSection;
