"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { Span } from 'next/dist/trace';
import PHUsageSection from './/components/PHUsageSection';

const images = [ '/sliders/slider4.png','/sliders/slider1.png', '/sliders/slider2.png', '/sliders/slider3.png', '/sliders/slider5.png'];

const articles = [
  { title: 'Cristiano Ronaldo Drinks Kangen Water!', content: 'Cristiano Ronaldo जस्तो स्वास्थ्यप्रेमी व्यक्तिले Kangen Water K8 प्रयोग गर्छन् भन्ने देखाउन पाउँदा हामी खुसी छौं। स्वास्थ्य जीवनशैली चाहने सबैलाई प्रेरणा मिलोस्। आजै सम्पर्क गर्नुहोस् र आफ्नो Kangen प्राप्त गर्नुहोस्! 💧👍🏼', link :'https://www.facebook.com/watch/?v=656559738821284' },
  { title: 'Doctors Recommend Kangen!', content: 'Kangen Water जापानमा 6500 भन्दा बढी डाक्टरहरूले सिफारिस गरेका छन्। यसको फाइदाहरू वैज्ञानिक परीक्षणद्वारा प्रमाणित छन्।', link:'https://www.slideshare.net/slideshow/doctors-scientists-and-nutritionists-on-kangen-water/66866927' },
  { title: 'Used in Over 150 Countries', content: 'Kangen Water विश्वका 150 भन्दा बढी देशहरूमा प्रयोगमा ल्याइएको छ। यसको प्रचलन बढ्दो छ र विश्वासिलो पनि।',link:'https://kangenwater.in/#:~:text=What%20Doctor%20Said%20About%20Kangen%20Water%3F' },
];

