import React from 'react';
import { motion } from 'framer-motion';
// Import all design images
import design1 from '../assets/design1.jpg';
import design2 from '../assets/design2.jpg';
import design3 from '../assets/design3.jpg';
import design4 from '../assets/design4.jpg';
import design5 from '../assets/design5.jpg';
import design6 from '../assets/design6.jpg';
import design7 from '../assets/design7.jpg';
import design8 from '../assets/design8.jpg';
import design9 from '../assets/design9.jpg';
import design10 from '../assets/design10.jpg';
import design11 from '../assets/design11.jpg';
import design12 from '../assets/design12.jpg';
import design13 from '../assets/design13.jpg';
import design14 from '../assets/design14.jpg';

const images = [
  { src: design1, alt: 'Design 1' },
  { src: design2, alt: 'Design 2' },
  { src: design3, alt: 'Design 3' },
  { src: design4, alt: 'Design 4' },
  { src: design5, alt: 'Design 5' },
  { src: design6, alt: 'Design 6' },
  { src: design7, alt: 'Design Concept 1' },
  { src: design8, alt: 'Design Concept 2' },
  { src: design9, alt: 'Design 9' },
  { src: design10, alt: 'Design 10' },
  { src: design11, alt: 'Design 11' },
  { src: design12, alt: 'Design 12' },
  { src: design13, alt: 'Design Concept 3' },
  { src: design14, alt: 'Design Concept 4' },
];

/**
 * Gallery section: displays all provided design images in a responsive grid.
 */
const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-primary text-offwhite">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-gold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Gallery
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;