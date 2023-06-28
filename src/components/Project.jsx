import {
  motion
} from "framer-motion";
import PropTypes from 'prop-types'

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }) => {
  const overlayStyle = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyle}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {subtitle}
        </p>
      </div>
    <img src={(`../assets/${projectTitle}.jpeg`)
      } alt={projectTitle} />
    </motion.div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default Project;
