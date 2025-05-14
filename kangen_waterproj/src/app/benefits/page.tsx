"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const benefits = [
 
  {
    title: "Better hydration",
    image: "hydration.jpeg", 
    description: `Kangen Water ले दिएको hydration अरू normal पानी भन्दा far better हुन्छ। यसको कारण हो – यो पानी ionize भएर साना साना molecules मा change हुन्छ (4-6 molecules per cluster)। यसले गर्दा हाम्रो body ले यो पानी छिट्टै absorb गर्न सक्छ, जसले गर्दा शरीर hydrated र active रहन्छ – without feeling bloated, even if you drink 8 glasses a day.

आम पानी पिउँदा कहिलेकाहीं पेट भारी हुने, puffiness हुने जस्तो लाग्न सक्छ, तर Kangen Water ले यस्तो feeling minimize गर्छ।

Hydration मात्र तिर्खा मेटाउने कुरा होइन – यो energy, skin को glow, digestion, र हाम्रो body system smoothly चलाउनको लागि एकदमै important हुन्छ।`,
  },
  {
    title: "Antioxidant boost",
    image: "oxidative.png",
    description: `Kangen Water मा negative ions हुन्छन्, जसलाई antioxidants पनि भनिन्छ। यी antioxidants ले शरीरभित्र भएका free radicals लाई neutralize गर्न मद्दत गर्छन्। Free radicals भनेको त्यस्ता हानिकारक तत्व हुन्, जुन aging, skin dullness, थकान, अनि दीर्घ रोगहरूको मुख्य कारण बन्न सक्छ।`,
  },
  {
    title: "Detoxification",
    image: "detox.png",
    description: `Kangen Water को micro-clustered structure र antioxidant गुणले मिलेर शरीरबाट toxins हटाउन सजिलो बनाउँछ। यो पानीले cells सम्म छिटो पुगेर waste materials लाई flush out गर्न मद्दत गर्छ।`,
  },
  {
    title: "Glowing skin",
    image: "glowskin.png",
    description: `Kangen Water, especially यसको slightly acidic “Beauty Water” (pH 5.5–6), छालाको लागि धेरै फाइदाजनक मानिन्छ। Healthy skin को natural pH पनि लगभग 5.5 नै हुने भएकाले, यो पानीले तपाईंको skin को pH balance restore गर्छ, जसले गर्दा dryness, irritation, र pimples कम हुन्छन्। यसको micro-clustered structure ले पानीलाई छालामा deep absorb गर्न मद्दत गर्छ, जसले skin लाई soft, plump, hydrated र glowing बनाउँछ। Fine lines र wrinkles कम देखिन्छन्। Kangen Water मा हुने molecular hydrogen एक powerful antioxidant हो, जसले free radicals लाई neutralize गरेर aging slow गर्छ र skin elastic बनाउँछ, youthful look दिन्छ। Beauty Water लाई gentle cleanser वा toner को रूपमा प्रयोग गर्दा impurities हट्छन् तर skin को natural oil भने बचेर रहन्छ, जसले skin लाई clean, fresh र irritation-free राख्छ। Regular प्रयोग गर्दा dark spots कम हुन्छन्, pigmentation हल्का हुन्छ, र complexion साफ देखिन्छ। साथै, यो पानीले oil production balance गरेर acne को risk पनि घटाउँछ। तपाईंले यसलाई facial mist, toner, makeup remover, वा bath soak को रूपमा पनि use गर्न सक्नुहुन्छ for all-day skin hydration र glow।

`,
  },
  {
    title: "Enhanced energy",
    image: "energy.png",
    description: `Kangen Water को मुख्य फाइदामध्ये एक हो – Enhanced Energy. यसको micro-clustered structure भएकोले पानी छिटो र गहिरो रुपमा body ले absorb गर्छ, जसले गर्दा cells-level hydration मिल्छ र तपाईंलाई energetic feel हुन्छ। हल्का dehydration पनि fatigue को कारण बन्न सक्छ, त्यसैले राम्रो hydration energy को लागि बहुत जरूरी हो। Kangen Water को pH level alkaline (8.5–9.5) हुने भएकाले यसले शरीरको acidity लाई neutralize गर्न मद्दत गर्छ, जसले धेरैलाई active र कम sluggish feel गराउँछ। साथै, यसमा हुने molecular hydrogen एक powerful antioxidant हो, जसले oxidative stress कम गर्छ – जुन थकानको एक major कारण हो। Molecular hydrogen ले metabolism boost गर्छ, mitochondria (energy factories of cells) लाई support गर्छ, र physical recovery पनि fast बनाउँछ। यसले inflammation कम गर्न मद्दत गर्छ, जसले शरीरलाई long-lasting energy दिन सहयोग पुर्याउँछ। यिनै कारणहरूले गर्दा धेरै user हरूले Kangen Water पिएपछि आफ्नो energy level बढेको महसुस गरेका छन्।`,
  },
];

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Benefits of Kangen Water</h2>
        <p className="text-lg text-gray-600 mb-10">
          Learn about how this water supports your wellness journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer border rounded-xl shadow hover:shadow-lg transition p-2"
            >
              <div className="relative w-full h-56 rounded-lg overflow-hidden mb-4">
                <Image
                  src={`/genimgs/${benefit.image}`}
                  alt={benefit.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black">{benefit.title}</h3>
              <p className="text-sm text-gray-500 mt-2">Click to view more</p>
            </div>
          ))}
        </div>

        {activeIndex !== null && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-xl w-full p-6 relative">
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-4xl font-bold text-blue-700 mb-4">
                {benefits[activeIndex].title}
              </h3>
              <p className="text-gray-700 whitespace-pre-line">
                {benefits[activeIndex].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
   
  );
}
