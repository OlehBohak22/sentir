import { DiscussBtn } from "../DiscussBtn/DiscussBtn";
import { Layout } from "../Layout/Layout";
import s from "./ApproachSection.module.css";
import {
  AnimateSvgFlexibility,
  AnimateSvgHands,
} from "../AninmateSvgLine/AninmateSvgLine";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const leftToRight = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: "0%", opacity: 1, transition: { duration: 0.1 } },
};

const rightToLeft = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: "0%", opacity: 1, transition: { duration: 0.1 } },
};

export const ApproachSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section>
      <Layout className={s.approachContainer}>
        {/* Ротуючий текст */}
        <motion.div
          className={s.rotatingTextBlock}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }} // Зменшив amount до 0.1 для раннього запуску анімації
        >
          <img
            className={s.shadow}
            src="images/approach/circle-shadow.png"
            alt="Shadow"
          />
          <img
            className={s.text}
            src="images/approach/circled-text.png"
            alt="Text"
          />
        </motion.div>

        {/* Ліва частина */}
        <motion.div
          className={s.leftSideContent}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }} // Зменшив amount до 0.1
        >
          <p data-aos="fade-up">
            Take the first
            <br />
            step towards realizing
            <br />
            your idea
          </p>
          <a data-aos="fade-up" href="#form">
            <DiscussBtn>Discuss a project</DiscussBtn>
          </a>
        </motion.div>

        {/* Головний контент */}
        <motion.div
          className={s.mainContent}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }} // Зменшив amount до 0.1
        >
          <motion.h2 className={s.title}>
            <span data-aos="fade-right" className={s.firstLine}>
              sentir
            </span>
            <span data-aos="fade-left" className={s.secondLine}>
              tailored approach
            </span>
            <span data-aos="fade-right" className={s.thirdLine}>
              for success
            </span>
          </motion.h2>

          <div className={s.mainItems}>
            <div data-aos="fade-up" className={`${s.topBlocks} ${s.gradient}`}>
              <AnimateSvgFlexibility />
              <h3>Flexibility in Engagement Models</h3>
              <p>
                Sentir offers flexible engagement models to suit different
                project needs and budgets. Whether it is a Time & Materials
                approach for evolving projects or a Fixed Price model for
                well-defined scopes, we provide options that ensure financial
                flexibility and predictability.
              </p>
            </div>

            {/* Елемент 2 */}
            <div data-aos="fade-up" className={`${s.topBlocks} ${s.grey}`}>
              <h3>Strong Communication and Transparency</h3>
              <p className="opacity-[0.5]">
                Our commitment to clarity is demonstrated through consistent
                updates, interactive demo sessions, and detailed delivery
                reports, ensuring that clients are actively engaged and are
                integral to every phase of development, enhancing the
                collaborative partnership.
              </p>
            </div>

            {/* Елемент 3 */}
            <div data-aos="fade-up" className={s.bottomBlock}>
              <AnimateSvgHands />
              <div className={s.rotatingCircles}>
                <img
                  className={s.circle1}
                  src="/icons/animated_circles/circle1.svg"
                  alt="Circle 1"
                />
                <img
                  className={s.circle2}
                  src="/icons/animated_circles/circle2.svg"
                  alt="Circle 2"
                />
              </div>
              <h3>
                <AnimatedHeading text="Long-Term Support and Maintenance"></AnimatedHeading>
              </h3>
              <p data-aos="fade-up">
                Our commitment to clients extends beyond the initial project
                delivery. We offer ongoing support and maintenance to ensure
                that the solutions we develop continue to perform optimally and
                evolve with changing business needs and technological
                advancements.
              </p>
            </div>
          </div>
        </motion.div>
      </Layout>
    </section>
  );
};
