"use client";

import React, { useState } from "react";

const antioxidantData = [
  {
    orp: -600,
    label: "Very High Antioxidant",
    color: "bg-green-500",
    effect: "Extremely beneficial for cellular health",
    examples: ["Fresh Green Tea", "Kangen Water"]
  },
  {
    orp: -300,
    label: "Moderate Antioxidant",
    color: "bg-blue-400",
    effect: "Helps fight free radicals",
    examples: ["Vitamin C Juice"]
  },
  {
    orp: 0,
    label: "Neutral",
    color: "bg-gray-400",
    effect: "No oxidation or reduction",
    examples: ["Tap Water"]
  },
  {
    orp: 300,
    label: "Oxidizing",
    color: "bg-yellow-400",
    effect: "Mildly harmful — promotes aging",
    examples: ["Bottled Water"]
  },
  {
    orp: 600,
    label: "Highly Oxidizing",
    color: "bg-red-500",
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
    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Antioxidant (ORP) Visualizer</h2>

      <input
        type="range"
        min={-600}
        max={600}
        step={50}
        value={orpValue}
        onChange={(e) => setOrpValue(parseInt(e.target.value))}
        className="w-full mb-6 accent-blue-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`rounded-lg p-4 shadow text-center text-white ${current.color}`}>
          <h3 className="text-lg font-semibold">ORP Level</h3>
          <p className="text-3xl font-bold mt-2">{orpValue} mV</p>
          <p className="text-md mt-1">{current.label}</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow text-center">
          <h3 className="text-lg font-semibold text-blue-700">Effect</h3>
          <p className="text-gray-600 mb-3">{current.effect}</p>
          <h4 className="font-semibold text-blue-600">Examples</h4>
          <ul className="mt-2 space-y-1">
            {current.examples.map((item, i) => (
              <li key={i} className="text-gray-700">• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Antioxidant;