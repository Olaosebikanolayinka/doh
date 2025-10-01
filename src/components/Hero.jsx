
import React from 'react'
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section
      id="home"
  className="relative min-h-screen flex flex-col justify-center items-center md:items-end px-4 sm:px-8 md:px-20 pt-32 md:pt-36 pb-16 md:py-0 overflow-hidden border-b-4 border-white"
      style={{
        background: `linear-gradient(120deg, #1e1e3f 60%, #ff2ecd 100%)`,
      }}
    >
      {/* Animated Full Background Image */}
      <motion.img
        src="/bggg.png"
        alt="Homer Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none animate-homerbg"
        initial={{ scale: 1.01, y: 0 }}
        animate={{ scale: [1.01, 1.06, 1.01], y: [0, -8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
  <div className="relative z-10 w-full max-w-2xl md:pr-24 text-right md:text-right text-center md:ml-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-4 text-[#ff2ecd] drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Meme the Future. Predict with $DOH.
        </motion.h1>
        <p className="text-base sm:text-lg md:text-2xl max-w-2xl mb-6 text-gray-200 animate-fade-in md:ml-auto">
          The world’s first AI-powered meme coin inspired by Homer’s legendary predictions.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-end w-full">
          <button className="bg-[#ff2ecd] hover:bg-[#d61db2] text-white px-6 py-3 rounded-lg font-semibold shadow-[0_0_15px_#ff2ecd] w-full md:w-auto">
            Buy $DOH
          </button>
          <button className="border border-[#00d2ff] px-6 py-3 rounded-lg font-semibold text-[#00d2ff] hover:shadow-[0_0_15px_#00d2ff] w-full md:w-auto">
            Whitepaper
          </button>
          <button className="border border-[#7b2fff] px-6 py-3 rounded-lg font-semibold text-[#eee8f7] hover:shadow-[0_0_15px_#7b2fff] w-full md:w-auto">
            Join Community
          </button>
        </div>
      </div>
      {/* Custom Animation for fade-in */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 1.2s ease 0.3s both; }
        @keyframes homerbg {
          0%, 100% { transform: scale(1.05) translateY(0); }
          50% { transform: scale(1.1) translateY(-20px); }
        }
        .animate-homerbg { animation: homerbg 12s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
