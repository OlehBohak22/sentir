import { useEffect, useState, useRef } from "react";
import { getData } from "../../services/api";
import s from "./Faq.module.css";

const Faq = ({ token }) => {
  const [questions, setQuestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]); // Створюємо масив рефів для контенту

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getData(token, "wp-json/wp/v2/faqs");
        setQuestions(res || []);
      } catch (error) {
        console.log("Error", error.message);
      }
    };

    fetchQuestions();
  }, [token]);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getMaxHeight = (index) => {
    if (activeIndex === index) {
      const isMobile = window.innerWidth <= 768;
      return `${
        contentRefs.current[index]?.scrollHeight + (isMobile ? 50 : 0)
      }px`; // Збільшуємо висоту на мобільних
    }
    return "0";
  };

  return (
    <div className={s.accordion}>
      <h2>FAQ</h2>
      {questions.length > 0 ? (
        questions.map((item, index) => (
          <div
            key={index}
            className={`${s.section} ${activeIndex === index ? s.active : ""}`}
          >
            <div className={s.header} onClick={() => toggleSection(index)}>
              <img
                style={{
                  transform:
                    activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
                src="/icons/faq-arrow.svg"
                alt="Arrow"
              />
              <h3>{item.faq_question}</h3>
            </div>
            <div
              className={s.content}
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight: getMaxHeight(index), // Визначаємо висоту через функцію
                paddingTop: activeIndex === index ? "0.3vw" : "0", // Паддінг по звичайному
                paddingBottom: activeIndex === index ? "4vw" : "0",
                transition: "max-height 0.3s ease, padding 0.3s ease",
                overflow: "hidden",
              }}
            >
              <p>{item.faq_answer}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Not available</p>
      )}
    </div>
  );
};

export default Faq;
