import { motion } from "framer-motion";
import PropTypes from 'prop-types'
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import SocialMediaIcons from './SocialMediaIcons';

const HeroSection = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
       {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1] before:filter before:saturate-0 before:transition before:duration-500 border-solid border-2 border-white w-56 h-72 max-w-[400px] md:max-w-[600px]"
          >
            <div
              className="hover:filter hover:saturate-200 transition duration-500 z-10 border-5 w-56 h-72 max-w-[400px] md:max-w-[600px]"
            ></div>
          </div>
        ) : (
            <div
              className="hover:filter hover:saturate-200 transition duration-500 z-10 border-5 w-full max-w-[400px] md:max-w-[600px]"
            ></div>
        )}
    </div>

    {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-4xl font-playfair z-10 text-center md:text-start font-semibold">
            KENNEDY {""}
            <span
              className=" font-playfair z-10 text-center md:text-start text-yellow font-semibold"
            >
              OWUSU
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm md:text-justify text-center xxs:text-md xxs:text-justify">
            As a software developer, I leverage my coding expertise and problem - solving skills to design, debug, test, and collaborate on innovative solutions. I excel in analyzing, documenting, optimizing, and maintaining software systems
            while continuously learning and adapting to enhance their implementation, deployment, and iteration.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="rounded-md text-[#FFBA00] bg-[#FFFFFF] hover:bg-[#FFBA00] hover:text-[#FFFFFF] py-3 px-7 font-semibold
              transition duration-500 xxs:text-sm xxs:py-2 xxs:px-4 ss:text-sm ss:py-4 ss:px-4"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

          <AnchorLink
            className=" bg-[#FFBA00] py-0.5 pr-0.5 ml-6 rounded-md font-semibold hover:bg-[#FFFFFF] hover:text-[#FFBA00] transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="w-full h-full flex items-center justify-center px-10 font-playfair font-semibold">
              Let&apos;s Talk
            </div>
          </AnchorLink>

        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>

    </section>
  )
}

HeroSection.propTypes = {
  setSelectedPage: PropTypes.func,
}

export default HeroSection
