
import React from 'react'


export default function About() {
  return (
    <section
    id='about'
      className="relative py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #fffbe6 60%, #ffe0f7 100%)`,
        minHeight: '80vh',
      }}
    >
      {/* Animated background shapes */}
      <img
        src="/donut1.png"
        alt="bg shape"
        className="absolute top-[-60px] left-[-60px] w-60 opacity-30 animate-spin-slow z-0"
        style={{ filter: 'blur(2px)' }}
      />
      <img
        src="/dohlogo.png"
        alt="bg shape"
        className="absolute bottom-[-40px] right-[-40px] w-40 opacity-20 animate-bounce z-0"
        style={{ filter: 'blur(1px)' }}
      />
      <div className="z-10">
        <img src="/homerabout.png" alt="Homer Oracle" className="rounded-2xl shadow-lg border-4 border-[#ff2ecd] animate-float" />
      </div>
      <div className="z-10">
        <h2 className="text-4xl font-bold mb-4 text-[#00d2ff] drop-shadow-lg animate-pop">About $DOH</h2>
  <p className="mb-6 text-[#1e1e3f]">
          Homer $DOH combines meme culture, AI, and predictions into one hilarious but powerful Web3 ecosystem.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl shadow p-4 text-center bg-white border-2 border-[#ff2ecd] hover:shadow-[0_0_25px_#ff2ecd] transition-all duration-300 animate-tilt">
            <h3 className="font-bold text-[#ff2ecd]">Ticker</h3>
            <p className="text-[#1e1e3f]">$DOH</p>
          </div>
          <div className="rounded-xl shadow p-4 text-center bg-white border-2 border-[#00d2ff] hover:shadow-[0_0_25px_#00d2ff] transition-all duration-300 animate-tilt">
            <h3 className="font-bold text-[#00d2ff]">Supply</h3>
            <p className="text-[#1e1e3f]">1,000,000,000</p>
          </div>
          <div className="rounded-xl shadow p-4 text-center bg-white border-2 border-[#7b2fff] hover:shadow-[0_0_25px_#7b2fff] transition-all duration-300 animate-tilt">
            <h3 className="font-bold text-[#7b2fff]">Buyback</h3>
            <p className="text-[#1e1e3f]">0.5% Viral Fees</p>
          </div>
        </div>
      </div>
      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        @keyframes pop {
          0% { transform: scale(0.8); opacity: 0; }
          80% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
        .animate-pop { animation: pop 0.8s cubic-bezier(.68,-0.55,.27,1.55) both; }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 1.2s ease 0.3s both; }
        @keyframes tilt {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-tilt { animation: tilt 2.5s ease-in-out infinite; }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 18s linear infinite; }
      `}</style>
    </section>
  );
}
