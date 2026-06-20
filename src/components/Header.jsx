import React from 'react';

/**
 * Header component: displays the company logo and navigation links.
 */
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-primary/70 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto flex max-w-6xl items-center justify-center px-4 py-3">
        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-medium text-softGray sm:text-sm md:gap-x-6 md:text-base">
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
