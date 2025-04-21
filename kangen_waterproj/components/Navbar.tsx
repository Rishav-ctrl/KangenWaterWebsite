'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50 || currentScrollY < lastScrollY) {
        setShowNav(true); 
      } else {
        setShowNav(false); 
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 100) {
        setShowNav(true); // Show on mouse near top
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-20 lg:px-40 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/kangen logo.jpeg" alt="Kangen Water Logo" width={50} height={50} className="mr-2" />
          <span className="text-xl font-semibold text-blue-500">Kangen Water Nepal</span>
        </Link>

        {/* Pills */}
        <div className="bg-white rounded-full shadow-md px-6 py-2 flex space-x-6">
          <Link href="#home" className="text-gray-800 hover:text-blue-500 font-medium">Home</Link>
          <Link href="#science" className="text-gray-800 hover:text-blue-500 font-medium">Science</Link>
          <Link href="#benefits" className="text-gray-800 hover:text-blue-500 font-medium">Benefits</Link>
          <Link href="#buy" className="text-gray-800 hover:text-blue-500 font-medium">Where to Buy</Link>
        </div>

        {/* Contact Button */}
        <Link
          href="#contact"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
        >
          Contact 
        </Link>
      </div>
    </nav>
  );
}