const cards = [
{img: 'ronaldo1.jpg'},
{img: 'secondcard.png'},
{img: 'thirdcard.png'}
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
    <main className="bg-sky-100 min-h-screen font-sans relative">
      {/* Dynamic Image Banner with buttons */}
      <div className="relative w-full h-[250px] sm:h-[400px] overflow-hidden" {...handlers}>

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
              sizes="(max-width: 500px) 100vw, 100vw"
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
        <h1 className="text-5xl font-extrabold text-blue-900 tracking-wide uppercase">Kangen Water Nepal</h1>
        <h2 className="text-xl md:text-3xl text-gray-800 font-medium mb-2">Change Your Water, Change Your Life!</h2>
        <div className="mx-auto max-w-fit">
        <p className="bg-green-600 text-white text-base md:text-lg text-teal-600 italic">"Trusted by 6,500+ doctors | Certified in Japan | 7-in-1 Water System"</p>
        </div> 
      </section>
      
         {/* About Section */}
          <section className="py-10 px-4 sm:px-6">
            {/* पानी / Water Section */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="w-full mb-6">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-tr-md inline-block">
                    पानी / Water
                  </span>
                </h2>
                <p className="text-black text-lg leading-relaxed">
                  पानी जीवन हो। मानव शरीर ६५-७५% पानीले बनेको हुन्छ। यो साधारण तर गहन सत्यले हाम्रो दैनिक जीवनमा सफा, स्वच्छ, स्वस्थ र जीवनदायी पानीको महत्वलाई जनाउँछ । स्वस्थ पानीको अभावले मानव शरीरमा धेरै रोग लाग्छ भने पर्याप्त स्वस्थ पानी पिउनाले धेरै रोगहरुबाट बच्न सकिन्छ । 
                  <br /><br />
                  स्वस्थ पानी (Healthy Water) खोजीको क्रममा आजभन्दा ५० वर्ष अगाडी जापानीज डाक्टर र वैज्ञानिकहरूले संसारको धेरै ठाउँहरुको पानीलाई अनुसन्धान गर्दै जादा कतिपय स्थानको पानीमा Anti-Oxident, Alkaline, Micro-Cluster, Hydrogen Rich जस्ता विशेष Properties पत्ता लाग्यो । 
                  <br /><br />
                  जुन विशेषतायुक्त पानी पिउनाले मानव स्वास्थ्यमा आमुल परिवर्तन ल्याउन सक्ने तथ्य पत्ता लाग्यो । सोही विशेष Properties युक्त पानी हरेक परिवार समक्ष पुऱ्याउनका लागि Kangen Water मेसिनको अविस्कार गरे। 
                  <br /><br />
                  जुन मेसिन जापानको सरकारी हस्पिटलहरुमा २०औं वर्ष Clinical Trail (1974-1994) को क्रममा विरामीहरुको (Chronic Disease) दीर्घ रोगहरुमा समेत चमत्कारिक सुधार देखिएपछि ISO 13485 (Medical Grade Certified) भई Public सामु वितरणमा ल्याइयो।
                  <br /><br />
                  Kangen Water मा भएको विशेष 3 (Properties) गुणहरुले मानव शरीरलाई Hydrate, Detoxify, निस्कृय कोषिकालाई सक्रिय गर्ने तथा प्राकृतिक र प्रभावकारी तरिकाले स्वस्थता प्रदान गर्दछ र Immune System लाई मजबुत गर्दछ। 
                  <br /><br />
                  यो पानी पिउनाले मानिसलाई लागिसकेको रोग नियन्त्रण गर्न र भविष्यमा लाग्नसक्ने रोगहरुबाट बच्न मद्दत गर्दछ। यो पानी नियमित रुपमा पिउनाले शरीरलाई प्राकृतिक स्वस्थ अवस्थामा फर्काउन मद्दत गर्दछ । 
                  <br /><br />
                  जापानीज भाषामा "कंगन (Kangen)" को अर्थ "पहिलेको अवस्थामा फर्कनु" हुन्छ । "Change Your Water, Change Your Life" यो शक्तिशाली slogan/कथन द्वारा Kangen Water ले दिने सारांशलाई प्रतिविम्वित गर्छ । 
                  <br /><br />
                  Kangen Water को प्रयोगले तपाई केवल राम्रो Hydration को विकल्प मात्र रोज्नु हुदैन बरु तपाई आफू र आफ्नो परिवारको स्वास्थ्य अनि दीर्घायु प्रति प्राथमिकता दिने जीवनशैलीलाई अपनाउँदै हुनुहुन्छ ।
                </p>
              </div>
            </div>
          </section>



                {/* Section Heading */}
                <div className="text-center mb-8">
            <h2 className="inline-block bg-cyan-900 text-white text-2xl md:text-3xl font-bold px-6 py-2 rounded-xl">
              Kangen Water® को प्रमुख विशेषताहरु:
            </h2>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto mb-16">
            {/* Feature 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="bg-blue-900 text-white font-bold text-lg px-4 py-2 rounded">
                  1. Anti-Oxidant (Anti-Aging)
                </h3>
                <p className="text-gray-800 leading-relaxed mt-2">
                  Anti अर्थात ठीक विपरित रोक्ने काम । Oxidation or Oxidizing अर्थात सड्ने गल्ने वा कुहिने प्रकृया हो । अझ भन्नुपर्दा रोग लाग्ने वा बुढो हुने (Fast Aging) प्रकृया नै Oxidation हो । यो सबै प्रकृयालाई रोक्ने वा छिटो हुन नदिने तत्व नै Anti-Oxidant हो । Kangen Water मा पर्याप्त मात्रामा Anti-Oxidant हुन्छ जसले हाम्रो शरीरलाई Oxidize हुनबाट बचाई स्वस्थ र जवान राख्न मद्दत गर्दछ।
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/genimgs/ORPpng.png"
                  alt="Anti-Oxidant ORP"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="bg-blue-900 text-white font-bold text-lg px-4 py-2 rounded">
                  2. Alkaline क्षारीय
                </h3>
                <p className="text-gray-800 leading-relaxed mt-2">
                  Alkaline भनेको पानीमा भएको क्षारीय अवस्था हो जसको pH मान 7 भन्दा बढी हुन्छ। हामीले दैनिक जीवनमा पिउने पानी, खाइरहेको खाना Junk Food विभिन्न पेयपदार्थहरु अम्लीय (Acidic) प्रकृतिका हुन्छन् जसले हाम्रो शरीरलाई अम्लीय (Acidic) अवस्थामा लगिरहेको हुन्छ। बढ्‌दो अम्लिय (Acidic) अवस्थाले गर्दा हाम्रो शरीरमा विभिन्न रोगहरु निम्त्याउँछ । lonized Alkaline युक्त Kangen Water पिउनाले शरीरमा भएको अम्लिय पदार्थको प्रभावलाई कम गर्न सक्छ र शरीरमा pH Level लाई सन्तुलनमा राखी स्वस्थ रहन मद्दत गर्दछ ।
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/genimgs/PHpng.png"
                  alt="Alkaline pH"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="bg-blue-900 text-white font-bold text-lg px-4 py-2 rounded">
                  3. Micro-Cluster शुक्ष्म अणु युक्त (पानीको पातलोपना)
                </h3>
                <p className="text-gray-800 leading-relaxed mt-2">
                  Micro-Cluster को अर्थ पानीमा भएको सुक्ष्म अणुहरुको गुच्छा अर्थात पानीको पातलोपना (Softness) लाई जनाउँछ । साधारण पानी हाम्रो शरीरलाई आवश्यकता अनुसारको पातलोपना नहुने भएकाले पानीको आपूर्ती कम (Dehydration) भइरहेको हुन्छ। हामीले खाईरहेको खानामा भएको Nutrition र आवश्यक Oxygen शरीरको प्रत्येक कोषिकासम्म पर्याप्त मात्रामा पुऱ्याउन सक्दैन। सोही कारणले शरीर Detoxify हुन सक्दैन तर Kangen Water पातलो (Soft) हुने भएकाले Body Hydrade गरी हाम्रो खानमा भएको विभिन्न किसिमको Nutrition, Vitamins, Minerals सुक्ष्म तत्वहरुलाई प्रत्येक कोषिकासम्म पुऱ्याउनुका साथै Oxygen पर्याप्त मात्रामा Cell, Blood हुँदै Brain सम्म प्रवाह गर्दछ । यसले शरीरमा रहेको Free Redicals र Toxins हरुलाई बाहिर निकाली मृत कोषिकाको ठाउँमा नयाँ कोषिका बन्न मद्दत गर्दछ।
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/genimgs/micclusterpng.png"
                  alt="Micro-Cluster"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>


          {/* Footer Note */}
          <div className="flex justify-center my-10">
            <div className="bg-blue-900 text-white text-center font-semibold text-xl py-3 px-6 rounded-md max-w-fit">
              Enagic Kangen Water Electrolysis Technology “शुद्धता र स्वास्थ्यको नयाँ युग”
            </div>
          </div>


        <div className="max-w-6xl mx-auto mb-12 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 order-2 md:order-1">
        
            <h2 className="text-2xl font-bold mb-4">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-tr-md inline-block">
                    Restructured lonized Alkaline Kangen Water® पिउनुको फाइदाहरूः
                  </span>
                  </h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                <li>प्रतिरक्षा प्रणाली (Immune System) बलियो बनाउँछ ।</li>
                <li>माइग्रेन, थाइराईड, युरिक एसिड, बाथ, सुगर, प्रेसर जस्ता दीर्घ रोग नियन्त्रण गर्न मद्दत गर्दछ ।</li>
                <li>क्यान्सर जस्तो प्राणघातक रोगबाट बचाउन मद्दत गर्दछ ।</li>
                <li>पाचन प्रणालीमा सुधार गरी ग्यास्ट्रीक, अल्सर, कन्र्नस्टपेसन जस्ता समस्यालाई कम गर्न मद्दत गर्दछ ।</li>
                <li>अनावश्यक मोटोपना, फ्याटीलिभर, कोलेस्ट्रोल जस्ता समस्यालाई नियन्त्रण गर्न मद्दत गर्दछ ।</li>
                <li>पत्थरी हुन नदिन, भएको पत्थरी हटाउन र किड्नीलाई बचाई राख्न मद्दत गर्दछ ।</li>
                <li>अक्सिजनको मात्रा शरीरको विभिन्न भागमा पुऱ्याउनुका साथै पौष्टिक तत्वलाई प्रसारण गर्दछ ।</li>
                <li>मस्तिष्क सम्बन्धी समस्या सुधार गरी स्मरण शक्ति बढाउन मद्दत गर्दछ ।</li>
                <li>छाला सम्बन्धी विभिन्न समस्याहरुका साथै Psoriasis, Eczema जस्तो दीर्घ रोगलाई समेत कम गर्न मद्दत गर्दछ ।</li>
                <li>गर्भवती महिलाले यो पानी पिउनाले आमाको स्वास्थ्य सुधार गरी स्वस्थ बच्चा जन्मिन मद्दत गर्दछ ।</li>
                <li>शरीरमा भिटामिन र मिनरलस्‌को मात्रालाई सन्तुलन राख्न मद्दत गर्दछ ।</li>
                <li>श्वास प्रश्वास सम्बन्धी समस्यालाई सहज बनाउन मद्दत गर्दछ ।</li>
                <li>मुटु सम्बन्धी समस्यालाई कम गर्न मद्दत गर्दछ ।</li>
                <li>कमजोरी थकानलाई कम गरी Energy Level Maintain राख्न मद्दत गर्दछ।</li>
            </ul>
          </div>
           <div className="w-full md:w-1/2 px-4 order-1 md:order-2">
            <img src="/genimgs/micclus.png" alt="कङ्गन पानीका फाइदाहरू" className="rounded-lg shadow-md" />
          </div>
        </div>

         {/* कङ्गन मेसिनका विशेषताहरू Section */}
            <div className="mb-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-tr-md inline-block mb-2">
                  Kangen Water® lonizer का विशेषताहरू:
              </span>
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  यो उन्नत मेसिनमा ७ देखि १२ वटा प्लेटहरू जडान गरिएका छन्, जसमा प्लाटिनम कोडेड, टाइटानियम प्लेट र इलेक्ट्रोलाइटिक प्लेटहरू प्रमुख छन्। यसको प्रभावकारिता र सुरक्षा विभिन्न प्रमाणहरूद्वारा समर्थित छ:
                </p>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
            <li>यो मेसिनमा ४-१२ वटा Platinum Coated Titanium (Medical Grade) प्लेटहरु हुन्छन् ।</li>
            <li>यो मेसिन जापानको 6500 M.D. डाक्टरहरुद्वारा Approved गरिएको हो ।</li>
            <li>यो मेसिन विश्वकै एक मात्र ISO13485 (Medical Grade) प्रमाणित उपकरण हो।</li>
            <li>यो मेसिन 14001, 9001 प्रमाणित उपकरण हो।</li>
            <li>Water Quality Association अमेरिकाबाट विश्वकै एक मात्र Gold Standard Award सम्मानित उपकरण हो ।</li>
            <li>जापान सरकार स्वास्थ्य तथा श्रम मन्त्रालयबाट प्रमाणित उपकरण हो ।</li>
            <li>पानीमा भएको Chlorine हटाउन सक्ने विशेष Filteration System युक्त एक मात्र मेसिन हो ।</li>
            <li>यो मेसिनको ३-५ वर्षको International Warranty हुन्छ ।</li>
            <li>यो मेसिन न्यूनतम १५-२५ वर्षसम्म टिकाउ हुन्छ ।</li>
            <li>यो मेसिनबाट ७ प्रकारको फरक-फरक गुण भएको पानी निकाल्न सकिन्छ ।</li>
            <li>यो मेसिनलाई Rolls Royce of Water lonizer पनि भनिन्छ ।</li>
        </ul>
              </div>

              <div className="w-full md:w-1/2 mb-4">
                <img
                  src="/macines/machine1.png"
                  alt="कङ्गन मेसिनका विशेषताहरू"
                  className="rounded-lg shadow-md w-full object-cover max-h-[500px]"
                />
              </div>
            </div>

        <div className="max-w-8xl mx-auto mb-20">
          <h2 className="text-xl font-bold text-gray-800 mb-4">कङ्गन पानीका विभिन्न प्रकार र तिनीहरूको प्रयोग:</h2>
          <div className="overflow-x-auto">
             <PHUsageSection />
          </div>
        </div>
  );

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
      <div className="mt-12 pb-16 grid gap-8 grid-cols-1 md:grid-cols-3">
  {articles.map((article, i) => (
    <div
      key={i}
      className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-[500px] w-full overflow-hidden"
    >

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-3">{article.title}</h3>
          <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
            {article.content}
          </p>
        </div>

        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 font-medium hover:underline"
        >
        {/* Thumbnail Image */}
      <img
  src={`/cards/${cards[i].img}`}  
  alt={article.title}
  className="w-full h-100 object-cover rounded-2xl mb-4"
/>
          Read more →
        </a>
      </div>
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
