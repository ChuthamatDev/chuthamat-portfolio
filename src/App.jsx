import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init();

    // Active section logic
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.6 && top > 0) {
          section.classList.add("active-section");
        } else {
          section.classList.remove("active-section");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main-content-wrapper">
      <img className="image-gradient" src="/image/gradient.png" alt="gradient" />
      <div className="layer-blur"></div>
      <div className="bg-blur-layers">
        <div className="blur-spot spot1"></div>
        <div className="blur-spot spot2"></div>
        <div className="blur-spot spot3"></div>
        <div className="blur-spot spot4"></div>
      </div>

      <div className="container">
        <Navbar />

        <main>
          <Hero />
          <Profile />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
