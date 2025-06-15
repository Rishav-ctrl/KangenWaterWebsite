'use client';
import React from 'react';

const EngPH1: React.FC = () => {
  const sections = [
    {
      title: 'STRONG KANGEN WATER\u2122',
      ph: 'Greater than pH11.0',
      color: 'bg-blue-800',
      merit_title : '',
      merits: 'Remove Pesticides, preservatives and chemical (rinsing with acidic water can prevent food poisoning). Food will be more umami and delicious after washing with Strong Kangen Water.',
      uses: [
        { title: 'Pre-boil vegetables', desc: 'Enhance the flavor of burdock, onions, bamboo shoots, etc.' },
        { title: 'Blanch vegetables', desc: 'Blanch spinach, soybeans, and other leafy vegetables.' },
        { title: 'Cleaning various items', desc: 'Effective for vegetables, fish, cutting boards, dishcloths.' },
        { title: 'Cleaning', desc: 'Good for oil, grime, vents, toilets, kitchen, and floors.' }
      ]
    },
    {
      title: 'ALKALINE KANGEN WATER\u2122',
      ph: 'pH8.5 - pH9.5',
      color: 'bg-blue-500',
      merit_title : 'THE BENEFITS OF KANGEN WATER',
      merits: 'It is recommended to drink Kangen Water\u00ae daily, which is rich in minerals and active hydrogen, which can effectively eliminate the main sources of human diseases: acids and active oxygen free radicals. Long-term drinking can help to prevent and treat diseases.',
      uses: [
        { title: 'Use as drinking water', desc: 'Drink two to three cups of water in the morning. Compared to tap water, Kangen Water\u2122 has no unpleasant odor, tastes lighter, and has a pleasantly sweet flavor.' },
        { title: 'To prevent hangovers, drink before going to bed', desc: 'Drink two to three cups to reduce the symptoms of hangovers.' },
        { title: 'Use when brewing green tea, coffee, and English tea', desc: 'Green tea: Prevents tannin and gives rich color. Coffee: Improves aroma and color. English tea: For mild taste and rich color.' },
        { title: 'Add to whiskey or make ice cubes', desc: 'Diluting whiskey with alkaline Kangen Water\u2122 helps prevent hangovers.' },
        { title: 'Use heated Kangen Water\u2122 with beer and spirits', desc: 'Add 5-20% Kangen Water\u2122 to beer for a milder taste.' },
        { title: 'When preparing soups', desc: 'Draws out the flavor even with less seasoning.' },
        { title: 'Pre-boil vegetables', desc: 'Enhance flavor of burdock, onions, bamboo shoots, etc.' },
        { title: 'Blanch green vegetables', desc: 'Preserves vibrant green color of spinach, string beans, broccoli.' },
        { title: 'Soak liver and meats', desc: 'Reduces blood and odor when soaked 20-30 minutes.' },
        { title: 'Boiled foods', desc: 'Natural flavor is drawn out, cooks tender, needs less seasoning.' },
        { title: 'Water plants and flowers', desc: 'Extends freshness and restores health (pH 9.0).' },
        { title: 'Germinate seeds and water new plants', desc: 'Stimulates germination and improves growth.' },
        { title: 'As drinking water for pets', desc: 'Improves health and reduces body odor and waste smell.' },
        { title: 'Maintain good health', desc: 'Gradually shifts body to alkaline, improves calcium levels and child health.' }
      ]
    },
    
    {
      title: 'BEAUTY WATER',
      ph: 'pH4.0 - pH6.5',
      color: 'bg-yellow-500',
      merit_title : 'THE MERITS OF BEAUTY WATER',
      merits: 'The astringent effects can tighten skin pores and moisturize. Adding bath water when taking a shower can promote body insulation. Use as a conditioner when shampooing for smooth, shiny hair and pet care.',
      uses: [
        {
          title: 'For washing your face',
          desc: 'The astringent properties of acidic water are effective in toning and firming your skin. Pat the skin and leave it to dry. Also excellent as a toner after shaving.'
        },
        {
          title: 'Hair care',
          desc: 'Use instead of rinse after shampooing. Reduces annoying tangles and brings out a radiant shine.'
        },
        {
          title: 'Pet care',
          desc: 'Great for grooming your pet. Brush with acid water to obtain soft and shiny fur.'
        },
        {
          title: 'For cooking beans',
          desc: 'Various types of beans such as kidney beans and green peas will cook to perfection. Since using acidic water will speed up cooking time, take care not to over cook.'
        },
        {
          title: 'For boiling eggs',
          desc: 'Even if the egg cracks during cooking, the egg yolk will not leak out of the shell into the water. The eggshells also peel off very easily.'
        },
        {
          title: 'For frozen foods',
          desc: 'Spray foods with acidic water when freezing so that the food, including fish and shrimp, do not lose their flavor when thawed.'
        },
        {
          title: 'For polishing',
          desc: 'Polish mirrors, eyeglasses, glass objects and windows as well as knife sharpeners to a high sheen.'
        },
        {
          title: 'Add to bath water',
          desc: 'Add acidic water to your bath water to keep your tub free of bathtub rings. Bathing in this water warms the body and keeps skin beautiful.'
        }
      ]
    },
    {
      title: 'STRONG ACIDIC WATER',
      ph: 'Lower than pH2.7',
      color: 'bg-orange-500',
      merit_title : 'THE MERITS OF STRONG ACIDIC WATER',
      merits: 'Strong acidic water was approved for disinfecting food products in June 2002, in accordance with Food Hygiene Law, under the name hypochlorous acid water. It is now used for a wide range of applications, including the cleaning and disinfecting of foods and cooking facilities.',
      uses: [
        {
          title: 'For cleaning foods',
          desc: 'When cleaning with strong acidic electrolyzed water, it is important to keep the water running as the available chlorine will lose effect quite quickly.'
        },
        {
          title: 'To disinfect utensils',
          desc: 'Use a separate utensil depending on the particular use. Rinse and allow to dry thoroughly.'
        },
        {
          title: 'Hand washing before cooking',
          desc: 'Wash hands carefully, then rinse with running strong acidic electrolyzed water to disinfect.'
        },
        {
          title: 'Preparation and usage',
          desc: 'Follow the recommended procedure using chlorine reagent. Ensure proper unit cleaning and allow drying after rinsing with strong acidic water.'
        }
      ]
    },
    
  ];

  return (
  <div className="py-4 px-4 sm:px-16 text-gray-800">
    <div className="space-y-10"> {/* <-- Changed from space-y-16 */}
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className={`text-white px-6 py-3 rounded-xl shadow-lg text-lg sm:text-xl font-bold ${section.color}`}>
              {section.title}<br /><span className="text-l font-normal">{section.ph}</span>
            </div>
            <div className="mt-6 border border-blue-800 rounded-xl p-4 text-blue-800 bg-blue-50 max-w-xl">
              <h3 className="text-lg sm:text-xl font-bold mb-1">{section.merit_title}</h3>
              <p className="text-sm sm:text-base">{section.merits}</p>
            </div>
          </div>

          <ul className="space-y-4 list-inside text-sm sm:text-base">
            {section.uses.map((item, i) => (
              <li key={i} className="ml-2">
                <p className="font-semibold text-blue-900">{item.title}</p>
                <p className="text-gray-700">{item.desc}</p>
              </li>
            ))}
          </ul>

          {section.title === 'ALKALINE KANGEN WATER™' && (
            <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-800 font-semibold rounded">
              Other uses: Slows down aging, stabilizes body temperature. One theory is that water reduced free radicals. Recently, this water has been acclaimed as "Free Radical Water."
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
return (
  <div className="py-4 px-4 sm:px-16 bg-white text-gray-800">
    <div className="space-y-10"> 
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className={`text-white px-6 py-3 rounded-xl shadow-lg text-lg sm:text-xl font-bold ${section.color}`}>
              {section.title}<br /><span className="text-l font-normal">{section.ph}</span>
            </div>
            <div className="mt-6 border border-blue-800 rounded-xl p-4 text-blue-800 bg-blue-50 max-w-xl">
              <h3 className="text-lg sm:text-xl font-bold mb-1">{section.merit_title}</h3>
              <p className="text-sm sm:text-base">{section.merits}</p>
            </div>
          </div>

          <ul className="space-y-4 list-inside text-sm sm:text-base">
            {section.uses.map((item, i) => (
              <li key={i} className="ml-2">
                <p className="font-semibold text-blue-900">{item.title}</p>
                <p className="text-gray-700">{item.desc}</p>
              </li>
            ))}
          </ul>

          {section.title === 'ALKALINE KANGEN WATER™' && (
            <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-800 font-semibold rounded">
              Other uses: Slows down aging, stabilizes body temperature. One theory is that water reduced free radicals. Recently, this water has been acclaimed as "Free Radical Water."
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
return (
  <div className="py-4 px-4 sm:px-16 text-gray-800">
    <div className="space-y-5"> 
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className={`text-white px-6 py-3 rounded-xl shadow-lg text-lg sm:text-xl font-bold ${section.color}`}>
              {section.title}<br /><span className="text-l font-normal">{section.ph}</span>
            </div>
            <div className="mt-6 border border-blue-800 rounded-xl p-4 text-blue-800 bg-blue-50 max-w-xl">
              <h3 className="text-lg sm:text-xl font-bold mb-1">{section.merit_title}</h3>
              <p className="text-sm sm:text-base">{section.merits}</p>
            </div>
          </div>

          <ul className="space-y-4 list-inside text-sm sm:text-base">
            {section.uses.map((item, i) => (
              <li key={i} className="ml-2">
                <p className="font-semibold text-blue-900">{item.title}</p>
                <p className="text-gray-700">{item.desc}</p>
              </li>
            ))}
          </ul>

          {section.title === 'ALKALINE KANGEN WATER™' && (
            <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-800 font-semibold rounded">
              Other uses: Slows down aging, stabilizes body temperature. One theory is that water reduced free radicals. Recently, this water has been acclaimed as "Free Radical Water."
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
};

export default EngPH1;
