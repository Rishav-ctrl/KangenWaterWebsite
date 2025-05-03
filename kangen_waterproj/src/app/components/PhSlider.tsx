"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phData = [
  { label: "Highly Acidic", ph: 0, health: "Extremely Harmful / Cancer Risk / Severe Tissue Damage", sources: ["Battery Acid", "Stomach Acid (in excessive amounts)", "Industrial Chemicals"] },
  { label: "Strongly Acidic", ph: 2, health: "Unhealthy / Can Erode Teeth / Digestive Issues", sources: ["Coke", "Soft Drinks", "Lemon Juice", "Orange Juice", "Soda"] },
  { label: "Mildly Acidic", ph: 5, health: "Unbalanced Diet / May Cause Heartburn", sources: ["Coffee", "Vinegar", "Tomato Juice", "Wine"] },
  { label: "Neutral", ph: 7, health: "Balanced / Pure Water / Ideal Hydration", sources: ["Tap Water", "Distilled Water", "Freshwater", "Rainwater"] },
  { label: "Mildly Alkaline", ph: 8, health: "Hydrating / Supports Digestion", sources: ["Spring Water", "Coconut Water", "Mineral Water"] },
  { label: "Alkaline", ph: 9, health: "Healthy / Anti-aging / Detoxifying / May Alkalize Blood", sources: ["Kangen Water", "Ionized Water", "Alkaline Water"] },
  { label: "Highly Alkaline", ph: 11, health: "May Be Too Harsh / Irritating to Skin / May Affect Digestion", sources: ["Soapy Water", "Ammonia", "Household Cleaners", "Lye"] },
];

const getColorForPh = (ph: number) => {
  if (ph <= 3) return "from-red-500 to-red-700"; // Highly acidic, red litmus paper
  if (ph <= 6) return "from-orange-400 to-orange-600"; // Acidic
  if (ph === 7) return "from-green-400 to-green-600"; // Neutral (green for pure water)
  if (ph <= 10) return "from-blue-400 to-blue-600"; // Alkaline
  return "from-indigo-500 to-indigo-700"; // Highly alkaline, blue litmus paper
};

const PhSlider = () => {
  const [phValue, setPhValue] = useState(7);

  const getPhInfo = (value: number) => {
    return phData.reduce((prev, curr) => {
      return Math.abs(curr.ph - value) < Math.abs(prev.ph - value) ? curr : prev;
    });
  };

  const currentPh = getPhInfo(phValue);
  const bgGradient = getColorForPh(phValue);

  return (
    <div className={`p-8 rounded-2xl shadow-2xl bg-gradient-to-br ${bgGradient} transition-all duration-500`}>
      <h2 className="text-3xl font-poppins font-semibold mb-6 text-white text-center tracking-wide drop-shadow-lg">
        PH Level Visualizer
      </h2>

      <div className="flex flex-col items-center space-y-4">
        <input
          type="range"
          min={0}
          max={14}
          step={0.1}
          value={phValue}
          onChange={(e) => setPhValue(parseFloat(e.target.value))}
          className="w-full h-5 rounded-lg appearance-none bg-gray-300 dark:bg-gray-700 cursor-pointer transition-all"
          style={{
            background: `linear-gradient(to right, #f43f5e 0%, #fb923c 35%, #4ade80 50%, #60a5fa 65%, #6366f1 85%, #6366f1 100%)`,
          }}
        />
        <div className="text-white font-poppins font-semibold text-lg">
          PH Value: {phValue.toFixed(1)}
        </div>
        <div className="w-full flex justify-between text-white">
          <span>0</span>
          <span>3</span>
          <span>6</span>
          <span>9</span>
          <span>12</span>
          <span>14</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPh.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-md text-center"
          >
            <h3 className="text-lg font-poppins font-semibold text-white uppercase">Health Impact</h3>
            <p className="text-2xl font-poppins font-bold text-white mt-2">{currentPh.label}</p>
            <p className="text-md text-gray-100 mt-1">{currentPh.health}</p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPh.health}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-md text-center"
          >
            <h3 className="text-lg font-poppins font-semibold text-white uppercase">Commonly Found In</h3>
            <ul className="mt-3 space-y-2">
              {currentPh.sources.map((source, index) => (
                <li key={index} className="text-gray-100">• {source}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Custom thumb style */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 60px; /* Makes the thumb a vertical rectangle */
          background-color: white;
          border-radius: 0;
          cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
          appearance: none;
          width: 20px;
          height: 60px; /* Makes the thumb a vertical rectangle */
          background-color: white;
          border-radius: 0;
          cursor: pointer;
        }

        input[type="range"]::-ms-thumb {
          appearance: none;
          width: 20px;
          height: 60px; /* Makes the thumb a vertical rectangle */
          background-color: white;
          border-radius: 0;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default PhSlider;
