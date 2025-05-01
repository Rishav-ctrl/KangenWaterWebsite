import Image from 'next/image';
import PhSlider from '@/components/PhSlider';
import Antioxidant from '@/components/Antioxidant';
import Link from 'next/link';

export default function ScienceSection() {
  return (
    <section id="science" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Kangen Water का 3 अद्भुत Properties!
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Antioxidant power, Alkalinity, र Micro-Clustered Molecules ले तपाईंको स्वास्थ्यलाई नयाँ उचाइमा पुर्याउँछ। जानौं कसरी!
          </p>
       
        </div>

        {/* Core Properties Section */}
        <div id="core-properties" className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {/* Antioxidant */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">🛡️ Antioxidant Power (Negative ORP)</h3>
            <p className="text-gray-700 mb-4">
              <strong>Free Radicals</strong> ले शरीरमा oxidation बढाउँछन् जसले aging र disease ल्याउँछ।<br />
              <strong>Kangen Water</strong> को Negative ORP (~ -470) ले यो oxidation process लाई slow गर्छ।
            </p>
            <p className="text-gray-600 italic">
              "जसरी काटेको स्याउ चाँडै खैरो हुन्छ (oxidation), हाम्रो छाला पनि बिस्तारै aging गर्छ। Kangen Water को antioxidants ले यो गति कम गर्छ।"
            </p>
            <div className="mt-4 flex justify-center">
              <Image src="/aging.png" alt="Oxidation Example" width={300} height={200} />
            </div>
          </div>

          {/* Alkalinity */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">⚖️ Alkalinity</h3>
            <p className="text-gray-700 mb-4">
              अधिकांश रोगहरू acidic शरीरमा फस्टाउँछन्। Kangen Water ले तपाईंको शरीरलाई alkaline राख्न मद्दत गर्छ।
            </p>
            <p className="text-gray-600 italic mb-3">
              “Disease cannot thrive in an alkaline body.” — Dr. Otto Warburg
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="font-semibold text-sm mb-2 text-black">Acidic vs Alkaline Foods</p>
              <ul className="text-sm text-gray-700">
                <li><strong>Acidic:</strong> Soda, Red Meat, Fried Foods</li>
                <li><strong>Alkaline:</strong> Vegetables, Fruits, Kangen Water</li>
              </ul>
              <div className="mt-4">
                <Image src="/acidalk.png" alt="pH Scale" width={500} height={100} />
              </div>
            </div>
          </div>

          {/* Micro-Clustering */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">💧 Micro-Clustering</h3>
            <p className="text-gray-700 mb-4">
              साधारण पानीमा ठूलो molecular cluster हुन्छ (~15-20 molecules), Kangen Water मा सानो (~5-6 molecules)।
            </p>
            <ul className="text-sm text-gray-700 list-disc pl-5 mb-4">
              <li>छिटो Absorption</li>
              <li>Deep Hydration</li>
              <li>Boosted Stamina and Focus</li>
            </ul>
            <p className="text-gray-600 italic">
              "Nepali मा भनौं भने, Kangen पानी 'हल्का' लाग्छ र छिट्टै पिउँदा energy दिन्छ!"
            </p>
            <div className="mt-4">
              <Image src="/microclustering.png" alt="Water Molecule Clusters" width={300} height={500} />
            </div>
          </div>
        </div>

        {/* Sliders Section */}
        <div className="mb-20">
          <div className="mb-14">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">pH Level अनुसार पानीको प्रभाव जान्नुहोस्!</h2>
            <p className="text-center text-gray-700 mb-6">pH 2.5 देखि pH 11.0 सम्मका फरक-फरक पानीका गुणहरू।</p>
            <div className="max-w-2xl mx-auto">
              <PhSlider />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">ORP Level ले के असर गर्छ?</h2>
            <p className="text-center text-gray-700 mb-6">Higher Negative ORP = Higher Antioxidant Power = Better Protection!</p>
            <div className="max-w-2xl mx-auto">
              <Antioxidant />
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg mb-20">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Free Radicals vs Antioxidants</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-200">
              <thead>
                <tr className="bg-blue-100">
                  <th className="px-4 py-2 text-black">Free Radicals (Bad)</th>
                  <th className="px-4 py-2 text-black">Antioxidants (Good)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="px-4 py-2 border">Promote Aging</td>
                  <td className="px-4 py-2 border">Fight Aging</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Cause DNA Damage</td>
                  <td className="px-4 py-2 border">Repair Cells</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Increase Disease Risk</td>
                  <td className="px-4 py-2 border">Strengthen Immunity</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Found in Pollution, Smoke</td>
                  <td className="px-4 py-2 border">Found in Fruits, Kangen Water</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Kangen Water — Natural Source of Antioxidants to protect you from Free Radical damage.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            अब तपाईंले बुझ्नुभयो किन Kangen Water स्वास्थ्यको लागि अद्भुत हो! 🌟
          </h2>
          <Link href="#contact">
            <button className="mt-4 px-8 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition">
              Get Your Kangen Machine Now!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}