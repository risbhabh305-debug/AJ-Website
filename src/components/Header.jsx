import React from 'react';
import logo from '../assets/logo.jpg';

/**
 * Header component: displays the company logo and navigation links.
 */
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-primary/70 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4 flex items-center justify-between py-3 max-w-6xl">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Ankush Jewellers Logo" className="h-8 w-auto object-contain" />
          <span className="font-heading text-lg text-gold font-semibold hidden sm:inline-block">
            Ankush Jewellers
          </span>
        </a>
        {/* Navigation links */}
        <nav className="hidden md:flex gap-6 text-softGray font-medium">
          <a href="#about" className="hover:text-gold transition">About</a>
          <a href="#collections" className="hover:text-gold transition">Collections</a>
          <a href="#why" className="hover:text-gold transition">Why Us</a>
          <a href="#process" className="hover:text-gold transition">Process</a>
          <a href="#legacy" className="hover:text-gold transition">Legacy</a>
          <a href="#gallery" className="hover:text-gold transition">Gallery</a>
          <a href="#contact" className="hover:text-gold transition">Contact</a>
        </nav>
        {/* Mobile navigation can be implemented later */}
      </div>
    </header>
  );
};

export default Header;