import Divider from "../components/Divider";
import { motion } from "framer-motion";
import PropTypes from 'prop-types'
import KefiHotel from "../assets/kefi.png";
import CarRental from "../assets/car-rental.png";
import Countries from "../assets/countries.png";
import Maths from "../assets/math.png";
import Evolve from "../assets/evolve.png";
import Space from "../assets/space.png";
import LuxoPremier from "../assets/luxo.png";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Projects = () => {

  const overlayStyle = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <section id="projects" className="py-24">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-[#FFBA00]">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <Divider width="w-2/3" />
          </div>
        </div>

        <p className="mt-10 mb-10 w-full xxs:text-md xxs:text-justify">
          Welcome to my portfolio of projects! Here, you will find a curated collection of my work that showcases my skills and expertise as a software developer. Each project has been carefully crafted with attention to detail and a focus on delivering exceptional results. From mobile applications built with Flutter to dynamic web experiences developed with React.js and robust backend solutions using Ruby, this portfolio represents the breadth and depth of my capabilities. I invite you to explore these projects and witness the innovation and craftsmanship that goes into each one. Feel free to reach out with any inquiries or feedback. Enjoy your journey through my portfolio of work!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-10 sm:gap-4 w-11/12 mx-auto sm:w-full sm:mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              h-[250px] w-full text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>

          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyle}>
              <a href="https://progress2002.github.io/LuxoPremier/dist/">
                <p className="text-2xl font-playfair uppercase xxs:text-sm xxs:font-bold">LuxoPremier Web App</p>
                <p className="mt-7 xxs:text-md xxs:text-justify xxs:mt-[-0.2px] sm:text-xs sm:text-center sm:text-clip">
                  LuxoPremier is a website that shows you all the latest Tv - shows, you can browse, like, and comment on your favorites.
                </p>
              </a>
            </div>
            <img src={LuxoPremier} alt="Kefi Hotel App" className="h-[250px] w-full" />
          </motion.div>

          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyle}>
              <a href="https://progress2002.github.io/LuxoPremier/dist/"
              target='_blank'
              rel='noreferrer'
              >
              <p className="text-2xl font-playfair uppercase xxs:text-sm xxs:font-bold">Rent A Ride</p>
              <p className="mt-7 xxs:text-md xxs:text-justify xxs:mt-[-0.2px] sm:text-xs sm:text-center sm:text-clip">
                The go - to car rental app that helps you Discover a wide range of vehicles
                for rent - available at your convenience.
              </p>
            </a>
            </div>
            <img src={CarRental} alt="Car Rental App" className="h-[250px] w-full" />

          </motion.div>

          {/* ROW 2 */}

          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyle}>
              <a href="https://kennedy-metric-webapp.netlify.app/"
                target='_blank'
                rel='noreferrer'
              >
                <p className="text-2xl font-playfair uppercase xxs:text-sm xxs:font-bold">All Countries Web App</p>
                <p className="mt-7 xxs:text-md xxs:text-justify xxs:mt-[-0.2px] sm:text-xs sm:text-center sm:text-clip">
                  Metric Web App is a react-based responsive web application that allows users to view countries.
                </p>
              </a>
            </div>
          <img src={Countries} alt="Project Three" className="h-[250px] w-full" />
          </motion.div>

          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyle}>
              <a href="https://vercel.com/kennedyowusu/math-magician"
                target='_blank'
                rel='noreferrer'
              >
              <p className="text-2xl font-playfair uppercase xxs:text-sm xxs:font-bold">Math Magician App</p>

              <p className="mt-7 xxs:text-md xxs:text-justify xxs:mt-[-0.2px] sm:text-xs sm:text-center sm:text-clip">
                A web app that allows a user to make simple calculations and also can read a random math.
              </p>

              </a>
            </div>
          <img src={Maths} alt="Project Four" className="h-[250px] w-full" />
          </motion.div>

          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyle}>
              <a href="https://github.com/kennedyowusu/forum_web"
                target="_blank"
                rel="noreferrer"
              >
              <p className="text-2xl font-playfair uppercase xxs:text-sm xxs:font-bold">Evolve Forum App</p>
              <p className="mt-7 xxs:text-md xxs:text-justify xxs:mt-[-0.2px] sm:text-xs sm:text-center sm:text-clip">
                A forum based web app that allows users to create topics and comment on them.
              </p>

            </a>
            </div>
          <img src={Evolve} alt="Project Five" className="h-[250px] w-full" />
          </motion.div>

          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyle}>
              <a href="https://space-travellers-hub-sage.vercel.app/"
              target='_blank'
              rel='noreferrer'
              >
                <p className="text-2xl font-playfair uppercase xxs:text-sm xxs:font-bold">Space Travelers App</p>
                <p className="mt-7 xxs:text-md xxs:text-justify xxs:mt-[-0.2px] sm:text-xs sm:text-center sm:text-clip">
                  The application allows users to book rockets and join selected space missions.
                </p>
              </a>
            </div>

            <img src={Space} alt="Project Six" className="h-[250px] w-full" />
          </motion.div>

          <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyle}>
              <a href="https://github.com/felixDev22/Kefi-Hotel-App-Frontend"
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-2xl font-playfair uppercase xxs:text-sm xxs:font-bold">KEFI BOOKING HOTEL</p>
                <p className="mt-7 xxs:text-md xxs:text-justify xxs:mt-[-0.2px] sm:text-xs sm:text-center sm:text-clip">
                  A web app that takes data from the backend created with ruby on rails by getting the data through api.
                </p>
              </a>

            </div>
              <img src={KefiHotel} alt="Kefi Hotel App" className="h-[250px] w-full" />
          </motion.div>

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              h-[250px] w-full text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Projects;
