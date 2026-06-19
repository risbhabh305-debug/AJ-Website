import React from 'react';
import { motion } from 'framer-motion';

// Data for the "Why Choose Us" section. Each entry includes an icon (as SVG) and a title.
const reasons = [
  {
    title: '25+ Years Experience',
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold"
      >
        <path d="M12 20l9-5-9-5-9 5 9 5z"></path>
        <path d="M12 12l9-5-9-5-9 5 9 5z"></path>
        <path d="M12 12l0 8"></path>
      </svg>
    ),
  },
  {
    title: 'Trusted Manufacturing Partner',
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 3l0 4"></path>
        <path d="M8 3l0 4"></path>
      </svg>
    ),
  },
  {
    title: 'Premium Diamond Craftsmanship',
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold"
      >
        <polygon points="5 3 19 3 22 9 12 21 2 9 5 3"></polygon>
      </svg>
    ),
  },
  {
    title: 'Quality Assurance',
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9 12l2 2l4 -4"></path>
      </svg>
    ),
  },
  {
    title: 'Modern Manufacturing',
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold"
      >
        <rect x="3" y="3" width="7" height="7" rx="1"></rect>
        <rect x="14" y="3" width="7" height="7" rx="1"></rect>
        <rect x="14" y="14" width="7" height="7" rx="1"></rect>
        <rect x="3" y="14" width="7" height="7" rx="1"></rect>
      </svg>
    ),
  },
  {
    title: 'Timely Delivery',
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
];

/**
 * WhyChoose component: displays reasons to select Ankush Jewellers.
 */
const WhyChoose = () => {
  return (
    <section id="why" className="py-20 bg-primary text-offwhite">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-gold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.title}
              className="flex flex-col items-center bg-primary border border-gold/30 rounded-lg p-6 text-center hover:bg-gold/10 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-gold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;