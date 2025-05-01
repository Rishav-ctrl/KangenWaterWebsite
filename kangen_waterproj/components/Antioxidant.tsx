"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const antioxidantData = [
  {
    orp: -600,
    label: "Very High Antioxidant",
    color: "from-green-400 to-green-600",
    effect: "Extremely beneficial for cellular health",
    examples: ["Fresh Green Tea", "Kangen Water"]
  },
  {
    orp: -300,
    label: "Moderate Antioxidant",
    color: "from-blue-400 to-blue-600",
    effect: "Helps fight free radicals",
    examples: ["Vitamin C Juice"]
  },
  {
    orp: 0,
    label: "Neutral",
    color: "from-gray-400 to-gray-600",
    effect: "No oxidation or reduction",
    examples: ["Tap Water"]
  },
  {
    orp: 300,
    label: "Oxidizing",
    color: "from-yellow-400 to-yellow-600",
    effect: "Mildly harmful — promotes aging",
    examples: ["Bottled Water"]
  },
  {
    orp: 600,
    label: "Highly Oxidizing",
    color: "from-red-500 to-red-700",
    effect: "Potentially harmful — increases oxidative stress",
    examples: ["Soft Drinks", "Energy Drinks"]
  }
];

const Antioxidant = () => {
  const [orpValue, setOrpValue] = useState(0);

  const getOrpInfo = (value: number) => {
    return antioxidantData.reduce((prev, curr) => {
      return Math.abs(curr.orp - value) < Math.abs(prev.orp - value) ? curr : prev;
    });
  };

  const current = getOrpInfo(orpValue);

  return (
    <div className={`p-8 rounded-2xl shadow-2xl bg-gradient-to-br ${current.color} transition-all duration-500`}>
      <h2 className="text-3xl font-poppins font-semibold mb-6 text-white text-center tracking-wide drop-shadow-lg">
        ORP / Antioxidant Visualizer
      </h2>

      <div className="flex flex-col items-center space-y-4">
        <input
          type="range"
          min={-600}
          max={600}
          step={50}
          value={orpValue}
          onChange={(e) => setOrpValue(parseInt(e.target.value))}
          className="w-full h-5 rounded-lg appearance-none bg-gray-300 dark:bg-gray-700 cursor-pointer transition-all"
          style={{
            background: `linear-gradient(to right, #22c55e 0%, #3b82f6 30%, #9ca3af 50%, #facc15 70%, #ef4444 100%)`
          }}
        />
        <div className="text-white font-poppins font-semibold text-lg">
          ORP Value: {orpValue} mV
        </div>
        <div className="w-full flex justify-between text-white text-sm">
          <span>-600</span>
          <span>-300</span>
          <span>0</span>
          <span>300</span>
          <span>600</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-md text-center"
          >
            <h3 className="text-lg font-poppins font-semibold text-white uppercase">ORP Level</h3>
            <p className="text-3xl font-poppins font-bold text-white mt-2">{orpValue} mV</p>
            <p className="text-md text-white mt-1">{current.label}</p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.effect}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-md text-center"
          >
            <h3 className="text-lg font-poppins font-semibold text-white uppercase">Effect</h3>
            <p className="text-gray-100 mb-3">{current.effect}</p>
            <h4 className="font-semibold text-white mt-2">Examples</h4>
            <ul className="mt-2 space-y-1">
              {current.examples.map((item, i) => (
                <li key={i} className="text-gray-100">• {item}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 60px;
          background-color: white;
          border-radius: 0;
          cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
          appearance: none;
          width: 20px;
          height: 60px;
          background-color: white;
          border-radius: 0;
          cursor: pointer;
        }

        input[type="range"]::-ms-thumb {
          appearance: none;
          width: 20px;
          height: 60px;
          background-color: white;
          border-radius: 0;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Antioxidant;
