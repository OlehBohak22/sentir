import { Layout } from "../../components/Layout/Layout";
import { AnimateSvgForm } from "../AninmateSvgLine/AninmateSvgLine";
import { MainForm } from "../Form/MainForm";
import s from "./FormSection.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedHeading } from "../AnimatedHeading/AnimatedHeading";

export const FormSection = () => {
  const titleControls = useAnimation();
  const formControls = useAnimation();

  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  if (titleInView) {
    titleControls.start({ opacity: 1, y: 0 });
  }

  const [formRef, formInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  if (formInView) {
    formControls.start({ opacity: 1, y: 0 });
  }

  return (
    <section id="form" className={s.section}>
      {/* SVG-анімація */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <AnimateSvgForm />
      </motion.div>

      <Layout className={s.container}>
        {/* Заголовок із анімацією */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: "50px" }}
          animate={titleControls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={s.title}>
            <AnimatedHeading text="Drop us a line " />
          </h2>
        </motion.div>

        {/* Форма з анімацією */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: "50px" }}
          animate={formControls}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <MainForm />
        </motion.div>
      </Layout>
    </section>
  );
};
