import React from 'react';
import { motion } from 'framer-motion';

// Steps in the manufacturing process.
const steps = [
  {
    title: 'Design',
    description: 'Collaborative design process capturing your vision and market trends.',
  },
  {
    title: 'Craftsmanship',
    description: 'Expert artisans hand-craft each piece with precision and care.',
  },
  {
    title: 'Diamond Setting',
    description: 'Stones are meticulously set to maximise brilliance and durability.',
  },
  {
    title: 'Quality Inspection',
    description: 'Every piece undergoes rigorous quality checks for perfection.',
  },
  {
    title: 'Finished Jewellery',
    description: 'Jewellery is polished and finished to meet our exacting standards.',
  },
];

/**
 * Process component: displays the manufacturing process as a timeline.
 */
const Process = () => {
  return (
    <section id="process" className="py-20 bg-primary text-offwhite">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-gold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Manufacturing Process
        </motion.h2>
        <div className="relative border-l-2 border-gold pl-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="mb-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <div className="absolute -left-4 top-1 w-3 h-3 bg-gold rounded-full"></div>
              <h3 className="font-semibold text-xl text-gold mb-1">{step.title}</h3>
              <p className="text-sm text-softGray">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;