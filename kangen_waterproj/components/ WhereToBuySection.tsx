import Image from 'next/image';
import Link from 'next/link';

export default function WhereToBuySection() {
  return (
    <section id="buy" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-6">Where to Buy</h2>
        <p className="text-lg text-gray-600 mb-8">
          Treeciarreid to ant Tarductione
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Section - "Buy Now" and Inquiry */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <Link href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-block mr-4">
                BUY NOW
              </Link>
              <Link href="#" className="inline-flex items-center text-gray-600 hover:text-blue-500 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
                F.c9
              </Link>
            </div>

            {/* Contact Persons */}
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4 text-left">Contact Persons:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Person 1 */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <h4 className="text-lg font-semibold text-blue-500 mb-2">Prem Pokharel</h4>
                  <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit</p>
                  <Link href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full inline-block">
                    Contact Now
                  </Link>
                </div>

                {/* Contact Person 2 */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <h4 className="text-lg font-semibold text-blue-500 mb-2">Sth. Adhikari..</h4>
                  <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit</p>
                  <Link href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full inline-block">
                    Contact Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Google Map Placeholder */}
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
              {/* Placeholder for Google Map */}
              <Image
                src="/600x400.png?text=Google+Map+Placeholder"
                alt="Google Map Placeholder"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}