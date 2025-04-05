import { motion } from "framer-motion";
import { useMemo, useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AnimatedHeading.css";

export const AnimatedHeading = ({ text }) => {
  const letters = useMemo(() => text.split(""), [text]);

  const container = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const child = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="animated-heading"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="letter"
          variants={child}
          style={{ willChange: "transform, opacity" }}
        >
          {letter === " " ? "\u00A0" : letter}{" "}
        </motion.span>
      ))}
    </motion.div>
  );
};

gsap.registerPlugin(ScrollTrigger);

export const AnimatedHeadingFaster = ({ text }) => {
  useEffect(() => {
    if (!text) return;

    const splitInstance = new SplitType(".animated-heading-faster", {
      types: "words",
      tagName: "span",
    });

    document
      .querySelectorAll(".animated-heading-faster .word")
      .forEach((word, index, words) => {
        if (word.textContent === " " && index < words.length - 1) {
          word.innerHTML = "&nbsp;";
        }
      });

    const createAnimation = () => {
      const blocks = document.querySelectorAll(".animated-heading-faster");

      blocks.forEach((block) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "-200vw center",
            end: "bottom center",
            scrub: 1,
          },
        });

        tl.fromTo(
          block.querySelectorAll(".word"),
          { opacity: 0.1 },
          { opacity: 1, stagger: 0.02, duration: 1, ease: "power3.out" }
        );
      });
    };

    createAnimation();

    let windowWidth = window.innerWidth;
    const onResize = () => {
      if (windowWidth !== window.innerWidth) {
        windowWidth = window.innerWidth;
        splitInstance.revert();
        new SplitType(".animated-heading-faster", { types: "words" });
        createAnimation();
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      splitInstance.revert();
    };
  }, [text]);

  return <div className="animated-heading-faster split-lines">{text}</div>;
};
