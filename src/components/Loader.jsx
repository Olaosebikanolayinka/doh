import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#1e1e3f] bg-opacity-80 z-[9999]">
      <img
        src="/dohlogo.png"
        alt="$DOH Loader"
        className="animate-logo-spin w-24 h-24 drop-shadow-2xl mb-4"
        style={{ filter: 'drop-shadow(0 0 30px #ff2ecd88)' }}
      />
      <div className="text-2xl font-extrabold text-[#ff2ecd] tracking-wider flex items-center">
  <span className="loader-type">$DOH....</span>
        <span className="loader-cursor ml-1">|</span>
      </div>
      <style>{`
        @keyframes logo-spin {
          0% { transform: rotate(0deg) scale(1); }
          80% { transform: rotate(320deg) scale(1.08); }
          100% { transform: rotate(360deg) scale(1); }
        }
        .animate-logo-spin {
          animation: logo-spin 1.2s linear infinite;
        }
        @keyframes typing {
          0% { width: 0 }
          40% { width: 8ch }
          80%, 100% { width: 0 }
        }
        .loader-type {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: .15em solid #ff2ecd;
          width: 8ch;
          animation: typing 5s steps(8, end) infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .loader-cursor {
          animation: blink 0.7s steps(1) infinite;
        }
      `}</style>
    </div>
  );
}
