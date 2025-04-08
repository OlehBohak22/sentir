import { DiscussBtn } from "../DiscussBtn/DiscussBtn";
import { Layout } from "../Layout/Layout";
import s from "./ApproachSection.module.css";
import {
  AnimateSvgFlexibility,
  AnimateSvgHands,
} from "../AninmateSvgLine/AninmateSvgLine";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const ApproachSection = ({ openPopup, isPopupOpen }) => {
  const [isStickyFixed, setIsStickyFixed] = useState(false);

  useEffect(() => {
    // Змінюємо позицію на fixed, якщо попап відкритий
    if (isPopupOpen) {
      setIsStickyFixed(true);
    } else {
      setTimeout(() => {
        setIsStickyFixed(false);
      }, 300); // Таймер для плавного переходу
    }
  }, [isPopupOpen]);

  return (
    <section className={s.section}>
      <Layout className={s.approachContainer}>
        {/* Ротуючий текст */}
        <motion.div
          className={s.rotatingTextBlock}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
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
        <div
          className={`${s.leftSideContent} ${
            isStickyFixed ? s.fixedPosition : ""
          }`}
        >
          <p data-aos="fade-up" data-aos-duration="800">
            Take the first
            <br />
            step towards realizing
            <br />
            your idea
          </p>
          <div
            onClick={() => openPopup()}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <DiscussBtn>Discuss a project</DiscussBtn>
          </div>
        </div>

        {/* Головний контент */}
        <motion.div
          className={s.mainContent}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <motion.h2 className={s.title}>
            <span
              data-aos="fade-right"
              data-aos-duration="800"
              className={s.firstLine}
            >
              sentir
            </span>
            <span
              data-aos="fade-left"
              data-aos-duration="800"
              className={s.secondLine}
            >
              tailored approach
            </span>
            <span
              data-aos="fade-right"
              data-aos-duration="800"
              className={s.thirdLine}
            >
              for success
            </span>
          </motion.h2>

          <div className={s.mainItems}>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className={`${s.topBlocks} ${s.gradient}`}
            >
              <AnimateSvgFlexibility />
              <h3>Flexibility in Engagement Models</h3>
              <p>
                Sentir offers flexible engagement models to suit different
                project needs and budgets.
                <br /> Whether it is a Time & Materials approach for evolving
                projects or a Fixed Price model for well-defined scopes, we
                provide options that ensure financial flexibility and
                predictability.
              </p>
            </div>

            {/* Елемент 2 */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className={`${s.topBlocks} ${s.grey}`}
            >
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
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className={s.bottomBlock}
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
              <h3>
                <AnimatedHeading text="Long-Term Support and Maintenance"></AnimatedHeading>
              </h3>
              <p data-aos="fade-up" data-aos-duration="800">
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
