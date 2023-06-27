import { useEffect, useState } from "react"
import useMediaQuery from "./hooks/useMediaQuery"
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import HeroSection from "./components/HeroSection";
import { motion } from "framer-motion";
import Divider from "./components/Divider";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (isTop !== isTopOfPage) {
        setIsTopOfPage(isTop);
      }
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [isTopOfPage])

  return (
    <div className="app bg-deep-blue">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isAboveMediumScreen={isAboveMediumScreen}
        isTopOfPage={isTopOfPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {
          isAboveMediumScreen && (
            <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          )
        }
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <HeroSection setIsTopOfPage={setSelectedPage} />
        </motion.div>
      </div>
      <Divider />
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Skills />
        </motion.div>
      </div>
      <Divider />
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <Divider />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("testimonials")}
        >
          <Testimonials />
        </motion.div>
      </div>
      <Divider />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default App
