
import React from 'react'

export default function Utility() {
    const features = [
        { title: "Prediction Portal", desc: "Access Homer’s weekly forecasts." },
        { title: "Prediction NFTs", desc: "Viral predictions minted into NFTs." },
        { title: "Prediction Markets", desc: "$DOH for micro-bets & staking." },
        { title: "Governance & Gamification", desc: "DAO + themed staking pools." },
     ];


    return (
    <section className="py-20 px-6 md:px-20" id='utility'>
        <h2 className="text-4xl font-bold text-center mb-10 text-[#ff2ecd]">What Makes $DOH Special?</h2>
        <div className="grid md:grid-cols-4 gap-6">
        {features.map((item, i) => (
        <div
        key={i}
        className="rounded-xl shadow p-6 text-center bg-[#1e1e3f] border border-[#00d2ff] hover:shadow-[0_0_15px_#00d2ff]"
        >
        <h3 className="font-bold mb-2 text-[#7b2fff]">{item.title}</h3>
        <p className="text-gray-300">{item.desc}</p>
        </div>
        ))}
        </div>
     </section>
 )
}
