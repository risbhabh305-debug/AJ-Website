import React, { useLayoutEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DiamondStory from './components/DiamondStory';
import CraftsmanshipFilm from './components/CraftsmanshipFilm';
import About from './components/About';
import Collections from './components/Collections';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import Legacy from './components/Legacy';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// The main application composes the various sections into a single-page layout.
function App() {
  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">{/* prevent horizontal overflow */}
      {/* Persistent header */}
      <Header />
      {/* Provide an id for the top of the page */}
      <div id="home">
        <Hero />
      </div>
      <DiamondStory />
      <CraftsmanshipFilm />
      <About />
      <Collections />
      <WhyChoose />
      <Process />
      <Legacy />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
