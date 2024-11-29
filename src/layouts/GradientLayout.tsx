import SparklesBackground from "@/components/SparklesBackground/SparklesBackground";
import React from "react";

const GradientLayout = ({ children, invert = false }: { children: React.ReactNode, invert: boolean }) => {
  const gradient = invert ? 'from-pink-500 to-indigo-800' : 'from-indigo-800 to-pink-500';
  return (
    <section className={`min-h-screen bg-gradient-to-b ${gradient} text-white relative overflow-hidden`}>
      {/* Sparkles Background */}
      <SparklesBackground />
      {children}
    </section>
  );
};

export default GradientLayout;
