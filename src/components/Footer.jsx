import React from 'react';

export default function Footer() {
  return (
  <footer className="bg-[#1a103f] py-10 text-center text-gray-300 mt-0 border-t border-[#ff2ecd]">
        <p className="font-bold text-[#ff2ecd]">Homer – The Predictive Meme Coin $DOH</p>
        <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="hover:text-[#00d2ff]">Buy $DOH</a>
        <a href="#" className="hover:text-[#00d2ff]">Whitepaper</a>
        <a href="#" className="hover:text-[#00d2ff]">Telegram</a>
        <a href="#" className="hover:text-[#00d2ff]">Twitter</a>
        <a href="#" className="hover:text-[#00d2ff]">DAO</a>
        </div>
        <p className="mt-6 text-[#7b2fff]">“Sometimes stupid, sometimes prophetic… always Homer.”</p>
     </footer>
  )
}
