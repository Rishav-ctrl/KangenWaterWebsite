'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/properties', label: 'Properties' },
    { href: '/benefits', label: 'Benefits' },
    { href: '/products', label: 'Products' },
    { href: '/buy', label: 'Buy' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white shadow-md ${
        showNav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-20 lg:px-40 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logos/logo.png" alt="Kangen Water Logo" width={50} height={50} className="mr-2" />
          <span className="text-l font-semibold text-blue-500">Kangen Water Nepal</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium transition hover:text-blue-500 ${
                isActive(link.href)
                  ? 'text-blue-600 underline underline-offset-4'
                  : 'text-gray-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-lg font-medium ${
                isActive(link.href)
                  ? 'text-blue-600 underline underline-offset-4'
                  : 'text-gray-800 hover:text-blue-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/buy"
            className="block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
