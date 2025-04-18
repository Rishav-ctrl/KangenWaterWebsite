import Image from 'next/image';
import Link from 'next/link';

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-6">Benefits</h2>
        <p className="text-lg text-gray-600 mb-12">
          Poinatj Ing uor waice wate Prarr watoe
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-16">
          {/* Benefit Card 1 */}
          <div className="bg-blue-50 bg-opacity-60 rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mb-4">
              {/* Placeholder for Infinity Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m-3-3a3 3 0 00-3 3m-3-3a3 3 0 013 3m-3-3a3 3 0 00-3 3m6 6a3 3 0 01-3-3m3 3a3 3 0 003-3m3 3a3 3 0 01-3-3m3 3a3 3 0 003-3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Better hydration</h3>
            <p className="text-gray-600 text-sm mb-4">
              wetaeis sollu an lorneind pouett sde bst thegility vototni atte.
            </p>
            <Link href="#" className="text-blue-500 hover:text-blue-700 text-sm font-semibold">
              Learn more
            </Link>
          </div>

          {/* Benefit Card 2 */}
          <div className="bg-green-50 bg-opacity-60 rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center mb-4">
              {/* Placeholder for Drop Icon with Plus */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.306 3 11.75c0 4.556 4.03 8.25 9 8.25z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12h.008v.008H15V12z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Antioxidant boost</h3>
            <p className="text-gray-600 text-sm mb-4">
              watloes witle uf wates yuton necett, hoy aecmmtoe.
            </p>
            <Link href="#" className="text-green-500 hover:text-green-700 text-sm font-semibold">
              Learn more
            </Link>
          </div>

          {/* Benefit Card 3 */}
          <div className="bg-yellow-50 bg-opacity-60 rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-yellow-200 flex items-center justify-center mb-4">
              {/* Placeholder for Leaf Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7 1.274 4.057-1.176 8-5.042 8-3.866 0-7.657-3.943-8.93-8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">Detoxification</h3>
            <p className="text-gray-600 text-sm mb-4">
              hen veashtre trure weeler wordn sedig ihur rarthe.
            </p>
            <Link href="#" className="text-yellow-500 hover:text-yellow-700 text-sm font-semibold">
              Learn more
            </Link>
          </div>

          {/* Benefit Card 4 */}
          <div className="bg-pink-50 bg-opacity-60 rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center mb-4">
              {/* Placeholder for Sparkle Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 11.25V18h-2.25a2.25 2.25 0 01-2.25-2.25V11.25H9.75v6.75a2.25 2.25 0 01-2.25 2.25H5.25v-6.75L3 9l1.5-1.5L7.5 12V9h2.25a2.25 2.25 0 012.25 2.25v2.25H14.25V9l2.25 3L21 6l-1.5 1.5L16.5 11.25z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-pink-700 mb-2">Glowing skin</h3>
            <p className="text-gray-600 text-sm mb-4">
              wetto lo watte tilec hef scepct lusteall awiit niley acotitak eeen.
            </p>
            <Link href="#" className="text-pink-500 hover:text-pink-700 text-sm font-semibold">
              Learn more
            </Link>
          </div>

          {/* Benefit Card 5 */}
          <div className="bg-purple-50 bg-opacity-60 rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center mb-4">
              {/* Placeholder for Bolt Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21 21 17.25m-5.877-5.877L9.25 21 3 14.75m12-6.75l-5.877 5.877-5.877-5.877m0 0L17.25 3 21 6.75" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Enhanced energy</h3>
            <p className="text-gray-600 text-sm mb-4">
              wwletd ts gaict vate hettles epencllin wir anom sluie tacarah tee.
            </p>
            <Link href="#" className="text-purple-500 hover:text-purple-700 text-sm font-semibold">
              Learn more
            </Link>
          </div>
        </div>

        {/* Bottom Section - Image and Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4 text-left md:text-right">
              Codote wnt kietle nipidd wor naltie dinatort fnoput huep.
            </h3>
            <p className="text-gray-600 text-sm text-left md:text-right">
              Wew baoolks wre ww vrently archioist heect yur tareff breaiting
              alct timeglaius twies puvingi with un ftrin tilitcs forahdv.
              fouldk.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1523994261444-287964a892b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY4MTh8MHwxfHNlYXJjaHwyMHx8d2F0ZXIlMjBkcm9wfGVufDB8fHx8MTcwNTU2NzE1N3ww&ixlib=rb-4.0.3&q=80&w=500"
              alt="Water Drop"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <p className="text-gray-600 text-sm text-left">
              Wfen aut four pessez soiong gais aire tixe tuain tiliog toxtor,
              sciooed loocn slciny, kent yolny watloog uett oolcsh hoot, inly
              en toath wass taingnumg yur tn wator ar tes slooot lourt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}