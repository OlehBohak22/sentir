import s from "./ServicesPage.module.css";
import { Layout } from "../../components/Layout/Layout";
import { ServicesTabs } from "../../components/ServicesTabs/ServicesTabs";
import { StackSection } from "../../components/StackSection/StackSection";
import { FormSection } from "../../components/FormSection/FormSection";
import { ClientsTalk } from "../../components/ClientsTalk/ClientsTalk";
import { motion } from "framer-motion"; // Імпортуємо motion

export const ServicesPage = ({ token }) => {
  // Варіанти анімації
  const fadeInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <main>
      <section className={s.heroSection}>
        <Layout>
          <motion.div
            className={s.titleContainer}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: false, amount: 0.3 }} // Анімація при скролі
          >
            <motion.h1>OUR SERVICES</motion.h1>
            <p>Harmonizing innovation and empathy</p>
          </motion.div>

          <motion.p
            className={s.gradientText}
            initial="hidden"
            whileInView="visible"
            variants={fadeInVariants}
            viewport={{ once: false, amount: 0.3 }}
          >
            We partner with everyone from innovative startups to established
            enterprises, crafting products that people love.
          </motion.p>
        </Layout>
      </section>

      <ServicesTabs token={token} />

      <StackSection />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ClientsTalk token={token} />
      </motion.div>

      <FormSection />
    </main>
  );
};
