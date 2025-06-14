'use client';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Phone, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-50 text-gray-700 pt-10 relative overflow-hidden">
      {/* Decorative animated wave */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Pages</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-500">About Kangen Water</Link></li>
            <li><Link href="/properties" className="hover:text-blue-500">Properties</Link></li>
            <li><Link href="/benefits" className="hover:text-blue-500">Benefits</Link></li>
            <li><Link href="/products" className="hover:text-blue-500">Products</Link></li>
            <li><Link href="/buy" className="hover:text-blue-500">Where to Buy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
  <h2 className="text-xl font-semibold text-blue-600 mb-4">Contact Us</h2>
  <ul className="space-y-2">
    <li className="flex items-start gap-2">
      <Phone size={18} className="mt-1" />
      <p className="text-base leading-relaxed">
        <a href="tel:+9779857071120" className="text-black hover:underline">9857071120</a> /{' '}
        <a href="tel:+9779857047817" className="text-black hover:underline">9857047817</a> /{' '}
        <a href="tel:+9779846893733" className="text-black hover:underline">9846893733</a>
      </p>
    </li>
    <li className="flex items-center gap-2">
      <Mail size={18} /> <a href="mailto:kangenwaternepal7@gmail.com" className="text-black hover:underline">kangenwaternepal7@gmail.com</a>
    </li>
    <li className="flex items-center gap-2">
      <Globe size={18} /> <a href="https://www.kangenwaternepal.com.np" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">www.kangenwaternepal.com.np</a>
    </li>
  </ul>
</div>


        {/* Other Links & Socials */}
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Explore</h2>
          <ul className="space-y-2">
            <li>
              <a href="https://www.enagic.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                Enagic® Official Website
              </a>
            </li>
            <li>
              <a href="https://kangenwatermachine.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                Kangen Water Machines
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" className="text-blue-600 hover:text-blue-800"><Facebook size={20} /></a>
              <a href="https://instagram.com" target="_blank" className="text-pink-500 hover:text-pink-700"><Instagram size={20} /></a>
              <a href="https://youtube.com" target="_blank" className="text-red-500 hover:text-red-700"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 border-t border-blue-200 py-4">
        © {year} Kangen Water Nepal. All rights reserved. | Designed with ❤️ by RG
      </div>
    </footer>
  );
}
