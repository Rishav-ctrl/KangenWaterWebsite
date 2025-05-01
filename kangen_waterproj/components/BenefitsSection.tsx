"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

const benefits = [
  {
    title: "Better hydration",
    description: `Kangen Water ले दिएको hydration अरू normal पानी भन्दा far better हुन्छ। यसको कारण हो – यो पानी ionize भएर साना साना molecules मा change हुन्छ (4-6 molecules per cluster)। यसले गर्दा हाम्रो body ले यो पानी छिट्टै absorb गर्न सक्छ, जसले गर्दा शरीर hydrated र active रहन्छ – without feeling bloated, even if you drink 8 glasses a day.
  
  आम पानी पिउँदा कहिलेकाहीं पेट भारी हुने, puffiness हुने जस्तो लाग्न सक्छ, तर Kangen Water ले यस्तो feeling minimize गर्छ।
  
  Hydration मात्र तिर्खा मेटाउने कुरा होइन – यो energy, skin को glow, digestion, र हाम्रो body system smoothly चलाउनको लागि एकदमै important हुन्छ।`,
    color: "bg-blue-50",
    iconBg: "bg-blue-200",
    iconColor: "text-blue-700",
  },
  
  {
    title: "Antioxidant boost",
    description: `Kangen Water मा negative ions हुन्छन्, जसलाई antioxidants पनि भनिन्छ। यी antioxidants ले शरीरभित्र भएका free radicals लाई neutralize गर्न मद्दत गर्छन्। Free radicals भनेको त्यस्ता हानिकारक तत्व हुन्, जुन aging, skin dullness, थकान, अनि दीर्घ रोगहरूको मुख्य कारण बन्न सक्छ।
  
  जब antioxidants ले oxidative stress कम गर्छ, तब हाम्रो शरीर youthful, energetic र balanced महसुस गर्छ। Skin राम्रो देखिन्छ, immunity strong हुन्छ, र cells पनि healthy रहन्छन् — जसले hydration लाई अझ effective बनाउँछ।`,
    color: "bg-green-50",
    iconBg: "bg-green-200",
    iconColor: "text-green-700",
  },
  
  {
    title: "Detoxification",
    description: `Kangen Water को micro-clustered structure र antioxidant गुणले मिलेर शरीरबाट toxins हटाउन सजिलो बनाउँछ। यो पानीले cells सम्म छिटो पुगेर waste materials लाई flush out गर्न मद्दत गर्छ।
  
  Antioxidants ले free radicals neutralize गर्छन्, जुन aging, थकान, र chronic रोगहरूको main कारण हुन्। जब oxidative stress कम हुन्छ, तब हाम्रो body naturally clean, fresh र energetic महसुस गर्छ।
  
  Regular Kangen Water पिउँदा तपाईंलाई light, active, र internally healthy feel हुन्छ — जुन overall well-being को लागि एकदम फाइदाजनक छ।`,
    color: "bg-yellow-50",
    iconBg: "bg-yellow-200",
    iconColor: "text-yellow-700",
  },
  
  {
    title: "Glowing skin",
    description: "Hydration helps maintain skin elasticity and a youthful glow by improving blood circulation and detoxification.",
    color: "bg-pink-50",
    iconBg: "bg-pink-200",
    iconColor: "text-pink-700",
  },
  {
    title: "Enhanced energy",
    description: "Optimized hydration supports metabolism and nutrient delivery, which helps in sustaining energy throughout the day.",
    color: "bg-purple-50",
    iconBg: "bg-purple-200",
    iconColor: "text-purple-700",
  }
];

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);
  const nextBenefit = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % benefits.length;
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-6">Benefits</h2>
        <p className="text-lg text-gray-600 mb-12">
          Learn about how this water supports your wellness journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.color} bg-opacity-60 rounded-lg shadow-md p-6 cursor-pointer hover:scale-105 transition-transform duration-300`}
              onClick={() => openModal(index)}
            >
              <div className={`w-12 h-12 rounded-full ${benefit.iconBg} flex items-center justify-center mb-4`}>
                <span className={`${benefit.iconColor} text-lg font-bold`}>{index + 1}</span>
              </div>
              <h3 className={`text-xl font-semibold ${benefit.iconColor} mb-2`}>{benefit.title}</h3>
              <p className="text-gray-600 text-sm">
                Tap to explore full benefit.
              </p>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl max-w-lg w-full p-6 relative text-left shadow-xl"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  {benefits[activeIndex].title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {benefits[activeIndex].description}
                </p>
                <button
                  onClick={nextBenefit}
                  className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Next benefit <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
