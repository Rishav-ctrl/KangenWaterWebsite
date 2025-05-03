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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white shadow-md ${
        showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-20 lg:px-40 py-3">
        {/* Logo */}
        <Link href="#" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center">
          <Image src="/kangen logo.jpeg" alt="Kangen Water Logo" width={50} height={50} className="mr-2" />
          <span className="text-xl font-semibold text-blue-500">Kangen Water Nepal</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex bg-white rounded-full shadow-md px-6 py-2 space-x-6">
          <a href="#pt-0" onClick={(e) => scrollToSection(e, '#home')} className="text-gray-800 hover:text-blue-500 font-medium">Home</a>
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="text-gray-800 hover:text-blue-500 font-medium">About Kangen Water</a>
          <a href="#science" onClick={(e) => scrollToSection(e, '#science')} className="text-gray-800 hover:text-blue-500 font-medium">Properties</a>
          <a href="#benefits" onClick={(e) => scrollToSection(e, '#benefits')} className="text-gray-800 hover:text-blue-500 font-medium">Benefits</a>
          <a href="#buy" onClick={(e) => scrollToSection(e, '#buy')} className="text-gray-800 hover:text-blue-500 font-medium">Products</a>
          <a href="#buy" onClick={(e) => scrollToSection(e, '#buy')} className="text-gray-800 hover:text-blue-500 font-medium">Where to Buy</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-500">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Contact Button */}
        <Link
          href="#buy"
          onClick={(e) => scrollToSection(e, '#buy')}
          className="hidden md:block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-center">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="block text-gray-800 hover:text-blue-500">Home</a>
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="block text-gray-800 hover:text-blue-500">About Kangen Water</a>
          <a href="#science" onClick={(e) => scrollToSection(e, '#science')} className="block text-gray-800 hover:text-blue-500">Properties</a>
          <a href="#benefits" onClick={(e) => scrollToSection(e, '#benefits')} className="block text-gray-800 hover:text-blue-500">Benefits</a>
          <a href="#buy" onClick={(e) => scrollToSection(e, '#buy')} className="block text-gray-800 hover:text-blue-500">Products</a>
          <a href="#buy" onClick={(e) => scrollToSection(e, '#buy')} className="block text-gray-800 hover:text-blue-500">Where to Buy</a>
          <a href="#buy" onClick={(e) => scrollToSection(e, '#buy')} className="block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-full">Contact</a>
        </div>
      )}
    </nav>
  );
}
