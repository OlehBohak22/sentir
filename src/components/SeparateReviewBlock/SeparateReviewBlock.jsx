import s from "./SeparateReviewBlock.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedHeadingFaster } from "../AnimatedHeading/AnimatedHeading";

export const SeparateReviewBlock = ({ review }) => {
  // Intersection Observer
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: "easeOut", delay },
  });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate="animate"
      className={s.container}
    >
      <div className="flex justify-center items-center gap-[3.7vw]">
        <div>
          <motion.div {...fadeUp(0)}>
            <img
              className={s.reviewerAvatar}
              src={review.avatar}
              alt={review.full_name}
            />
          </motion.div>
          <motion.div {...fadeUp(0.2)}>
            <p className={s.reviewerFullname}>{review.full_name}</p>
          </motion.div>
          <motion.div {...fadeUp(0.4)}>
            <p className={s.reviewerDirect}>{review.direction}</p>
          </motion.div>
        </div>

        {review.avatar_second &&
          review.full_name_second &&
          review.direction_second && (
            <div>
              <motion.div {...fadeUp(0)}>
                <img
                  className={s.reviewerAvatar}
                  src={review.avatar_second}
                  alt={review.full_name}
                />
              </motion.div>
              <motion.div {...fadeUp(0.2)}>
                <p className={s.reviewerFullname}>{review.full_name_second}</p>
              </motion.div>
              <motion.div {...fadeUp(0.4)}>
                <p className={s.reviewerDirect}>{review.direction_second}</p>
              </motion.div>
            </div>
          )}
      </div>

      <motion.div {...fadeUp(0.6)} className={s.reviewContent}>
        <img src="/icons/gradient-quotes.svg" alt="" />
        <p>
          <AnimatedHeadingFaster
            text={
              review?.review?.includes("<br") ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: review?.review?.includes("<br")
                      ? review.review.replace(/<br\s*\/?>/g, "<br /> ")
                      : review?.review,
                  }}
                />
              ) : (
                review.review
              )
            }
          />
        </p>
        <img className={s.rotated} src="/icons/gradient-quotes.svg" alt="" />
      </motion.div>
      <motion.div {...fadeUp(0.8)}>
        <div className={s.reviewerCompany}>
          <img src={review.company_icon} alt={review.company_name} />
          <p>{review.company_name}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
