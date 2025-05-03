'use client';

import Image from 'next/image';
import { useState } from 'react';



export default function About() {
  const [showGallery, setShowGallery] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* About Kangen Section */}
{/* About Kangen Section */}
<section id="about" className="py-24 md:py-32 bg-white">
  <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 leading-snug">What is Kangen Water?</h2>
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Kangen पानी भनेको ionized alkaline पानी हो जुन जापानमा बनेको विशेष machine बाट तयार हुन्छ। यो पानीले शरीरबाट <strong>acid र toxins हटाउँछ</strong> र शरीरलाई <strong>hydro balance</strong> मा राख्छ।
      </p>
      <p className="text-md md:text-lg text-gray-600">
        Electrolysis process मार्फत बनाइने यो पानीलाई जापानको स्वास्थ्य मन्त्रालयले <strong>medical device</strong> को रूपमा मान्यता दिएको छ। ६,५०० भन्दा धेरै doctors ले recommend गरेको यो machine लाई “<em>Rolls Royce of Water Ionizers</em>” पनि भनिन्छ।
      </p>
      <p className="text-md md:text-lg text-gray-600 mt-4">
        नेपालीमा भन्नुपर्दा, "यो पानी त पिउँदा नै फरक लाग्छ — हल्का, मिठो अनि refreshing!" 💧
      </p>

      {/* See More Button */}
      <button
        onClick={() => setShowMore(true)}
        className="mt-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition"
      >
        थप पढ्नुहोस्
      </button>
    </div>

    <div className="text-center">
      <Image
        src="/machine1.png"
        alt="Kangen Machine"
        width={350}
        height={450}
        className="rounded-full shadow-2xl border-4 border-blue-100 mx-auto"
        style={{ objectFit: 'contain' }}
      />
    </div>
  </div>

  {/* Popup Modal */}
  {showMore && (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 md:p-10 rounded-lg max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl relative">
        <button
          onClick={() => setShowMore(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Kangen Miracle Water</h3>
        <p className="text-gray-700 whitespace-pre-line text-sm md:text-base leading-relaxed">
          {/* Paste full Nepali content here inside the string */}
          Kangen Miracle Water
पानी Water
 पानी जीवन हो। मानव शरीरमा ६५–७५% पानीले बनेको हुन्छ। यो साधारण तर गहन सत्यले हाम्रो दैनिक जीवनमा सफा, स्वच्छ, स्वास्थ्य र  जिवनदायी पानीको महत्वलाई जनाउँछ। स्वस्थ पानीको अभावमा शरीरमा धेरै रोग लाग्छ भने स्वास्थ्य पानीको आपुर्तिकै कारणले धेरै रोगहरुमा सुधार हुदै जान्छ ।
 Kangen Water लाई हामी स्वस्थ पानी (Healthy Water) भन्न सक्छौं।
स्वस्थ पानी (Healthy Water) को खोजीमा आजभन्दा ५० वर्ष अगाडी जापानिज डाक्टर र बैज्ञानिकहरुले संसारको धेरै ठाउहरुको पानीलाई अनुसन्धान गर्दै जादा कतिपय स्थानको पानीमा  Anti-Oxidant, Alkaline, Micro-Cluster, Hydrogen Rich जस्ता विशेष गुणहरू पत्ता लाग्यो । जुन विशेषता पानीको सेवनको कारणले मानव स्वास्थ्यमा आमुल परिवर्तन ल्याउन सक्ने तथ्य पत्ता लाग्यो । सोहि विशेष Properties युक्त पानि हरेक परिवार समक्ष पुर्याउनका लागि Kangen Water मेसिनको आविस्कार गरे। जुन मेसिन जापानको सरकारी अस्पतालहरुमा २०औ वर्ष Clinical Trial (१९७४ - १९९४) को क्रममा विरामीहरुको (Chronic Disease) दीर्घकालिन रोगहरूमा समेत चमत्कारिक सुधारपछि Medical Grade Certified ISO 13485 भै Public सामु वितरणमा ल्याइयो ।  यसको मुख्यत: 3 Properties ले मानव शरीरलाई Hydrate, Detoxify, पुनर्जीवित गर्ने तथा प्राकृतिक र प्राव्ह्कारी तरिकाले स्वस्थ्यता प्रदान गर्दछ र  Immune System बढाउने जस्ता कार्यहरूमा सहायता पुर्‍याउने विश्वास गरिन्छ।
यसको "Change Your Water, Change Your Life" भन्ने नारा जनमानसमा लोकप्रिय छ। तपाईंले Kangen Water को प्रयोग गर्नु भयो भने तपाईं र तपाईंको परिवारको स्वास्थ्य प्रति योगदान दिन सकिने विश्वास लिई अघि बढ्न सकिन्छ।


Kangen WaterⓇ को प्रमुख विशेषताहरू:
1. Anti-Oxidation (Anti-Aging)
 Anti अर्थात ठिक विपरित रोक्ने काम । Oxidation वा Oxidizing अर्थात सड्ने, गल्ने वा कुहिने प्रक्रिया हो । अझ भन्नुपर्दा रोग लाग्ने वा बुढो हुने (Fastaging) प्रक्रिया नै Oxidation हो , यो सबै प्रक्रियालाई रोक्ने वा छिटो हुन नदिने तत्व नै Anti-oxidant हो ।
 Kangen Water मा पाइने Antioxidant गुणले शरीरलाई oxidize हुनबाट बचाउँछ र स्वास्थ्य कायम राख्न मद्दत गर्छ।
2. Alkaline क्षारीय
 Alkaline भन्नाले पानीमा भएको क्षारीय अवस्थालाई जनाउँछ जसको pH मान ७ भन्दा बढी हुन्छ।
 हाम्रो जीवनमा पिउने पानी, प्रशोधित खाना (Junk Food), विभिन्न पेय पदार्थहरु सबैले शरीरलाई अम्लीय बनाउँछ (Acidic)।
 Kangen Water Ionized Alkaline पानी हो जसले शरीरको pH Level सन्तुलनमा राख्छ र स्वस्थ जीवनमा सहयोग पुर्‍याउँछ।
3. Micro-Cluster सूक्ष्म अणु युक्त (पानीको पातलोेपन)
 Micro-Cluster भन्नाले पानीको पातलोेपन (Softness) वा पानीमा भएको सूक्ष्म अणुको जालो बुझिन्छ।
 साधारण पानी हाम्रो शरीरको आवश्यकता अनुसार पातलोेपन नभएको हुँदा शरीरमा Dehydration हुन्छ।
 तर Kangen Water को Softness गुणले Nutrition, Vitamins, Minerals, सूक्ष्म तत्वहरूलाई शरीरको Cell, Blood हुँदै Brain सम्म पुर्‍याउन मद्दत गर्छ।
 यसले शरीरको Detoxify गरी Free Radicals र Toxins हरूलाई बाहिर निकाल्न मद्दत गर्छ।



          {/* (Include full content here as you shared earlier) */}
        </p>
      </div>
    </div>
  )}
</section>



      {/* Certifications Section */}
      <section className="py-24 md:py-32 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-teal-700 mb-6 leading-snug">Certified & Trusted Worldwide</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>✅ Certified Medical Device by Japan's Health Ministry</li>
              <li>✅ WQA Gold Seal Award Winner</li>
              <li>✅ Used in 100s of Hospitals in Japan</li>
              <li>✅ Lifespan of 15 – 25 years</li>
              <li>✅ ISO 9001 – Quality management system certified for meeting customer expectations and continuous improvement</li>
              <li>✅ ISO 14001 – Environmental management standard focused on reducing environmental impact</li>
              <li>✅ ISO 13485 – Certified to produce medical devices that meet consumer and regulatory requirements</li>
              <li>✅ WQA Certification – Product safety, backed claims, and durability verified</li>
              <li>✅ Medical Device Manufacturing License – Issued in Osaka Prefecture (License: 27BZ006010)</li>
              <li>✅ Medical Device Marketing Authorization – Certified by Japan's Ministry of Health (License: 27B2X00070)</li>
              <li>✅ Kangen Water Trademark – Registered in the U.S. Patent & Trademark Office (Reg No: 4,063,154)</li>
              <li>✅ 8 Point Business Model Trademark – Exclusively trademarked system</li>
              <li>✅ Member of Direct Selling Association (DSA)</li>
              <li>✅ A+ Rating from Better Business Bureau (BBB)</li>
            </ul>
            <p className="text-md md:text-lg text-gray-600">
              यति धेरै professionals र institutions द्वारा trusted हुनु को कारण, Kangen Water is not just a product—it’s a lifestyle revolution.
            </p>
          </div>
          <div className="relative flex justify-center gap-4 items-center">
            <Image
              src="/Iso9001.jpg"
              alt="Kangen Water Certified Device"
              width={300}
              height={400}
              className="rounded-xl shadow-lg z-10 cursor-pointer"
              onClick={() => setShowGallery(true)}
            />
            <Image
              src="/Iso14001.jpg"
              alt="ISO Certificate Left"
              width={180}
              height={240}
              className="rounded-lg shadow-md -rotate-6 translate-y-6 hidden md:block cursor-pointer"
              onClick={() => setShowGallery(true)}
            />
            <Image
              src="/WQA.jpg"
              alt="ISO Certificate Right"
              width={180}
              height={240}
              className="rounded-lg shadow-md rotate-6 translate-y-6 hidden md:block cursor-pointer"
              onClick={() => setShowGallery(true)}
            />

            {/* Modal Gallery */}
            {showGallery && (
              <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center" onClick={() => setShowGallery(false)}>
                <div className="bg-white p-4 rounded-lg max-w-4xl flex gap-4 overflow-auto">
                  <Image src="/Iso9001.jpg" alt="Left Certificate" width={300} height={400} className="rounded" />
                  <Image src="/Iso14001.jpg" alt="Main Certificate" width={300} height={400} className="rounded" />
                  <Image src="/WQA.jpg" alt="Right Certificate" width={300} height={400} className="rounded" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technology Section */}
<section className="py-20 md:py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
    <div className="flex flex-col items-center gap-6">
      <Image
        src="/electrolysis process.png"
        alt="Electrolysis Process"
        width={300}
        height={200}
        className="rounded-2xl shadow-xl"
      />
      <Image
        src="/micclus.png"
        alt="Microcluster Water"
        width={300}
        height={200}
        className="rounded-2xl shadow-xl"
      />
    </div>
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">The Science Behind Kangen</h2>
      <p className="text-md md:text-lg text-gray-700 mb-4">
        Kangen पानी भनेको <strong>electrolysis</strong> technology बाट तयार भएको ionized alkaline पानी हो। 
        यो process मा पानीलाई दुई भागमा छुट्याइन्छ: <strong>alkaline water</strong> (पिउन योग्य) र <strong>acidic water</strong> (बाहिरी प्रयोगको लागि)।
      </p>
      <p className="text-md md:text-lg text-gray-700 mb-4">
        मशीनले platinum-coated titanium प्लेटहरूबाट करेन्ट पठाउँछ र पानीका molecules लाई साना <strong>micro-clusters</strong> मा परिवर्तन गर्छ। 
        यस्ता पानीले शरीरलाई छिटो hydrate गर्छ। Nepali मा भन्नुपर्दा — "यो पानी त पिएर तुरुन्तै हल्का महसुस हुन्छ, घुल्दो पानी जस्तो।" 🥰
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>शरीरबाट harmful acid हटाउँछ र alkaline balance बनाइदिन्छ।</li>
        <li>Negative ORP (Oxidation Reduction Potential) ले antioxidant power दिन्छ।</li>
        <li>Micro-clustered पानीले छिटो hydration र energy boost गर्छ।</li>
        <li>Calcium र Magnesium जस्ता जरुरी minerals जोगाउँछ।</li>
      </ul>
    </div>
  </div>
</section>


    </>
  );
}
