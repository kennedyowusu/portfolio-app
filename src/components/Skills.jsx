import Divider from "../components/Divider";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import SkillsImage from "../assets/skills-image.png";

const Skills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24 mt-[-36px] md:w-full">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-[#FFBA00]">SKILLS</span>
          </p>
          <Divider width="w-1/3" />
          <p className="mt-10 mb-7 text-start">
            I excel in cross - cultural collaboration, Test - Driven Development, and intuitive user interface design. Dedicated to continuous learning and staying up - to - date, I deliver cutting - edge, user - friendly applications.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-10">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src={SkillsImage}
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={SkillsImage} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/2 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl sm:text-3xl md:text-3xl lg:text-3xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3 xs:text-2xl">
                  Mobile Developer - <span className="text-yellow font-semibold"> Flutter</span>
              </p>
            </div>
          </div>
          <p className="mt-5 text-justify xs:mt-[-5px]">
            I create high - quality cross - platform mobile apps with a focus on performance and user experience.Proficient in Flutter and Dart, I deliver visually appealing solutions using best practices.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/2 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3 xs:text-2xl">
                Frontend Developer - <span className="text-yellow font-semibold"> React</span>
              </p>
            </div>
          </div>
          <p className="mt-5 text-justify xs:mt-[-5px]  md:mt-[5px]">
            I craft performant and user - centric web applications with a keen eye
            for quality.Proficient in React.js, I deliver visually engaging solutions using industry best practices.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/2 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3 xs:text-2xl">
                Backend Developer - <span className="text-yellow font-semibold"> Ruby</span>
              </p>
            </div>
          </div>
          <p className="mt-5 text-justify xs:mt-[-5px]  md:mt-[5px]">
            I create high - quality backend solutions with a focus on efficiency and reliability.With a strong command of Ruby and associated frameworks.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
