"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/slider1.png',
  '/slider2.png',
  '/slider3.png',
  '/slider4.png',
];

export default function ProductsPage() {
  const [index, setIndex] = useState(0);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    if (!manual) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [manual]);

  const nextImage = () => {
    setManual(true);
    setIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setManual(false), 8000);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Scrolling News Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 overflow-hidden whitespace-nowrap text-sm animate-marquee">
        <span>Yo pani Japan ko medical ma use huncha... Certified in over 150 countries... Trusted by thousands of doctors... </span>
      </div>

      {/* Dynamic Image Banner */}
      <div className="relative w-full h-[500px] bg-blue-100 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full top-0 left-0"
          >
            <Image
              src={images[index]}
              alt={`Banner ${index}`}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-1000"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-6 right-6 z-10">
          <button
            onClick={nextImage}
            className="bg-teal-500 text-white px-4 py-2 rounded-full hover:bg-teal-600 shadow"
          >
            Next Image
          </button>
        </div>
      </div>

      {/* Hero Titles */}
      <section className="text-center mt-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4">Kangen Water Nepal</h1>
        <h2 className="text-2xl md:text-4xl text-black font-semibold mb-3">Change Your Water, Change Your Life!</h2>
        <p className="text-lg text-teal-600 italic">"Trusted by 6,500+ doctors | Certified in Japan | 5-in-1 Water System"</p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
          Kangen Miracle Water स्वच्छ, स्वास्थ्यवर्धक र जीवनदायी पानी हो, जसमा Anti-Oxidation, Alkaline, र Micro-Cluster जस्ता विशेषताहरू छन्। जापानमा लामो अनुसन्धान र क्लिनिकल ट्रायलपछि विकास गरिएको यो पानीले शरीरलाई Hydrate, Detoxify र Immune System बलियो बनाउन सहयोग गर्छ। यसको नारा हो: “Change Your Water, Change Your Life.
          </p>
        </div>

        {/* News Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <a
              key={i}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-blue-100"
            >
              <h3 className="text-blue-600 font-bold text-xl mb-2">Cristiano Ronaldo Drinks Kangen Water!{i}</h3>
              <p className="text-gray-600 text-sm">Cristiano Ronaldo जस्तो स्वास्थ्यप्रेमी व्यक्तिले Kangen Water K8 प्रयोग गर्छन् भन्ने देखाउन पाउँदा हामी खुसी छौं। स्वास्थ्य जीवनशैली चाहने सबैलाई प्रेरणा मिलोस्। आजै सम्पर्क गर्नुहोस् र आफ्नो Kangen प्राप्त गर्नुहोस्! 💧👍🏼

अझ छोटो वा फरक शैलीमा चाहिएको भए भन्नुहोस्।</p>
              <p className="text-blue-500 text-sm mt-2">Read more →</p>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Riya Sharma',
                text: 'Kangen Water has changed my life! I feel more energetic and fresh throughout the day.'
              },
              {
                name: 'Aarav Joshi',
                text: 'Never thought water could make such a difference. Highly recommend it to everyone!'
              },
              {
                name: 'Priya Thapa',
                text: 'Even my skin feels better now. Love this water!'
              }
            ].map((t, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl shadow">
                <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                <p className="text-blue-700 font-semibold">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
