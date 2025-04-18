import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90 backdrop-blur-md shadow-md py-4 px-6 md:px-20 lg:px-40">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="https://via.placeholder.com/50x50.png?text=K" alt="Kangen Water Logo" width={50} height={50} className="mr-2" />
          <span className="text-xl font-semibold text-blue-500">Kangen Water</span>
        </Link>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#home" className="hover:text-blue-500">Home</Link>
          <Link href="#science" className="hover:text-blue-500">Science</Link>
          <Link href="#benefits" className="hover:text-blue-500">Benefits</Link>
          <Link href="#buy" className="hover:text-blue-500">Where to Buy</Link>
        </div>
        {/* Contact Button */}
        <Link href="#contact" className="hidden md:inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
          Contact St's
        </Link>
        {/* Mobile Menu (you can add this later) */}
        <div className="md:hidden">
          {/* Add mobile menu icon here */}
        </div>
      </div>
    </nav>
  );
}