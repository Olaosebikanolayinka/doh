
import React, { useState } from "react";

const telegramSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send">
    <path d="M22 2L11 13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-[calc(100%-7rem)] max-w-4xl fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#1e1e3f] bg-opacity-90 shadow-lg rounded-2xl" style={{marginLeft: 'auto', marginRight: 'auto'}}>
      <div className="mx-auto flex items-center justify-between px-8 py-4">
        <a href="#home" className="flex items-center gap-2 text-[#ff2ecd] font-extrabold text-2xl tracking-wider">
          <img src="/dohlogo.png" alt="$DOH logo" className="w-10 h-10 rounded-full" />
          $DOH
        </a>
        <div className="hidden md:flex gap-8 text-lg font-bold items-center text-white drop-shadow-md">
          <a href="#home" className="hover:text-[#00d2ff] transition">Home</a>
          <a href="#about" className="hover:text-[#00d2ff] transition">About</a>
          <a href="#roadmap" className="hover:text-[#00d2ff] transition">Roadmap</a>
          <a href="#utility" className="hover:text-[#00d2ff] transition">Utility</a>
          <span className="mx-4" />
          <a href="https://t.me/mysticker012" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="Telegram">
            {telegramSvg}
          </a>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-7 h-1 bg-[#ff2ecd] rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 bg-[#ff2ecd] rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 bg-[#ff2ecd] rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#1e1e3f] bg-opacity-95 px-6 pt-2 pb-6 flex flex-col gap-4 font-bold text-lg transition-all duration-300 ${open ? 'block' : 'hidden'} text-white drop-shadow-md`}
      >
        <a href="#home" className="hover:text-[#00d2ff] transition" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" className="hover:text-[#00d2ff] transition" onClick={() => setOpen(false)}>About</a>
        <a href="#roadmap" className="hover:text-[#00d2ff] transition" onClick={() => setOpen(false)}>Roadmap</a>
        <a href="#utility" className="hover:text-[#00d2ff] transition" onClick={() => setOpen(false)}>Utility</a>
        <span className="my-2" />
        <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-2 hover:scale-110 transition-transform" aria-label="Telegram">
          <span>Telegram</span> {telegramSvg}
        </a>
      </div>
    </nav>
  );
}
