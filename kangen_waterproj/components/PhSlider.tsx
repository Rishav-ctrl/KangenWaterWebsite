"use client";

import React, { useState } from "react";

const phData = [
  {
    label: "Highly Acidic",
    ph: 0,
    health: "Extremely Harmful / Cancer Risk",
    sources: ["Battery Acid"]
  },
  {
    label: "Strongly Acidic",
    ph: 2,
    health: "Unhealthy",
    sources: ["Coke", "Soft Drinks"]
  },
  {
    label: "Mildly Acidic",
    ph: 5,
    health: "Unbalanced Diet",
    sources: ["Coffee", "Vinegar"]
  },
  {
    label: "Neutral",
    ph: 7,
    health: "Balanced (Pure Water)",
    sources: ["Tap Water", "Distilled Water"]
  },
  {
    label: "Mildly Alkaline",
    ph: 8,
    health: "Hydrating",
    sources: ["Spring Water"]
  },
  {
    label: "Alkaline",
    ph: 9,
    health: "Healthy / Anti-aging",
    sources: ["Kangen Water", "Ionized Water"]
  },
  {
    label: "Highly Alkaline",
    ph: 11,
    health: "May Be Too Harsh",
    sources: ["Soapy Water"]
  }
];

const PhSlider = () => {
  const [phValue, setPhValue] = useState(7);

  // Get closest match based on phValue
  const getPhInfo = (value: number) => {
    return (
      phData.reduce((prev, curr) => {
        return Math.abs(curr.ph - value) < Math.abs(prev.ph - value) ? curr : prev;
      })
    );
  };

  const currentPh = getPhInfo(phValue);

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">PH Level Visualizer</h2>

      <input
        type="range"
        min={0}
        max={14}
        step={0.1}
        value={phValue}
        onChange={(e) => setPhValue(parseFloat(e.target.value))}
        className="w-full mb-6 accent-blue-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-4 shadow text-center">
          <h3 className="text-lg font-semibold text-blue-700">Health Impact</h3>
          <p className="text-3xl font-bold text-blue-900 mt-2">{currentPh.label}</p>
          <p className="text-md text-gray-600 mt-1">{currentPh.health}</p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow text-center">
          <h3 className="text-lg font-semibold text-blue-700">Found In</h3>
          <ul className="mt-3 space-y-1">
            {currentPh.sources.map((source, index) => (
              <li key={index} className="text-gray-600">• {source}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhSlider;
