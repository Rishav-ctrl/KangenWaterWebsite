'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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
        setShowNav(true);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white shadow-md ${
        showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-20 lg:px-40 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/kangen logo.jpeg" alt="Kangen Water Logo" width={50} height={50} className="mr-2" />
          <span className="text-xl font-semibold text-blue-500">Kangen Water Nepal</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex bg-white rounded-full shadow-md px-6 py-2 space-x-6">
          <Link href="/" className="text-gray-800 hover:text-blue-500 font-medium">Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-500 font-medium">About Kangen Water</Link>
          <Link href="/properties" className="text-gray-800 hover:text-blue-500 font-medium">Properties</Link>
          <Link href="/benefits" className="text-gray-800 hover:text-blue-500 font-medium">Benefits</Link>
          <Link href="/products" className="text-gray-800 hover:text-blue-500 font-medium">Products</Link>
          <Link href="/buy" className="text-gray-800 hover:text-blue-500 font-medium">Where to Buy</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-500">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Contact Button */}
        <Link
          href="/buy"
          className="hidden md:block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-center">
          <Link href="/" className="block text-gray-800 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block text-gray-800 hover:text-blue-500" onClick={() => setMenuOpen(false)}>About Kangen Water</Link>
          <Link href="/properties" className="block text-gray-800 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Properties</Link>
          <Link href="/benefits" className="block text-gray-800 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Benefits</Link>
          <Link href="/products" className="block text-gray-800 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/buy" className="block text-gray-800 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Where to Buy</Link>
          <Link href="/buy" className="block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-full" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
