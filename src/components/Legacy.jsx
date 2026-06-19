import React from 'react';
import { motion } from 'framer-motion';

// Milestone data for the legacy timeline. These are examples and can be adjusted.
const milestones = [
  { year: '1999', title: 'Founded', description: 'Ankush Jewellers is established with a vision to craft exquisite diamond jewellery.' },
  { year: '2005', title: 'Expansion', description: 'State-of-the-art manufacturing facilities and workforce expansion.' },
  { year: '2015', title: 'Recognition', description: 'Recognised as a leading B2B jewellery manufacturer in India.' },
  { year: '2022', title: 'Partnerships', description: 'Partnerships with prestigious retail brands across India.' },
  { year: '2025', title: '25 Years', description: 'Celebrating 25 years of crafting excellence and trust.' },
];

/**
 * Legacy component: shows timeline of company milestones with an elegant golden line.
 */
const Legacy = () => {
  return (
    <section id="legacy" className="py-20 bg-primary text-offwhite">
      <div className="container mx-auto px-4 max-w-5xl">
          <motion.h2
            className="font-heading text-3xl md:text-4xl font-bold text-gold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Legacy
          </motion.h2>
          <div className="relative">
            {/* Golden vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold"></div>
            <div className="flex flex-col">
              {milestones.map((item, idx) => (
                <motion.div
                  key={item.year}
                  className={`relative mb-12 flex flex-col md:flex-row ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} items-start`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                >
                  {/* Content column for larger screens; takes half width */}
                  <div className="md:w-1/2 px-4 py-2 text-left md:text-right">
                    <h3 className="font-semibold text-xl text-gold">{item.year} – {item.title}</h3>
                    <p className="text-sm text-softGray mt-1 max-w-xs">
                      {item.description}
                    </p>
                  </div>
                  {/* Circle marker */}
                  <div className="relative">
                    <span className="hidden md:block w-4 h-4 bg-gold rounded-full mt-2"></span>
                  </div>
                  {/* Empty column for spacing when reversed; also used on small screens as vertical flow */}
                  <div className="md:w-1/2 px-4 py-2"></div>
                </motion.div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default Legacy;