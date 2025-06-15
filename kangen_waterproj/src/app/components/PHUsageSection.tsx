'use client';

import Image from 'next/image';
import Link from 'next/link';

const phData = [
  {
    title: 'pH8.5, 9.0, 9.5 - Healthy Alkaline Water\nDrinking and Cooking',
    description:
      'पिउनको गलि, खाना पकाउन, चिया, कफ्फि, सुप बनाउन्न Plants Flower मा राख्नको लागि, आयुर्वेदिक औषधी सेवन गर्न्नको लागि, Alcohol मा मिसाएर पिउनको लागि प्रयोग गरिन्छ ।',
    image: '/images/contentimg1.png',
    bgColor: 'bg-blue-50',
    titleBg: 'bg-blue-200',
  },
  {
    title: 'pH7.0 Clean Water\nBaby Formula and Medication',
    description:
      'आमाको दुध पिउने बच्चाहरुऒलाई पिलाउन र उनीहरुको खाना बनाउनको लागि प्रयोग गरिन्छ । एलोपेथिक औषधी सेवन गर्न का लागि पनि क्लीन Water को प्रयोग गरिन्छ ।',
    image: '/images/contentimg2.png',
    bgColor: 'bg-green-50',
    titleBg: 'bg-green-200',
  },
  {
    title: 'pH4.0-6.0 Beauty Water, Skin Tonner\nHair and Skin Care',
    description:
      'Skin, Face And Hair Care को लागि Skin Tonner को रूपमा प्रयोग गरिन्छ । यसको प्रयोगले अनुहारमा भएको चायाँ, पोतो, डण्डीफोर Open Pores, Dryness, Dark Circles जस्ता समस्यालाई नियंत्रण गरी प्राकृतिक चमकता ल्याउछ ।',
    image: '/images/contentimg3.png',
    bgColor: 'bg-yellow-50',
    titleBg: 'bg-yellow-200',
  },
  {
    title: 'pH2.5 Strong Acidic Water\nSanitary/Antiseptic',
    description:
      'शरीरमा आउने घाउखटिरा, चोटपटक, छालामा आउने घमौरा, दाद, Allergy Psoriasis, Eczema जस्तो Skin रोगहरुञ्छ प्रयोग गरिन्छ । यसले Antiseptic को रूपमा किटाणु, जीवाणु र फङ्गसलाई नष्ट गर्न सक्च ।',
    image: '/images/contentimg4.png',
    bgColor: 'bg-orange-50',
    titleBg: 'bg-orange-200',
  },
  {
    title: 'pH11.5 Strong Kangen Water®\nRemove Pesticides and Chemicals',
    description:
      'फलफूल, सागसब्जी, दाल, चामल आदिमा भएको Pesticides, Preservatives And Chemical Remove गर्न्नको लागि प्रयोग गरिन्छ । साथै क्यान्सर भएका बिरामीका कालगि डाक्टरको प्रोटोकोल अनुसार पिलाउन प्रयोग गरिन्छ ।',
    image: '/images/contentimg5.png',
    bgColor: 'bg-purple-50',
    titleBg: 'bg-purple-200',
  },
];

export default function PHUsageSection() {
  return (
    <section className="py-4 px-4 sm:px-16">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-900 mb-4">
        KANGEN WATER® केवल एक उत्पादन मात्र होइन, यो एक जिवनशैली क्रांति हो ।
      </h2>
      <h3 className="text-lg text-center font-semibold text-sky-700 mb-8">
        Kangen Water® Ionizer मेसिनबाट निस्कने फरक पानीको फरक प्रयोग
      </h3>

      <div className="space-y-6">
        {phData.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-lg overflow-hidden shadow-md border ${item.bgColor}`}
          >
            {/* Title */}
            <div className={`p-3 sm:p-4 ${item.titleBg}`}>
              <h4 className="text-base sm:text-lg font-semibold text-black whitespace-pre-line">
                {item.title}
              </h4>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-black text-[15px] sm:text-[16.5px] leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </div>
              <div className="shrink-0">
                <Image
                  src={item.image}
                  alt="Kangen water usage"
                  width={160}
                  height={120}
                  className="rounded-md object-cover w-[140px] h-[100px] sm:w-[160px] sm:h-[120px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-900 text-white text-center py-4 px-4 rounded-lg">
        <p className="text-md sm:text-lg font-bold">
          Revolutionize Your Lifestyle with Kangen Water®
        </p>
        <p className="text-sm">
          Kangen Water® Realizing True Health.
        </p>
        <Link href="/about">
          <span className="inline-block bg-white text-blue-900 font-semibold px-5 py-2 rounded hover:bg-blue-100 transition mt-2">
            Know More
          </span>
        </Link>
      </div>
    </section>
  );
}
