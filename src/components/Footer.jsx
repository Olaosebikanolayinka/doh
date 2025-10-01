import React from 'react';

export default function Footer() {
  return (
  <footer className="bg-[#1a103f] py-8 sm:py-10 text-center text-gray-300 mt-0 border-t border-[#ff2ecd] px-4">
    <p className="font-bold text-[#ff2ecd] text-lg sm:text-xl">Homer – The Predictive Meme Coin $DOH</p>
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
      <a href="#" className="hover:text-[#00d2ff] text-base sm:text-lg">Buy $DOH</a>
      <a href="#" className="hover:text-[#00d2ff] text-base sm:text-lg">Whitepaper</a>
      <a href="https://t.me/mysticker01" className="hover:text-[#00d2ff] text-base sm:text-lg">Telegram</a>
      <a href="#" className="hover:text-[#00d2ff] text-base sm:text-lg">Twitter</a>
      <a href="#" className="hover:text-[#00d2ff] text-base sm:text-lg">DAO</a>
    </div>
    <p className="mt-6 text-[#7b2fff] text-sm sm:text-base">“Sometimes stupid, sometimes prophetic… always Homer.”</p>
  </footer>
  )
}
