import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-blue-100 py-24 md:py-48 overflow-hidden">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-8">Unlock the Power of Alkaline Water</h1>
          <p className="text-lg md:text-xl text-teal-600 mb-10">
            Experience enhanced hydration, vital minerals, and potential health benefits with every sip.
          </p>
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full text-lg">
            Discover Kangen Water
          </button>
        </div>

        {/* Water Wave Image */}
        <div className="absolute bottom-0 left-0 right-0">
          <Image
            priority
            src="/wave.png" 
            alt="Gentle water waves flowing"
            width={1920}
            height={300}
            className="w-full object-cover opacity-70"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-blue-50">
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
              src="/alkaline-water-glass.png" // Replace with your image path in the public folder
              alt="Refreshing glass of alkaline water"
              width={700}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Science of pH Section */}
      <section className="py-16 md:py-24 bg-white">
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
      <section className="py-16 md:py-24 bg-blue-50">
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
    </main>
  );
}