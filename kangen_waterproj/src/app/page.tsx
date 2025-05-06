"use client";
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const images = ['/slider1.png', '/slider2.png', '/slider3.png', '/slider4.png'];

const articles = [
  { title: 'Cristiano Ronaldo Drinks Kangen Water!', content: 'Cristiano Ronaldo जस्तो स्वास्थ्यप्रेमी व्यक्तिले Kangen Water K8 प्रयोग गर्छन् भन्ने देखाउन पाउँदा हामी खुसी छौं। स्वास्थ्य जीवनशैली चाहने सबैलाई प्रेरणा मिलोस्। आजै सम्पर्क गर्नुहोस् र आफ्नो Kangen प्राप्त गर्नुहोस्! 💧👍🏼' },
  { title: 'Doctors Recommend Kangen!', content: 'Kangen Water जापानमा 6500 भन्दा बढी डाक्टरहरूले सिफारिस गरेका छन्। यसको फाइदाहरू वैज्ञानिक परीक्षणद्वारा प्रमाणित छन्।' },
  { title: 'Used in Over 150 Countries', content: 'Kangen Water विश्वका 150 भन्दा बढी देशहरूमा प्रयोगमा ल्याइएको छ। यसको प्रचलन बढ्दो छ र विश्वासिलो पनि।' },
];

const facts = [
  'Kangen Water is certified by the Japanese Association of Preventive Medicine.',
  'Over 6500 doctors in Japan recommend Kangen Water.',
  'Kangen Water has powerful antioxidant properties.',
  'Used in more than 150 countries worldwide.',
  'Hydrates faster due to micro-clustered molecules.'
];

const infoLinks = [
  {
    title: 'About Enagic',
    description: 'Discover the origins, mission, and values of Enagic.',
    url: 'https://www.enagic.com/en_US/about-enagic'
  },
  {
    title: 'Enagic History',
    description: 'A look back at Enagic’s global impact and historic milestones.',
    url: 'https://www.enagic.com/en_US/enagic-history'
  },
  {
    title: 'Celebrity Endorsements',
    description: 'Explore how celebrities are using Kangen Water.',
    url: 'https://newtritionny.com/kangen-water-celebrities'
  },
  {
    title: 'Kangen in Literature',
    description: 'Academic insights and discussions around Kangen Water.',
    url: 'https://books.google.com.np/books?hl=en&lr=&id=NMqQ5-jPsGoC'
  },
  {
    title: 'Healthline: Alkaline Water',
    description: 'Benefits & risks of alkaline water explained.',
    url: 'https://www.healthline.com/health/food-nutrition/alkaline-water-benefits-risks'
  }
];

export default function ProductsPage() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const factInterval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % facts.length);
    }, 4000);
    return () => clearInterval(factInterval);
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => resetTimeout();
  }, [index]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setIndex((prev) => (prev - 1 + images.length) % images.length),
    trackMouse: true
  });

  const handlePrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);

  return (
    <main className="bg-white min-h-screen font-sans relative">
      {/* Dynamic Image Banner with buttons */}
      <div className="relative w-full h-auto sm:h-[400px] overflow-hidden" {...handlers}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[index]}
              alt={`Banner ${index}`}
              layout="fill"
              objectFit="cover"
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-blue-700 font-bold px-3 py-1 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-blue-700 font-bold px-3 py-1 rounded-full"
        >
          ›
        </button>
      </div>

      {/* Hero Section */}
      <section className="text-center mt-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">Kangen Water Nepal</h1>
        <h2 className="text-xl md:text-3xl text-gray-800 font-medium mb-2">Change Your Water, Change Your Life!</h2>
        <p className="text-base md:text-lg text-teal-600 italic">"Trusted by 6,500+ doctors | Certified in Japan | 5-in-1 Water System"</p>
      </section>
      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Kangen Miracle Water स्वच्छ, स्वास्थ्यवर्धक र जीवनदायी पानी हो, जसमा Anti-Oxidation, Alkaline, र Micro-Cluster जस्ता विशेषताहरू छन्। जापानमा लामो अनुसन्धान र क्लिनिकल ट्रायलपछि विकास गरिएको यो पानीले शरीरलाई Hydrate, Detoxify र Immune System बलियो बनाउन सहयोग गर्छ। यसको नारा हो: “Change Your Water, Change Your Life.”
          </p>
        </div>
        </section>

      {/* Info Section */}
      <section className="px-6 py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold text-blue-700 text-center mb-8">Informative Reads</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {infoLinks.map((info, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-lg font-bold text-blue-700">{info.title}</h3>
              <p className="text-gray-700 mt-2 text-sm">{info.description}</p>
              <a
                href={info.url}
                target="_blank"
                className="text-sm text-blue-500 mt-2 inline-block"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* News Cards */}
      <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3">
          {articles.map((article, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 leading-snug">{article.content}</p>
              <p className="text-sm text-blue-500 mt-2">Read more →</p>
            </div>
          ))}
        </div>

  
      {/* Floating "Did You Know" Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full shadow-lg text-sm animate-pulse transition-opacity duration-500">
          💡 {facts[factIndex]}
        </div>
      </div>
    </main>
  );
}
