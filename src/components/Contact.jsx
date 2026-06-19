import React from 'react';
import { motion } from 'framer-motion';

/**
 * Contact component: includes a contact form and company contact information.
 */
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-offwhite">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-gold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact details */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-semibold text-2xl text-gold mb-2">Get In Touch</h3>
            <p>
              <span className="font-semibold">Address:</span> 217, Amir Industrial Estate, Sunmill
              Compound, Sitaram Jadhav Marg, Lower Parel (W), Mumbai – 400013
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+919819616331" className="text-gold hover:underline">
                +91 98196 16331 (Ajay Ghosh)
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:jewellersankush@gmail.com" className="text-gold hover:underline">
                jewellersankush@gmail.com
              </a>
            </p>
          </motion.div>
          {/* Contact form */}
          <motion.form
            className="lg:w-1/2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-primary border border-gold/30 rounded p-3 focus:outline-none focus:ring-2 focus:ring-gold text-offwhite"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="bg-primary border border-gold/30 rounded p-3 focus:outline-none focus:ring-2 focus:ring-gold text-offwhite"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-primary border border-gold/30 rounded p-3 focus:outline-none focus:ring-2 focus:ring-gold text-offwhite"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-primary border border-gold/30 rounded p-3 focus:outline-none focus:ring-2 focus:ring-gold text-offwhite"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full bg-primary border border-gold/30 rounded p-3 focus:outline-none focus:ring-2 focus:ring-gold text-offwhite"
            ></textarea>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919819616331"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gold text-primary py-3 px-4 rounded text-center font-medium hover:bg-opacity-90 transition"
              >
                WhatsApp Inquiry
              </a>
              <a
                href="tel:+919819616331"
                className="flex-1 border border-gold text-gold py-3 px-4 rounded text-center font-medium hover:bg-gold hover:text-primary transition"
              >
                Call Now
              </a>
              <button
                type="submit"
                className="flex-1 border border-gold text-gold py-3 px-4 rounded text-center font-medium hover:bg-gold hover:text-primary transition"
              >
                Send Inquiry
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;