import s from "./SeparateReviewBlock.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SeparateReviewBlock = ({ review }) => {
  // Контролер анімації
  const controls = useAnimation();

  // Intersection Observer
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  if (inView) {
    controls.start({ opacity: 1, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: "50px" }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={s.container}
    >
      {/* Аватар */}
      <motion.img
        className={s.reviewerAvatar}
        src={review.avatar}
        alt={review.full_name}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      />

      {/* Ім'я */}
      <motion.p
        className={s.reviewerFullname}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        {review.full_name}
      </motion.p>

      {/* Напрямок */}
      <motion.p
        className={s.reviewerDirect}
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        {review.direction}
      </motion.p>

      {/* Контент відгуку */}
      <motion.div
        className={s.reviewContent}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
      >
        <img src="/icons/gradient-quotes.svg" alt="" />
        <p>{review.review}</p>
        <img className={s.rotated} src="/icons/gradient-quotes.svg" alt="" />
      </motion.div>

      {/* Компанія */}
      <motion.div
        className={s.reviewerCompany}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
      >
        <img src={review.company_icon} alt={review.company_name} />
        <p>{review.company_name}</p>
      </motion.div>
    </motion.div>
  );
};
