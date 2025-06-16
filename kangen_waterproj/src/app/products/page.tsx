"use client";
import { useState } from 'react';
import Image from 'next/image';

//defining products 
type Product = {
  name: string;
  img: string;
  features: string[];
  description: string;
  specs: string[][];
  images: string[];
};


const products: Product[] = [
  {
    name: 'LeveLuk SD 501',
    img: 'sd501.jpg',
    features: [
      '7 Platinum-Plated Titanium Plates',
      'Large LCD Panel and Voice Prompting',
      '1 High Grade Filter',
      '1 Cleaning Cartridge',
      'Electrolysis Enhancer',
      'Diverters',
      'Instruction Manuals',
      'Produces 5 Types of Water: Ionized Alkaline, Purified, Beauty Water, Strong Alkaline, Strong Acidic',
    ],
    description:
      'The LeveLuk SD 501 is the flagship model of the Kangen Water LeveLuk series. It’s built with longevity in mind and can run continuously for 30 minutes with its 7 platinum-coated titanium plates.',
    specs: [
      ['Power Voltage', 'AC 100V, 60Hz'],
      ['Power Consumption', '~ 230 W'],
      ['Built-in System', 'Built in Flow Rate Sensor'],
      ['5 Types of Water', 'Kangen, Clean, Acidic, Strong Alkaline, Strong Acidic'],
      ['Cleaning System', 'Automatic'],
      ['Electrode Plates', '7 (Platinum Coated Titanium)'],
    ],
    images: ['waterfilter.gif', 'working.jpg'],
  },
  {
  name: 'LeveLuk SD 501 Platinum',
  img: 'sd501p.jpg',
  features: [
    'Available in 5 Different Languages – English, German, French, Italian, Spanish',
    '7 Platinum-Plated Titanium Plates',
    'Large LCD Panel and Voice Prompting',
    '1 High Grade Filter',
    '1 Cleaning Cartridge',
    'Electrolysis Enhancer',
    'Diverters',
    'Instruction Manuals',
    'Produces 5 Types of Water: Ionized Alkaline Drinking Water, Purified Neutral Water, Acidic Water (Beauty Water), Strong Alkaline Water, Strong Acidic Water',
  ],
  description:
    'The LeveLuk SD 501 Platinum is an upgrade of the SD 501, which, much like its predecessor is designed with longevity and durability in mind. Its electrolysis chamber consists of 7 solid platinum-coated titanium plates that allow it to run continuously for 30 minutes. In addition to all the key features of the SD 501 however, the SD 501 Platinum is built with a platinum body to add a touch of modern elegance.\nMaintenance is also a breeze, with the built-in voice notification now being capable of speaking all notifications in five languages (English, German, French, Italian, Spanish). Make your kitchen the envy of your guests with the SD 501 Platinum!',
  specs: [
    ['Power Voltage', 'AC 100V, 60Hz'],
    ['Power Consumption', '~ 230 W'],
    ['Built-in System', 'Built-in Flow Rate Sensor'],
    [
      'Types of Water',
      'Kangen Water / 3 levels (pH 8.5-9.5), Clean Water (pH 7), Acidic Water (pH 5.5-6.5), Strong Acidic Water (pH 2.4-2.7), Strong Kangen Water (pH 11.0)',
    ],
    ['Cleaning System', 'Automatic cleaning system'],
    [
      'Electrolysis Enhancer',
      'Forced dissolving type additive system (One time addition produces approx. 1.0-1.3 gallons of Strong Acidic water.)',
    ],
    ['Electrode plates', '7'],
    ['Electrode material', 'Platinum Coated Titanium'],
  ],
  images: ['waterfilter.gif', 'working.jpg'],
},
  {
  name: 'LeveLuk JR IV',
  img: 'jr2.png',
  features: [
    '4 Platinum-Plated Titanium Plates',
    'Large LCD Panel',
    '1 High Grade Filter',
    '1 Cleaning Cartridge',
    'Electrolysis Enhancer',
    'Diverters',
    'Instruction Manuals',
    'Produces 5 Types of Water: Strong Kangen Alkaline water, Ionized Alkaline Drinking Water, Purified Neutral Water, Acidic Water (Beauty Water), Strong Acidic Water',
  ],
  description:
    'The JRIV has four solid electrode plates, which reduces the energy consumption. Due to the lower power consumption and fewer plates, this machine is considered one of Enagic’s “starter” models. Generates: Strong Kangen Water, Kangen Water®, Neutral Water, Beauty Water, and Strong Acidic Water. With just a touch of a button, you can have access to any of the 4 waters you choose. Your machine will confirm the water you have selected and in moments the machine will generate healthy, ionized water. Your JRIV will even notify you when it’s time to change the water filter via a message on the LCD Panel and a buzzer sound.The JRIV has four solid electrode plates which reduces the energy consumption. Due to the solid platinum-coated titanium plates, this unit can still produce the strong acid and strong Kangen waters. Due to the lower power consumption and fewer plates, this machine is only recommended for singles or couples. The built-in tank for the electrolysis enhancer saves you the trouble of putting in the electrolysis enhancer which is necessary to obtain strong acid water and strong Kangen Water, and allows you to produce those kinds of water steadily and continuously that has excellent effects.',
  specs: [
    ['Power Voltage', 'AC 100V, 50/60Hz'],
    ['Power Consumption', '~ 120 W'],
    ['Built-in System', 'Built-in Flow Rate Sensor'],
    [
      '5 Types of Water',
      'Kangen Water / 3 levels (pH 8.5-9.5), Clean Water (pH 7), Acidic Water (pH 5.5-6.5), Strong Acidic Water (pH 2.4-2.7), Strong Kangen Water (pH 11.0)',
    ],
    ['Electrolysis Enhancer', 'Solution additive pump system'],
    ['Cleaning System', 'Automatic cleaning system'],
    ['Electrode plates', '4'],
    ['Electrode material', 'Platinum Coated Titanium'],
  ],
  images: ['waterfilter.gif', 'working.jpg'],
},
 {
  name: 'LeveLuk Super 501',
  img: 'super501.jpg',
  features: [
    '12 Platinum-Plated Titanium Plates',
    'Twin Hose System',
    'Large LCD Panel and Voice Prompting',
    'Built-in Tank for Electrolysis Enhancer',
    'Water Pressure Regulating Function',
    'Instruction Manuals',
    'Produces 5 Types of Water: Ionized Alkaline Drinking Water, Purified Neutral Water, Acidic Water (Beauty Water), Strong Alkaline Water, Strong Acidic Water',
  ],
  description:
    'Built for heavy usage in medium to large households, offices or your business premises, the LeveLuk Super 501 houses a total of 12 electrode plates, and comes with all the bells and whistles of the SD 501.\nThe Super 501 is unique in its ability to produce Strong Acidic Water and Strong Kangen Water quickly and efficiently, making this invaluable for large families that frequently use Kangen Water for cleaning and sanitisation.',
  specs: [
    ['Water Dispensing Feature', 'Twin Hose, 1 Way Diverter'],
    ['Power Voltage', 'AC 100V, 60Hz'],
    ['Power Consumption', '~ 230 W'],
    ['Built-in System', 'Built-in Flow Rate Sensor'],
    [
      'Dispensing Flow Rate (Kangen Water)',
      '1.3-2.1 (flexible right pipe)',
    ],
    [
      'Dispensing Flow Rate (Acidic water)',
      '0.5-0.75 (secondary white pipe)',
    ],
    [
      '5 Types of Water',
      'Kangen Water / 3 levels (pH 8.5-9.5), Clean Water (pH 7), Acidic Water (pH 5.5-6.5), Strong Acidic Water (pH 2.4-2.7), Strong Kangen Water (pH 11.0)',
    ],
    ['Cleaning System', 'Automatic cleaning system'],
    [
      'Electrolysis Enhancer',
      'Forced dissolving type additive system (One time addition produces approx. 1.0-1.3 gallons of Strong Acidic water.)',
    ],
    ['Electrode plates', '12'],
    ['Electrode material', 'Platinum Coated Titanium'],
  ],
  images: ['waterfilter.gif', 'super501-scale.jpg'],
},
 {
  name: 'Kangen 8',
  img: 'k8.jpg',
  features: [
    '8 Platinum-Plated Titanium Plates',
    'Large Colour LCD Panel and 8-Language Voice Prompting',
    'Touch Panel for Easy Operation',
    '1 High Grade Filter',
    '1 Cleaning Cartridge',
    'Electrolysis Enhancer',
    'Diverters',
    'Smart Filter',
    'Energy Saving',
    'Multi Voltage Input for Global Use',
    'Elegant White for Kitchen Match',
    'Instruction Manuals',
    'Produces 5 Types of Water: Ionized Alkaline Drinking Water, Purified Neutral Water, Acidic Water (Beauty Water), Strong Alkaline Water, Strong Acidic Water',
  ],
  description:
    'Stop oxidation in its tracks! The Kangen K8 is an antioxidant machine, and with its 8 solid platinum-dipped titanium plates the Kangen K8 is able to produce water with a higher oxidation reduction potential (ORP) than any other water ionizer in the LeveLuk series!\nThe Kangen K8 comes with all the features of the SD 501, and in addition contains a multi-voltage power supply that allows your Kangen K8 to accept power sources all over the world.',
  specs: [
    ['Power Voltage', 'AC 100V, 60Hz'],
    ['Power Consumption', '~ 230 W'],
    ['Built-in System', 'Built-in Flow Rate Sensor'],
    [
      'Dispensing Flow Rate (Kangen Water)',
      '1.2-2.0',
    ],
    [
      'Dispensing Flow Rate (Acidic water)',
      '0.4-0.7',
    ],
    [
      'Dispensing Flow Rate (Strong Acidic water)',
      '0.16-0.35',
    ],
    [
      '5 Types of Water',
      'Kangen Water / 3 levels (pH 8.5-9.5), Clean Water (pH 7), Acidic Water (pH 5.5-6.5), Strong Acidic Water (pH 2.4-2.7), Strong Kangen Water (pH 11.0)',
    ],
    ['Cleaning System', 'Automatic cleaning system'],
    [
      'Electrolysis Enhancer',
      'Forced dissolving type additive system (One time addition produces approx. 1.0-1.3 gallons of Strong Acidic water.)',
    ],
    ['Electrode plates', '8'],
    ['Electrode material', 'Platinum Coated Titanium'],
  ],
  images: ['waterfilter.gif', 'working.jpg'],
},
 
 {
  name: 'Kangen Ukon',
  img: 'ukon.jpg',
  features: [
    'Patented Innovative Process',
    '100% plant-based, vegan-friendly',
    '100% free of harmful chemicals',
    'Refined and Concentrated Essential Oils',
    'Organically Grown on Dedicated Farms with Rich Soil in Yanbaru, Okinawa',
  ],
  description:
    'Kangen Ukon is derived from wild turmeric and enriched with high quality essential oils. Using an innovative patented process, each individually enclosed Kangen Ukon capsule stays preserved until consumption, instead of being oxidized upon opening the bottle.\nUkon is 100% plant-based, vegan-friendly, and contains no animal products. Ukon is also organically grown on dedicated farms in Yanbaru, Okinawa, Japan, and is 100% free of harmful chemicals used in conventional turmeric farming. The soil there is also rich and densely nutritious.',
  specs: [
    ['Main Ingredient', 'Wild Turmeric'],
    ['Enrichment', 'High Quality Essential Oils'],
    ['Process', 'Patented Innovative Process for Preservation'],
    ['Dietary Information', '100% Plant-Based, Vegan-Friendly, No Animal Products'],
    ['Cultivation', 'Organically Grown in Yanbaru, Okinawa, Japan'],
    ['Free Of', 'Harmful Chemicals'],
  ],
  images: ['ukon.jpeg','ukon2.jpg','ukon3.png'],
},
{
  name: 'Anespa',
  img: 'anespa.jpg',
  features: [
    'Multistage Activated Carbon Filter',
    'Neodymium Magnet',
    'Ceramic Cartridge',
    'Instruction Manuals',
    'Natural Hot Spring Ingredients and Minerals: Tufa, MIC Stone, Power Stone',
  ],
  description:
    'ANESPA allows you to experience the health benefits and relaxing effect of Japan’s famous hot springs every day from your own shower!\nANESPA filters out contaminants like chlorine, forms micro-clusters in the water and then adds a blend of natural hot spring ingredients and minerals into your shower, resulting in water that’s free of harmful impurities yet rich in natural hot spring ingredients – to protect your skin as you relax in your shower!',
  specs: [
    ['Water Source Connection Type', 'Closed Water Supply Plug'],
    ['System', 'Mineral Ion Water Activator'],
    ['Flow Rate', '2.6 – 4.0 gallons/min'],
  ],
  images: ['anespa-dx.jpg'],
},
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<'specs' | 'images'>('specs');

  return (
    <main className="py-20 px-6 bg-white min-h-screen relative">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Our Products</h1>
        <p className="text-lg text-gray-700 mb-10">
          Explore our range of premium Kangen Water machines and wellness products.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-blue-50 p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={() => {
                setSelectedProduct(product);
                setActiveTab('specs');
              }}
            >
              <div className="h-40 bg-white rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                <Image
                  src={`/Productimages/${product.img}`}
                  alt={product.name}
                  width={300}
                  height={160}
                  className="object-contain rounded"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-700">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white max-w-4xl w-full rounded-xl p-6 relative overflow-y-auto max-h-[95vh]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-2xl font-bold text-gray-700 hover:text-red-500"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-blue-700 mb-4">{selectedProduct.name}</h2>

            {/* Image and Features side by side */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <Image
                  src={`/Productimages/${selectedProduct.img}`}
                  alt={selectedProduct.name}
                  width={500}
                  height={300}
                  className="rounded-lg object-contain w-full"
                />
              </div>
              <ul className="flex-1 list-disc text-sm text-gray-700 space-y-1 pl-5">
                {selectedProduct.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-4">{selectedProduct.description}</p>

            {/* Tabs */}
            <div className="flex gap-4 border-b border-gray-300 mb-4">
              <button
                className={`py-2 px-4 text-sm font-medium ${
                  activeTab === 'specs' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600'
                }`}
                onClick={() => setActiveTab('specs')}
              >
                Specifications
              </button>
              <button
                className={`py-2 px-4 text-sm font-medium ${
                  activeTab === 'images' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600'
                }`}
                onClick={() => setActiveTab('images')}
              >
                Physical Details
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'specs' && selectedProduct.specs.length > 0 && (
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full text-sm text-left text-gray-600 border border-gray-300">
                  <tbody>
                    {selectedProduct.specs.map(([label, value], i) => (
                      <tr key={i}>
                        <td className="border px-4 py-2 font-semibold">{label}</td>
                        <td className="border px-4 py-2">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'images' && selectedProduct.images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {selectedProduct.images.map((img, idx) => (
                  <Image
                    key={idx}
                    src={`/Productimages/${img}`}
                    alt={`Image ${idx + 1}`}
                    width={500}
                    height={300}
                    className="rounded-lg object-contain w-full"
                  />
                ))}
              </div>
            )}

            {/* Order Now */}
            <div className="text-center mt-6">
              <a
                href="/buy"
                className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
