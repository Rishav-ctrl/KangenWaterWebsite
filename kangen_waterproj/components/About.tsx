'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      {/* About Kangen Section */}
<section className="py-24 md:py-32 bg-white">
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
      <section className="py-24 md:py-32 bg-white">
  <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="text-center">
      <Image
        src="/electrolysis-diagram.png"
        alt="Electrolysis Process Diagram"
        width={700}
        height={500}
        className="rounded-xl shadow-lg mx-auto"
      />
    </div>
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-6 leading-snug">The Science Behind Kangen</h2>
      <p className="text-md md:text-lg text-gray-700 mb-4">
        Kangen पानी एकदम खास प्रकारको ionized alkaline पानी हो जुन <strong>electrolysis</strong> भन्ने process बाट तयार हुन्छ। यो process मा पानीलाई दुई भागमा छुट्याइन्छ — एक तर्फ <strong>alkaline water</strong> (पिउन योग्य) र अर्को तर्फ <strong>acidic water</strong> (बाहिरी प्रयोगको लागि)।
      </p>
      <p className="text-md md:text-lg text-gray-700 mb-4">
        यो प्रणालीले platinum-coated titanium प्लेटहरू प्रयोग गर्छ जुन पानीमा करेन्ट पठाएर पानीका molecules लाई पुनः arrange गर्छ। यसले गर्दा पानी साना <strong>micro-clusters</strong> मा परिवर्तन हुन्छ जुन शरीरले छिटो absorb गर्न सक्छ। Nepali मा भन्नुपर्दा, “यो पानी त छिट्टै शरीरमा घुल्ने हो, एकदम हल्का लाग्छ पिउँदा।” 😌
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Harmful acid हटाइ शरीरलाई alkaline balance मा राख्छ</li>
        <li>-ORP (Oxidation Reduction Potential) ले antioxidant power दिन्छ</li>
        <li>Micro-clustered water ले छिटो hydration दिन्छ</li>
        <li>Calcium, Magnesium जस्ता healthy minerals retain हुन्छ</li>
      </ul>
    </div>
  </div>
</section>

    </>
  );
}
