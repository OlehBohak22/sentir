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
        console.log("Помилка завантаження FAQ:", error.message);
      }
    };

    fetchQuestions();
  }, [token]);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
                maxHeight:
                  activeIndex === index
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : "0", // Якщо не активна, висота 0
                paddingTop: activeIndex === index ? "0.3vw" : "0", // Додаємо паддінг тільки коли розгорнуто
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
        <p>Немає доступних запитань.</p>
      )}
    </div>
  );
};

export default Faq;
