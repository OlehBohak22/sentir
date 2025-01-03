import { DiscussBtn } from "../DiscussBtn/DiscussBtn";
import { Layout } from "../Layout/Layout";
import s from "./ApproachSection.module.css";
import {
  AnimateSvgFlexibility,
  AnimateSvgHands,
} from "../AninmateSvgLine/AninmateSvgLine";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const leftToRight = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: "0%", opacity: 1, transition: { duration: 0.5 } },
};

const rightToLeft = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: "0%", opacity: 1, transition: { duration: 0.5 } },
};

export const ApproachSection = () => {
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
          <p>
            Take the first
            <br />
            step towards realizing
            <br />
            your idea
          </p>
          <a href="#form">
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
            <motion.span
              className={s.firstLine}
              variants={leftToRight}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // 20% від видимості
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              sentir
            </motion.span>
            <motion.span
              className={s.secondLine}
              variants={rightToLeft}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // 20% від видимості
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              tailored approach
            </motion.span>
            <motion.span
              className={s.thirdLine}
              variants={leftToRight}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // 20% від видимості
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              for success
            </motion.span>
          </motion.h2>

          <div className={s.mainItems}>
            {/* Елемент 1 */}
            <motion.div
              className={`${s.topBlocks} ${s.gradient}`}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: false, amount: 0.1 }} // Зменшив amount до 0.1
              transition={{ duration: 0.8 }}
            >
              <AnimateSvgFlexibility />
              <h3>Flexibility in Engagement Models</h3>
              <p>
                Sentir offers flexible engagement models to suit different
                project needs and budgets. Whether it is a Time & Materials
                approach for evolving projects or a Fixed Price model for
                well-defined scopes, we provide options that ensure financial
                flexibility and predictability.
              </p>
            </motion.div>

            {/* Елемент 2 */}
            <motion.div
              className={`${s.topBlocks} ${s.grey}`}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: false, amount: 0.1 }} // Зменшив amount до 0.1
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3>Strong Communication and Transparency</h3>
              <p>
                Our commitment to clarity is demonstrated through consistent
                updates, interactive demo sessions, and detailed delivery
                reports, ensuring that clients are actively engaged and are
                integral to every phase of development, enhancing the
                collaborative partnership.
              </p>
            </motion.div>

            {/* Елемент 3 */}
            <motion.div
              className={s.bottomBlock}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: false, amount: 0.1 }} // Зменшив amount до 0.1
              transition={{ duration: 0.8, delay: 0.6 }}
            >
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
              <h3>Long-Term Support and Maintenance</h3>
              <p>
                Our commitment to clients extends beyond the initial project
                delivery. We offer ongoing support and maintenance to ensure
                that the solutions we develop continue to perform optimally and
                evolve with changing business needs and technological
                advancements.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Layout>
    </section>
  );
};
