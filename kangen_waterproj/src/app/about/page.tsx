'use client';

 import Image from 'next/image';
 import { useState } from 'react';
 import Link from 'next/link';

 export default function About() {
  const [showGallery, setShowGallery] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage('');
  };

  return (
    <>
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
          </div>

          <div className="text-center">
            <Image
              src="/macines/machine1.png"
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
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-teal-700 mb-8 text-center leading-snug">विश्वव्यापी रूपमा प्रमाणित र विश्वसनीय</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>✅ जापानको स्वास्थ्य मन्त्रालय द्वारा प्रमाणित चिकित्सा उपकरण</li>
                <li>✅ WQA गोल्ड सील अवार्ड विजेता</li>
                <li>✅ जापानका सयौं अस्पतालहरूमा प्रयोग गरिएको</li>
                <li>✅ १५ – २५ वर्षको आयु</li>
                <li>✅ ISO 9001 – ग्राहकको अपेक्षा र निरन्तर सुधार पूरा गर्न गुणस्तर व्यवस्थापन प्रणाली प्रमाणित</li>
                <li>✅ ISO 14001 – वातावरणीय प्रभाव कम गर्न केन्द्रित वातावरणीय व्यवस्थापन मानक</li>
                <li>✅ ISO 13485 – उपभोक्ता र नियामक आवश्यकताहरू पूरा गर्ने चिकित्सा उपकरणहरू उत्पादन गर्न प्रमाणित</li>
                <li>✅ WQA प्रमाणीकरण – उत्पादन सुरक्षा, समर्थित दावीहरू, र स्थायित्व प्रमाणित</li>
                <li>✅ चिकित्सा उपकरण निर्माण लाइसेन्स – ओसाका प्रिफेक्चरमा जारी (लाइसेन्स: 27BZ006010)</li>
                <li>✅ चिकित्सा उपकरण मार्केटिंग प्राधिकरण – जापानको स्वास्थ्य मन्त्रालय द्वारा प्रमाणित (लाइसेन्स: 27B2X00070)</li>
                <li>✅ कङ्गन वाटर ट्रेडमार्क – अमेरिकी पेटेन्ट र ट्रेडमार्क कार्यालयमा दर्ता (Reg No: 4,063,154)</li>
                <li>✅ बेटर बिजनेस ब्यूरो (BBB) बाट A+ रेटिंग</li>
              </ul>
              <p className="text-md md:text-lg text-gray-600">
                यति धेरै पेशेवरहरू र संस्थाहरू द्वारा विश्वसनीय हुनुको कारण, कङ्गन वाटर केवल एक उत्पादन मात्र होइन—यो एक जीवनशैली क्रान्ति हो।
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Image
                src="/certificates/certificate 1.png"
                alt="Certificate 1"
                width={180}
                height={180}
                className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openModal('/certificate 1.png')}
              />
              <Image
                src="/certificates/certificate 2.png"
                alt="Certificate 2"
                width={180}
                height={180}
                className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openModal('/certificate 2.png')}
              />
              <Image
                src="/certificates/certificate 3.png"
                alt="Certificate 3"
                width={180}
                height={180}
                className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openModal('/certificate 3.png')}
              />
              <Image
                src="/certificates/certificate 4.png"
                alt="Certificate 4"
                width={180}
                height={180}
                className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openModal('/certificate 4.png')}
              />
              <Image
                src="/certificates/certificate 5.png"
                alt="Certificate 5"
                width={180}
                height={180}
                className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openModal('/certificate 5.png')}
              />
            </div>
          </div>
        </div>

        {/* Modal Gallery */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center" onClick={closeModal}>
            <div className="bg-white p-4 rounded-lg max-w-3xl">
              <Image src={modalImage} alt="Certificate" width={800} height={800} className="rounded" />
              <button className="absolute top-4 right-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </section>
      {/* Technology Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/genimgs/electrolysis process.png"
              alt="Electrolysis Process"
              width={300}
              height={200}
              className="rounded-2xl shadow-xl"
            />
            <Image
              src="/genimgs/micclus.png"
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