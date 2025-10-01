

import React from 'react'
import { motion } from 'framer-motion'

const donuts = [
    { src: '/donut1.png', left: '10%' },
    { src: '/donut2.png', left: '40%' },
    { src: '/donut3.png', left: '70%' },
    { src: '/donut1.png', left: '85%' },
    { src: '/donut2.png', left: '25%' },
];

export default function Roadmap() {
    const steps = [
        { phase: "Phase 1: Donut Genesis (Q1)", desc: "Token creation, meme contests, HomerAI bot release." },
        { phase: "Phase 2: Springfield Awakens (Q2)", desc: "DEX launch, staking pools, prediction portal." },
        { phase: "Phase 3: Prophetic Goofiness (Q3)", desc: "Prediction challenges, leaderboard, integrations." },
        { phase: "Phase 4: Donutverse Expansion (Q4)", desc: "Mobile app, VR/AR campaign, DAO governance." },
        ];



    return (
        <section className="relative py-20 px-6 md:px-20 bg-[#111124] overflow-hidden" id='roadmap'>
            {/* Animated Donuts Background */}
            {donuts.map((donut, i) => (
                <img
                    key={i}
                    src={donut.src}
                    alt="donut"
                    className={`donut-fall absolute z-0 pointer-events-none select-none`}
                    style={{
                        left: donut.left,
                        width: `${40 + Math.random() * 40}px`,
                        animationDelay: `${i * 2 + Math.random()}s`,
                    }}
                />
            ))}
            <h2 className="text-4xl font-bold text-center mb-10 text-[#00d2ff] relative z-10"> Roadmap</h2>
            <div className="space-y-6 max-w-3xl mx-auto relative z-10">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        className="bg-[#1e1e3f] p-6 rounded-2xl border border-[#ff2ecd] hover:shadow-[0_0_15px_#ff2ecd]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <h3 className="font-bold text-xl mb-2 text-[#7b2fff]">{step.phase}</h3>
                        <p className="text-gray-300">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
            {/* Donut Drop Animation */}
            <style>{`
                @keyframes donut-fall {
                    0% { top: -80px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100vh; opacity: 0; }
                }
                .donut-fall {
                    animation: donut-fall 6s linear infinite;
                }
            `}</style>
        </section>
    );
}
