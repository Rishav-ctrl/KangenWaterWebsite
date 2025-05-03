export default function WhereToBuySection() {
    return (
      <section id="buy" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-4">Where to Buy? / कहाँ किन्न सकिन्छ?</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Contact our representatives or visit the office. Buy Kangen Water with full guidance. <br />
            थप जानकारीको लागि हामीलाई सिधै सम्पर्क गर्नुहोस् वा अफिसमा आउनुहोस्।
          </p>
  
          {/* Location and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start text-left">
            {/* Left Section */}
            <div className="space-y-10">
              <h2 className="text-2xl font-bold text-gray-800">Kangen Water Nepal</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  <strong>Address:</strong> Tilottama-4, Drivertole, Rupandehi
                </p>
                <p className="text-lg">
                  <strong>Contact :</strong>{' '}
                  <a href="tel:+9779857071120" className="text-blue-600">9857071120</a> /{' '}
                  <a href="tel:+9779857047817" className="text-blue-600">9857047817</a>
                </p>
                <p className="text-lg">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:kangenwaternepal7@gmail.com" className="text-blue-600">kangenwaternepal7@gmail.com</a>
                </p>
              </div>
            </div>
  
            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427.3988056336713!2d83.46439395617493!3d27.648131132972956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996844cdf587883%3A0xbdf93678f0d8ce9b!2sDrivertol%2C%20Tilottama%2032907!5e1!3m2!1sen!2snp!4v1746087956549!5m2!1sen!2snp"
                allowFullScreen
                loading="lazy"
                className="w-full h-64 md:h-80 border-none"
                title="Kangen Water Nepal Office Location"
              ></iframe>
            </div>
          </div>
  
          {/* Contact Persons */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Contact Persons / सम्पर्क व्यक्ति</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Prem Pokharel */}
              <div className="bg-white shadow-md rounded-xl p-5 text-center">
                <img src="/prem.png" alt="Prem Pokharel" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h4 className="text-lg font-semibold text-blue-600 mb-1">Prem Pokharel</h4>
                <p className="text-sm text-gray-600 mb-3">Kangen Water Nepal Representative</p>
                <div className="space-y-2">
                  <a
                    href="tel:+9779857071120"
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/9779857071120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
  
              {/* Suraj Adhikari */}
              <div className="bg-white shadow-md rounded-xl p-5 text-center">
                <img src="/surajdai.png" alt="Suraj Adhikari" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h4 className="text-lg font-semibold text-blue-600 mb-1">Suraj Adhikari</h4>
                <p className="text-sm text-gray-600 mb-3">Kangen Water Nepal Representative</p>
                <div className="space-y-2">
                  <a
                    href="tel:+9779857047817"
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/9779857047817"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
  
          {/* Inquiry Form */}
          <form className="mt-16 bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto space-y-4">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">
              जानकारीका लागि फारम भर्नुहोस्
            </h3>
            <input
              type="text"
              placeholder="तपाईंको नाम"
              className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-700"
              required
            />
            <input
              type="text"
              placeholder="तपाईंको ठेगाना"
              className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-700"
              required
            />
            <input
              type="tel"
              placeholder="फोन नम्बर"
              className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-700"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
            >
              पेश गर्नुहोस्
            </button>
          </form>
        </div>
      </section>
    );
  }
  