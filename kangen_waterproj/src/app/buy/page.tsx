'use client'
import { useEffect, useState } from 'react'

export default function WhereToBuySection() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const res = await fetch('https://formspree.io/f/mgvkdkgz', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      setSubmitted(true)
      setFormData({ name: '', address: '', phone: '' })
    } else {
      alert('Something went wrong. कृपया फेरि प्रयास गर्नुहोस्।')
    }

    setIsSubmitting(false)
  }

  return (
    <section id="buy" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-4">Where to Buy? / कहाँ किन्न सकिन्छ?</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Contact our representatives or visit the office. Buy Kangen Water with full guidance. <br />
        </p>
       
{/* Location and Details */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start text-left">
  {/* Left Section */}
  <div className="space-y-6 w-full">
    
    {/* Green Banner */}
    <div className="bg-green-600 text-white text-center font-semibold py-2 px-4 rounded-t-md w-full">
      Visit Us For a Live Scientific Demonstration
    </div>

    {/* Centered Content Container */}
    <div className="flex flex-col items-center text-center space-y-4">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-blue-900 tracking-wide uppercase">
        Kangen Water Nepal
      </h2>

      {/* Address and Contact Info */}
      <div className="text-gray-800 text-[17px] leading-relaxed space-y-3">
        <p>
          <strong>Address:</strong> Tilottama-4, Drivertole, Rupandehi
        </p>

        <p className="flex justify-center items-center gap-2">
          <img src="logos/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
          <span>
            <a href="tel:+9779857047817" className="text-black hover:underline">9857047817</a>,{' '}
            <a href="tel:+9779857071120" className="text-black hover:underline">9857071120</a>,{' '}
            <a href="tel:+9779846893733" className="text-black hover:underline">9846893733</a>
          </span>
        </p>

        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:kangenwaternepal7@gmail.com" className="text-black hover:underline">
            kangenwaternepal7@gmail.com
          </a>
        </p>

        <p>
          <strong>Website:</strong>{' '}
          <a href="https://www.kangenwaternepal.com.np" target="_blank" className="text-black hover:underline">
            www.kangenwaternepal.com.np
          </a>
        </p>
      </div>
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
            />
          </div>
        </div>


        {/* Thank You Message */}
        {submitted && (
          <div className="mt-12 text-center text-green-600 font-semibold text-lg">
            धन्यवाद! तपाईंको विवरण प्राप्त भयो। हामी चाँडै सम्पर्क गर्नेछौं।
          </div>
        )}

        {/* Inquiry Form */}
        {!submitted && (
          <form
            onSubmit={handleSubmit}
            className="mt-16 bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto space-y-4"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">
              जानकारीका लागि फारम भर्नुहोस्
            </h3>

            <input
              type="text"
              name="name"
              placeholder="तपाईंको नाम"
              className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-700"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="address"
              placeholder="तपाईंको ठेगाना"
              className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-700"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="फोन नम्बर"
              className="w-full border border-gray-300 rounded-lg p-3 text-black placeholder:text-gray-700"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'पठाउँदै...' : 'पेश गर्नुहोस्'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
