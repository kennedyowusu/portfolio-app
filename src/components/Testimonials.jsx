import { motion } from "framer-motion";
import Divider from "./Divider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 ">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
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
          <span className="text-[#FFBA00]">TESTI</span> MONIALS
        </p>
        <Divider width="mx-auto w-2/5" />
        <p className="mt-10 mb-[-8em] xs:mb-10">
          Discover what clients and colleagues have to say about the quality and impact of my work.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 xxs:mt-10
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-xl mb-12 xxs:text-center xxs:text-md xs:text-center md:text-[16px] md:text-center">
            Exceptional web developer, delivering outstanding results with precision and creativity.
          </p>
          <p className="font-semibold
            absolute bottom-0 right-0 mr-16 mb-16 text-xl uppercase
          ">Sosu Alfred</p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 xxs:mt-10
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
            <p className="text-center text-xl mb-12 xxs:text-center xxs:text-md xs:text-center md:text-[16px] md:text-center">
              Exemplary Flutter developer. Transformed our online presence with impeccable expertise.
            </p>
            <p className="font-semibold
              absolute bottom-0 right-0 mr-16 mb-16 text-xl uppercase
            ">
            Pray shimwa</p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 xxs:mt-10
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 rounded-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-xl mb-12 xxs:text-center xxs:text-md xs:text-center md:text-[16px] md:text-center">
            A talented web developer who delivers exceptional results with precision.
          </p>
          <p className="font-semibold
            absolute bottom-0 right-0 mr-16 mb-16 text-xl uppercase
          ">tarik bouari</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
