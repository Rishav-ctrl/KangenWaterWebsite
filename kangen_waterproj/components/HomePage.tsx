import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 md:py-40 overflow-hidden">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-6">Alkaline Water</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Discover the power of clean, mineral-rich, and health-boosting alkaline water.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full">
            Learn More
          </button>
        </div>

        {/* Water Wave Image */}
        <div className="absolute bottom-0 left-0 right-0">
          <Image
            priority
            src="https://images.unsplash.com/photo-1559851813-9f18f1478174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY4MTh8MHwxfHNlYXJjaHw3fHx3YXRlciUyMHdhdmV8ZW58MHx8fHwxNzA1NTU3NzYwfDA&ixlib=rb-4.0.3&q=80&w=1920"
            alt="Water wave flowing at the bottom"
            width={1920}
            height={300}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-700 mb-2">Benefits of Alkaline Water</h2>
            <p className="text-gray-600 mb-4">
              Alkaline water helps in detoxifying your body and improving overall hydration.
            </p>
            <p className="text-gray-600">
              It can neutralize acid in the bloodstream, increase energy, and slow aging by improving metabolism.
            </p>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1507608616750-b47eb1695ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY4MTh8MHwxfHNlYXJjaHwxNXx8aGVhbHRoJTIwYmVuZWZpdHN8ZW58MHx8fHwxNzA1NTU3ODQwfDA&ixlib=rb-4.0.3&q=80&w=700"
              alt="Glass of clean alkaline water with health icons"
              width={700}
              height={450}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* PH Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1542273917363-ca558e8c616b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY4MTh8MHwxfHNlYXJjaHwyfHxwaHxlbnwwfHx8fDE3MDU1NTc5MTh8MA&ixlib=rb-4.0.3&q=80&w=700"
              alt="PH scale illustration showing alkalinity"
              width={700}
              height={450}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-700 mb-2">Understanding pH</h2>
            <p className="text-gray-600 mb-4">
              Alkaline water typically has a pH of 8 or 9 compared to tap water which is neutral (pH 7).
            </p>
            <p className="text-gray-600">
              This helps balance the acidic content in your body, promoting better wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Health Impact Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">Health Impacts</h2>
            <p className="text-gray-600">
              Regular consumption of alkaline water may support weight loss, improve skin health, and boost immune function.
            </p>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1550576511-9e6b54174241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY4MTh8MHwxfHNlYXJjaHwyfHxib3R0bGVkJTIwd2F0ZXJ8ZW58MHx8fHwxNzA1NTU3OTYyfDA&ixlib=rb-4.0.3&q=80&w=700"
              alt="Person holding a bottle of water with health icons"
              width={700}
              height={450}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Freshness Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1622529533813-c1997350b33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY4MTh8MHwxfHNlYXJjaHwyfHx3YXRlciUyMGNsb3NlJTIwdXB8ZW58MHx8fHwxNzA1NTU4MDAxfDA&ixlib=rb-4.0.3&q=80&w=700"
              alt="Close up of fresh and clean water"
              width={700}
              height={450}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">Pure Freshness</h2>
            <p className="text-gray-600">
              Enjoy the refreshing taste of pure alkaline water—clean, energizing, and revitalizing for your body.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
