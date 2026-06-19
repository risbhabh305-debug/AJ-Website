import React from 'react';
import { motion } from 'framer-motion';

/**
 * About section: describes the legacy and core values of Ankush Jewellers.
 */
const About = () => {
  return (
    <section id="about" className="relative py-20 bg-primary text-offwhite">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-gold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ankush Jewellers is a trusted B2B diamond jewellery manufacturer, proudly serving India’s leading retailers for over 25 years. Our legacy is built on precision craftsmanship, premium quality and long-term partnerships. We specialise in creating exquisite diamond jewellery for brands and retailers who demand the very best. Our state-of-the-art manufacturing facilities and skilled artisans ensure every piece meets the highest standards of brilliance and durability. We deliver on time, every time, while maintaining the trust that only decades of experience can provide.
        </motion.p>
      </div>
    </section>
  );
};

export default About;