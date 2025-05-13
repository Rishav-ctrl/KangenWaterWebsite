"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const images = ['/slider1.png', '/slider2.png', '/slider3.png', '/slider4.png'];

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
    <main className="bg-white min-h-screen font-sans relative">
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
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">Kangen Water Nepal</h1>
        <h2 className="text-xl md:text-3xl text-gray-800 font-medium mb-2">Change Your Water, Change Your Life!</h2>
        <p className="text-base md:text-lg text-teal-600 italic">"Trusted by 6,500+ doctors | Certified in Japan | 5-in-1 Water System"</p>
      </section>
     {/* About Section */}
     <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto mb-12 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">पानीको महत्व र कङ्गन मेसिन</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              मानव जीवनमा पानीको अत्यन्तै महत्त्वपूर्ण भूमिका रहेको छ। एकातर्फ दूषित पानीले धेरै रोग निम्त्याउन सक्छ भने, अर्कोतर्फ शुद्ध र विशेष रूपमा प्रशोधित पानीले धेरै स्वास्थ्य समस्याहरूलाई निको पार्न मद्दत गर्दछ। लगभग ४४ वर्षअघि जापानी वैज्ञानिकहरूले कङ्गन मेसिन नामक एक उपकरणको आविष्कार गरे। यो उपकरणले साधारण पानीलाई पिउन योग्य, औषधीय गुण भएको र पूरक औषधिको रूपमा तयार पार्छ। यस्तो पानीको नियमित सेवनले लागिसकेका रोगहरूलाई नियन्त्रण गर्न र भविष्यमा लाग्न सक्ने रोगहरूबाट बचाउन मद्दत गर्दछ भन्ने विश्वास गरिन्छ।
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <img src="/image2.png" alt="कङ्गन मेसिन" className="rounded-lg shadow-md" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 order-2 md:order-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4">कङ्गन मेसिनका विशेषताहरू:</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-2">
              यो उन्नत मेसिनमा ७ देखि १२ वटा प्लेटहरू जडान गरिएका छन्, जसमा प्लाटिनम कोडेड, टाइटानियम प्लेट र इलेक्ट्रोलाइटिक प्लेटहरू प्रमुख छन्। यसको प्रभावकारिता र सुरक्षा विभिन्न प्रमाणहरूद्वारा समर्थित छ:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
              <li><span className="font-bold">चिकित्सकीय प्रमाणीकरण:</span> ६५०० जना डाक्टरहरूको समूहले प्रयोगशाला परीक्षण गरी यसको पुष्टि गरेको बताइएको छ।</li>
              <li><span className="font-bold">सरकारी मान्यता:</span> जापानको स्वास्थ्य, श्रम तथा कल्याण मन्त्रालयबाट प्रमाणित गरिएको उपकरण।</li>
              <li><span className="font-bold">अन्तर्राष्ट्रिय मापदण्ड:</span> यसले आईएसओ १४००१, ९००१ र १३४८५ जस्ता गुणस्तर प्रमाणपत्रहरू प्राप्त गरेको छ।</li>
              <li><span className="font-bold">गुणस्तर सुनिश्चितता:</span> वाटर क्वालिटी एसोसिएसन (USA) बाट गोल्ड सील अवार्डद्वारा सम्मानित।</li>
              <li><span className="font-bold">एकीकृत प्रविधि:</span> यसमा चुम्बकीय शक्ति जडान गरिएको हुन्छ।</li>
              <li><span className="font-bold">वारेन्टी र आयु:</span> यो ५ वर्षको वारेन्टीको साथ आउँछ र लगभग १८-२० वर्षसम्म प्रयोग गर्न सकिन्छ।</li>
              <li><span className="font-bold">सञ्चालन:</span> यसलाई विद्युत आपूर्ति चाहिन्छ र यो कम्प्याक्ट तथा प्रयोग गर्न सजिलो छ।</li>
              <li><span className="font-bold">औद्योगिक उत्पादन:</span> यो औद्योगिक मापदण्ड अनुसार उत्पादन गरिन्छ।</li>
              <li><span className="font-bold">बहुउपयोगी उत्पादन:</span> यसले सात प्रकारका फरक-फरक गुणस्तरयुक्त पानी उत्पादन गर्न सक्छ।</li>
              <li><span className="font-bold">प्रयोगकर्ता मैत्री इन्टरफेस:</span> यसमा एलसीडी स्क्रिन र आवाज निर्देशन प्रणाली जडान गरिएको छ।</li>
              <li><span className="font-bold">निर्देशिका:</span> विस्तृत प्रयोगकर्ता पुस्तिका यसका साथ उपलब्ध छ।</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-4 order-1 md:order-2">
            <img src="/machine1.png" alt="कङ्गन मेसिनका विशेषताहरू" className="rounded-lg shadow-md" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-gray-800 mb-4">शरीरलाई हुने मुख्य फाइदाहरू र पानीका विशेषताहरू:</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-2">
              कङ्गन मेसिनले निम्न विशेषताहरू भएको पानी उत्पादन गर्दछ, जसले महत्त्वपूर्ण स्वास्थ्य लाभहरू प्रदान गर्ने विश्वास गरिन्छ:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 leading-relaxed">
              <li><span className="font-bold">एन्टि-अक्सिडेशन:</span> यसले अक्सिडेशन प्रक्रियालाई रोक्छ। अक्सिडेशन भनेको कोषहरू बिग्रने र बुढ्यौली लाग्ने प्रक्रिया हो। यस पानीको सेवनले कोषहरूलाई स्वस्थ राख्न र समग्र स्वास्थ्य तथा युवापनलाई बढावा दिन मद्दत गर्दछ।</li>
              <li><span className="font-bold">अल्कालिनिटी:</span> यो प्रशोधित पानीले शरीरमा भएको अत्यधिक एसिडको मात्रालाई कम गरी क्षारीय वा प्राकृतिक सन्तुलन कायम राख्न मद्दत गर्दछ।</li>
              <li><span className="font-bold">माइक्रो क्लस्टर:</span> मेसिनले पानीका अणुहरूलाई सानो समूहमा विभाजन गर्दछ, जसले गर्दा शरीरका कोषहरूमा सजिलै प्रवेश गर्न सक्छ। यसले कोषहरूमा अक्सिजनको मात्रा बढाउन, पोषक तत्वहरू पुर्‍याउन र अनावश्यक विषहरूलाई बाहिर निकाल्न मद्दत गर्दछ।</li>
            </ol>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              यस मेसिनबाट प्रशोधित पानी नियमित रूपमा पिउनाले शरीरलाई स्वस्थ अवस्थामा फर्काउन मद्दत गर्दछ। जापानी भाषामा "<span className="font-bold">कङ्गन</span>" को अर्थ "<span className="font-bold">पहिलाको अवस्थामा फर्कनु</span>" हुन्छ, र यो विश्वासमा आधारित छ कि यस पानीले शरीरलाई यसको प्राकृतिक, स्वस्थ अवस्थामा फर्काउन सहयोग गर्दछ।
            </p>
          </div>
           <div className="w-full md:w-1/2 px-4">
            <img src="/kangenmean.png" alt="पानीका विशेषताहरू" className="rounded-lg shadow-md" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0 order-2 md:order-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4">कङ्गन पानी पिउनाले हुने सम्भावित फाइदाहरू:</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
              <li>शरीरको आन्तरिक सफाई र नियमित दिसा।</li>
              <li>मजबुत प्रतिरक्षा प्रणाली।</li>
              <li>निष्क्रिय कोषहरूको सक्रियता।</li>
              <li>मिर्गौला समस्या भएकाहरूलाई फाइदाजनक।</li>
              <li>पाचन प्रणालीलाई बलियो बनाउन मद्दत।</li>
              <li>शरीरको सन्तुलन कायम राख्ने र एसिडजन्य विकारहरू हटाउने।</li>
              <li>कलेजोको स्वास्थ्यमा सुधार।</li>
              <li>ग्यास्ट्रिक र पेट सम्बन्धी समस्याहरूमा राहत।</li>
              <li>सुक्खा मुख र यूरिक एसिडको समस्यामा सुधार।</li>
              <li>पेटलाई स्वस्थ राख्ने।</li>
              <li>दीर्घ रोगहरूको गम्भीरता कम गर्ने सम्भावना।</li>
              <li>छातीको जलन, थकान, थाइराइड, क्यान्सर, कब्जियत, मुटु रोग र पक्षघात जस्ता समस्याहरूमा सुधार।</li>
              <li>शरीरमा भिटामिन र खनिजहरूको मात्रा बढाउने।</li>
              <li>शरीर भित्र जमेको एसिड जस्ता फोहोरहरू बाहिर निकाल्ने।</li>
              <li>कोलेस्ट्रोलको मात्रा घटाउने।</li>
              <li>घाउहरू चाँडै निको पार्ने।</li>
              <li>शरीरका विभिन्न भागहरूमा अक्सिजनको मात्रा पुर्‍याउने।</li>
              <li>पोषक तत्वहरूको राम्रो प्रसारण।</li>
              <li>श्वासप्रश्वास समस्या भएकाहरूलाई नियमित बनाउन मद्दत।</li>
              <li>कलिलै उमेरमा कपाल फुल्न नदिने।</li>
              <li>चाउरीपना जस्ता समस्याहरूबाट छुटकारा पाउन मद्दत।</li>
              <li>उच्च रक्तचाप, मधुमेह र इन्सुलिनको स्तरलाई सामान्य अवस्थामा फर्काउन मद्दत।</li>
            </ul>
          </div>
           <div className="w-full md:w-1/2 px-4 order-1 md:order-2">
            <img src="/micclus.png" alt="कङ्गन पानीका फाइदाहरू" className="rounded-lg shadow-md" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">कङ्गन पानीका विभिन्न प्रकार र तिनीहरूको प्रयोग:</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b font-bold text-gray-800">क्रम संख्या</th>
                  <th className="py-2 px-4 border-b font-bold text-gray-800">PH स्तर</th>
                  <th className="py-2 px-4 border-b font-bold text-gray-800">पानीको प्रकार</th>
                  <th className="py-2 px-4 border-b font-bold text-gray-800">प्रयोग</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b text-black">१</td>
                  <td className="py-2 px-4 border-b text-black">PH ८.५ / ९.० / ९.५</td>
                  <td className="py-2 px-4 border-b text-black">अल्कालाइन पानी</td>
                  <td className="py-2 px-4 border-b text-left text-black">दैनिक पिउने पानी, चिया, सुप बनाउन, खाना पकाउन (शुरुवातमा ८.५ PH को पानी पिउनुपर्ने र ७ देखि १० दिन पछि अरु लेबलको पानी पिउनु पर्दछ अनि ९.५ को पानी सधै पिउदा हुन्छ)।</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b text-black">२</td>
                  <td className="py-2 px-4 border-b text-black">PH ७.०</td>
                  <td className="py-2 px-4 border-b text-black">सफा पानी</td>
                  <td className="py-2 px-4 border-b text-left text-black">औषधि खादा यो पानी पिउन सकिन्छ र बच्चालाई दुध पाउडरमा मिलाएर खुवाउन सकिन्छ साथै बालबालिकाको मस्तिष्कको स्मरणशक्ति बढाउछ।</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b text-black">३</td>
                  <td className="py-2 px-4 border-b text-black">PH ६.०</td>
                  <td className="py-2 px-4 border-b text-black">ब्युटी वाटर</td>
                  <td className="py-2 px-4 border-b text-left text-black">यो पानी अनुहार धुन, दात ब्रस गर्न, तौलिया धुन र अनुहारको सुख्खापन हटाउन, चिल्लोपन नियन्त्रण गर्न अनि डण्डीफोहर हटाउन प्रयोग हुन्छ।</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b text-black">४</td>
                  <td className="py-2 px-4 border-b text-black">PH २.५</td>
                  <td className="py-2 px-4 border-b text-black">एसिडिक पानी</td>
                  <td className="py-2 px-4 border-b text-left text-black">शरीरमा आउने घाउ खटिरा, छालामा आउने दादमा स्प्रे द्वारा छर्कने र खेती-पातीमा लागेका किटाणु मार्न साथै घरको भान्सा र बाथारोम सफा गरि किटानु ब्याक्टेरिया मार्न प्रायो गरिन्छ।</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b text-black">५</td>
                  <td className="py-2 px-4 border-b text-black">PH ११.५</td>
                  <td className="py-2 px-4 border-b text-black">स्ट्रोङ अल्कालाइन पानी</td>
                  <td className="py-2 px-4 border-b text-left text-black">तरकारी, चामल, सागसब्जी, फलफुल, मासु, टमाटर आदिमा भएको केमिकल धोएर हटाइ पुरै अर्घानिक बनाउदछ।</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Know More
          </Link>
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
  src={`/${cards[i].img}`}  // assuming the images are inside the public/ folder
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
