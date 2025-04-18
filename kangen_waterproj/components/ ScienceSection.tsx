import Image from 'next/image';

export default function ScienceSection() {
  return (
    <section id="science" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-8">The Science of Alkaline Water</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">Alkaline Water</h3>
            <p className="text-gray-600 mb-6">
              Wot percaa lo for ploirvl arat intores piet inepgaling skelding
              aitu vahtfrieid fnealaar wate fto soalcot water.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1589318073495-18eb9f699913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjY4MTh8MHwxfHNlYXJjaHw0fHxib3R0bGVkJTIwd2F0ZXIlMjBzaWRlfGVufDB8fHx8MTcwNTU2NjEwOXww&ixlib=rb-4.0.3&q=80&w=400"
              alt="Alkaline Water Bottle"
              width={400}
              height={300}
              className="rounded-lg shadow-md mx-auto md:mx-0"
            />
          </div>

          {/* Middle Section - Placeholder for Animation */}
          <div className="flex justify-center items-center bg-blue-200 rounded-lg shadow-md p-8 md:p-16">
            {/* This area will contain the pH and Antioxidant animation */}
            <div className="w-full h-full flex flex-col justify-center items-center">
              <h4 className="text-lg font-semibold text-blue-600 mb-4">Interactive Area</h4>
              <div className="mb-4">
                {/* Placeholder for pH Slider */}
                <div className="bg-gray-300 h-8 w-64 rounded-full">
                  <div className="bg-green-400 h-8 rounded-full w-1/2"></div> {/* Example slider position */}
                </div>
                <p className="text-sm text-gray-500 mt-1">pH: [Value]</p>
              </div>
              <div>
                {/* Placeholder for Antioxidant (ORP) Slider */}
                <div className="bg-gray-300 h-8 w-64 rounded-full">
                  <div className="bg-orange-400 h-8 rounded-full w-1/3"></div> {/* Example slider position */}
                </div>
                <p className="text-sm text-gray-500 mt-1">ORP: [Value] mV</p>
              </div>
              <div className="mt-8">
                {/* Placeholder for Central Animation */}
                <div className="w-48 h-48 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                  Animation
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-blue-500 mb-4">Alkaline</h3>
            <p className="text-gray-600 mb-6">
              Alkaline Water anotliat on trortrhiy aorossatine water
              vei.
            </p>
            <div className="bg-blue-100 rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Alkaline Water</h4>
              <ul className="text-gray-600 text-sm">
                <li className="mb-1">
                  <span className="inline-block w-4 h-4 rounded-full bg-red-500 mr-2"></span>
                  aklikne eoloinid aclcikn atfllat
                </li>
                <li className="mb-1">
                  <span className="inline-block w-4 h-4 rounded-full bg-green-500 mr-2"></span>
                  acllacen tocalog
                </li>
              </ul>
              <div className="mt-4 flex justify-around">
                <div>
                  <span className="text-xl font-semibold text-blue-700">+30</span>
                </div>
                <div>
                  <span className="text-xl font-semibold text-green-700">+70</span>
                </div>
                <div>
                  <span className="text-xl font-semibold text-orange-700">+70</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research & Studies Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-blue-500 mb-2">ANOL ALIIOS & STOPMET</h4>
            <p className="text-gray-600 text-sm">
              Worlibus us arhin yanc athve lciey blinka talt afolatiy
              woheganic andis itbloest anklies.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-500 mb-2">MEICATISHILL FINE vetuellatiy</h4>
            <p className="text-gray-600 text-sm">
              Ton fneeling ah traionetly oof ttione tucarlion floatc aatiik
              posnatimdes slouist acxinsttoer.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-500 mb-2">MEERIEED PHIOR ricostivd</h4>
            <p className="text-gray-600 text-sm">
              Dent tecint in torfed luailrde ticarlf cart glatte
              pactustby waterjoees.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-500 mb-2">Malvies walid Intekleaties</h4>
            <p className="text-gray-600 text-sm">
              Sut uoln unit the uriog sor
              Q Sonsiadicaties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}