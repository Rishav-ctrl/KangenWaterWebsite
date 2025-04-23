import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="pt-0">
      {/* Hero Section */}
      <section className="relative bg-blue-100 overflow-hidden">
        <div className="container mx-auto text-center py-32 md:py-48">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-6">
           Kangen Water Nepal
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
           Change Your Water, Change Your Life ! 
          </h1>
          <p className="text-lg md:text-xl text-teal-600 mb-8">
            Experience enhanced hydration, vital minerals, and potential health benefits with every sip.
          </p>
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full text-lg">
            Discover Kangen Water
          </button>
        </div>

        {/* Water Wave Image Below the Content */}
        <div className="w-full">
          <Image
            priority
            src="/secwave.png"
            alt="Gentle water waves flowing"
            width={1920}
            height={200}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-blue-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-700 mb-6">The Amazing Benefits</h2>
            <p className="text-lg text-teal-600 mb-8">
              From superior hydration to antioxidant properties, see how alkaline water can enhance your well-being.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">Enhanced Hydration for cellular health</li>
              <li className="mb-2">Rich in Antioxidants to combat free radicals</li>
              <li className="mb-2">Supports pH Balance for overall wellness</li>
              <li className="mb-2">May boost energy levels and focus</li>
            </ul>
          </div>
          <div>
            <Image
              src="/alkaline-water-glass.png"
              alt="Refreshing glass of alkaline water"
              width={700}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Science of pH Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/ph-scale.png"
              alt="Infographic illustrating the pH scale"
              width={700}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-teal-700 mb-6">Understanding the Power of pH</h2>
            <p className="text-lg text-gray-700 mb-8">
              Alkaline water with a pH between 8 and 9.5 can help your body maintain a crucial acid-alkaline balance for optimal health.
            </p>
            <p className="text-gray-700">
              Learn how this subtle difference can lead to significant wellness advantages.
            </p>
          </div>
        </div>
      </section>

      {/* Experience the Difference Section */}
      <section className="py-20 md:py-28 bg-blue-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-700 mb-6">Feel the Difference</h2>
            <p className="text-lg text-teal-600 mb-8">
              Many users report increased vitality and a greater sense of well-being after switching to alkaline water.
            </p>
            <p className="text-gray-700">
              Discover the positive impact it can have on your daily life.
            </p>
          </div>
          <div>
            <Image
              src="/bottle.png"
              alt="Sleek water bottle filled with pure water"
              width={700}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Riya Sharma',
                text: 'Kangen Water has changed my life! I feel more energetic and fresh throughout the day.'
              },
              {
                name: 'Aarav Joshi',
                text: 'Never thought water could make such a difference. Highly recommend it to everyone!'
              },
              {
                name: 'Priya Thapa',
                text: 'Even my skin feels better now. Love this water!'
              }
            ].map((t, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl shadow">
                // eslint-disable-next-line react/no-unescaped-entities
                <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                <p className="text-blue-700 font-semibold">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Slider Section */}
      <section className="py-20 bg-gradient-to-r from-blue-200 to-teal-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Ready to Make the Switch?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
            Experience the purity and benefits of alkaline water with Kangen. Join thousands who already made the change.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full text-lg">
            Get Yours Now
          </button>
        </div>
      </section>
    </main>
  );
}
