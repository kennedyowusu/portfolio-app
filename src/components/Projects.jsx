import Divider from "../components/Divider";
import { motion } from "framer-motion";
import PropTypes from 'prop-types'
import Project from "./Project";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
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
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" subtitle="Sub-title for the project"  />
          <Project title="Project 2" subtitle="Sub-title for the project" />

          {/* ROW 2 */}
          <Project title="Project 3" subtitle="Sub-title for the project" />
          <Project title="Project 4" subtitle="Sub-title for the project" />
          <Project title="Project 5" subtitle="Sub-title for the project" />

          {/* ROW 3 */}
          <Project title="Project 6" subtitle="Sub-title for the project" />
          <Project title="Project 7" subtitle="Sub-title for the project" />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
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
