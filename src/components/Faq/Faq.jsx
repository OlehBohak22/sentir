import { getData } from "../../services/api";
import s from "./Faq.module.css";

import { useEffect, useState } from "react";

const Faq = ({ token }) => {
  // Початкове значення стану — порожній масив
  const [questions, setQuestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // Для відстеження відкритої секції

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getData(token, "wp-json/wp/v2/faqs");
        setQuestions(res || []); // Встановлення даних, якщо вони є, або порожнього масиву
      } catch (error) {
        console.log("Помилка завантаження FAQ:", error.message);
      }
    };

    fetchQuestions();
  }, [token]);

  // Функція перемикання активної секції
  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={s.accordion}>
      {/* Перевірка на наявність питань */}
      {questions.length > 0 ? (
        questions.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor:
                activeIndex === index ? "rgba(255, 255, 255, 0.2)" : "", // Перевірка конкретного індекса
              transition: "transform 0.3s ease", // Анімація обертання
            }}
            className={s.section}
          >
            <div className={s.header} onClick={() => toggleSection(index)}>
              <img
                style={{
                  transform:
                    activeIndex === index ? "rotate(180deg)" : "rotate(0deg)", // Перевірка конкретного індекса
                  transition: "transform 0.3s ease", // Анімація обертання
                }}
                src="/icons/faq-arrow.svg"
                alt="Arrow"
              />
              <h3>{item.faq_question}</h3>
            </div>
            {activeIndex === index && (
              <div className={s.content}>
                <p>{item.faq_answer}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Немає доступних запитань.</p> // Повідомлення, якщо список порожній
      )}
    </div>
  );
};

export default Faq;
