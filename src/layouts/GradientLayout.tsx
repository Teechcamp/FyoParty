import SparklesBackground from "@/components/SparklesBackground/SparklesBackground";
import React from "react";

const GradientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-indigo-800 to-pink-500 text-white relative overflow-hidden p-8">
      {/* Sparkles Background */}
      <SparklesBackground />
      {children}
    </section>
  );
};

export default GradientLayout;
