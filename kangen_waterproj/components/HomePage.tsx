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
          <h3 className="text-xl md:text-3xl font-bold text-black mb-6">
           Change Your Water, Change Your Life ! 
          </h3>
          <p className="text-lg md:text-xl text-teal-600 mb-8 text - italic">
          "Trusted by 6,500+ doctors | Certified in Japan | 5-in-1 Water System"
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
