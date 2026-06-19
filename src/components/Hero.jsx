import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../assets/ankush-hero-video-loop.mp4';

/**
 * A cinematic, B2B-focused hero. The product film is deliberately the only
 * visual focal point here—no decorative product simulations or SVG animation.
 */
const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const restartLoop = () => {
      if (video.currentTime >= 5) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0 },
    );
    visibilityObserver.observe(video);
    video.addEventListener('timeupdate', restartLoop);

    return () => {
      visibilityObserver.disconnect();
      video.removeEventListener('timeupdate', restartLoop);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative isolate overflow-hidden bg-primary px-5 pb-14 pt-28 text-offwhite sm:px-8 lg:min-h-screen lg:px-12 lg:pb-20 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_83%_42%,rgba(200,169,106,0.15),transparent_27%),radial-gradient(circle_at_12%_90%,rgba(255,255,255,0.04),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16 xl:gap-24">
        <motion.div
          className="order-2 w-full lg:order-1 lg:w-[47%]"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold sm:text-sm">
            B2B Diamond Jewellery Manufacturer
          </p>
          <h1 className="font-heading text-4xl font-bold leading-[1.14] text-offwhite sm:text-5xl lg:text-5xl xl:text-6xl">
            25+ Years of Diamond Jewellery Craftsmanship
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-softGray sm:text-lg sm:leading-8">
            Trusted manufacturing partner for Goenka India and leading jewellery retailers.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#collections"
              className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-semibold text-primary transition duration-300 hover:bg-[#dec184] hover:shadow-[0_0_24px_rgba(200,169,106,0.35)]"
            >
              Explore Collections
            </a>
            <a
              href="#contact"
              className="rounded-full border border-gold/80 px-7 py-3.5 text-center text-sm font-semibold text-gold transition duration-300 hover:bg-gold hover:text-primary"
            >
              Start B2B Inquiry
            </a>
          </div>
        </motion.div>

        <motion.div
          className="order-1 w-full max-w-[430px] lg:order-2 lg:w-[43%] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/30 bg-white/[0.03] p-1.5 shadow-[0_0_50px_rgba(200,169,106,0.18),0_24px_70px_rgba(0,0,0,0.48)] backdrop-blur-sm sm:rounded-[2.25rem] sm:p-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.35rem] bg-black sm:rounded-[1.85rem]">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Ankush Jewellers diamond jewellery craftsmanship film"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-[#2a1e0d]/25" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
