import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../assets/ankush-hero-video-loop.mp4';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const backgroundVideoRef = useRef(null);
  const hasFinishedRef = useRef(false);

  // The selected five-second hero cut plays once, and pauses when the whole
  // hero is out of view so it never runs unseen in the background.
  useEffect(() => {
    const video = videoRef.current;
    const backgroundVideo = backgroundVideoRef.current;
    if (!video || !backgroundVideo) return undefined;
    const videos = [video, backgroundVideo];

    const stopAtFiveSeconds = () => {
      if (video.currentTime >= 5) {
        hasFinishedRef.current = true;
        videos.forEach((film) => {
          film.currentTime = 5;
          film.pause();
        });
      }
    };

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFinishedRef.current) {
          videos.forEach((film) => film.play().catch(() => {}));
        } else if (!entry.isIntersecting) {
          videos.forEach((film) => film.pause());
        }
      },
      { threshold: 0 },
    );

    visibilityObserver.observe(heroRef.current);
    video.addEventListener('timeupdate', stopAtFiveSeconds);

    return () => {
      visibilityObserver.disconnect();
      video.removeEventListener('timeupdate', stopAtFiveSeconds);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative isolate flex min-h-[900px] items-end overflow-hidden bg-primary px-5 pb-16 pt-28 text-offwhite sm:px-8 lg:min-h-[1000px] lg:px-12 lg:pb-20 lg:pt-32">
      <img
        src={heroLogo}
        alt="Ankush Jewellers"
        className="pointer-events-none absolute left-1/2 top-16 z-10 w-44 -translate-x-1/2 sm:top-20 sm:w-52 lg:w-60"
      />
      <video
        ref={backgroundVideoRef}
        className="absolute inset-0 -z-40 h-full w-full scale-110 object-cover opacity-45 blur-2xl"
        style={{ objectPosition: 'center 38%' }}
        autoPlay
        muted
        playsInline
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <video
        ref={videoRef}
        className="absolute inset-0 -z-30 h-full w-full bg-black object-contain"
        style={{ objectPosition: 'center 38%' }}
        autoPlay
        muted
        playsInline
        aria-label="Ankush Jewellers diamond jewellery craftsmanship film"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(13,13,13,0.84)_35%,rgba(13,13,13,0.42)_69%,rgba(0,0,0,0.32)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-transparent to-black/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_42%,rgba(200,169,106,0.12),transparent_31%)]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.22, delayChildren: 0.38 } },
          }}
        >
          <motion.p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold sm:text-sm"
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            B2B Diamond Jewellery Manufacturer
          </motion.p>
          <motion.h1
            className="font-hero-display text-5xl font-semibold leading-[0.94] text-offwhite sm:text-6xl lg:text-7xl xl:text-8xl"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <span className="block">40+ Years of</span>
            <span className="mt-2 block italic text-gold">Crafting Excellence</span>
          </motion.h1>
          <motion.p
            className="mt-7 max-w-xl font-hero-body text-sm font-semibold leading-7 text-offwhite/85 sm:text-base sm:leading-8"
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Trusted manufacturing partner for Goenka India and leading jewellery retailers.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
