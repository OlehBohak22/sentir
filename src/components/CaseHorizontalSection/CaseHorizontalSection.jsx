import styles from "./CaseHorizontalSection.module.css";

export const CaseHorizontalSection = ({ cases }) => {
  const data = [
    {
      title: "Challenges",
      content: "Description of challenges goes here...",
      image: cases.case_pictures_1,
    },
    {
      title: "Involvement",
      content: "Description of involvement goes here...",
      image: cases.case_pictures_2,
    },
    {
      title: "Results",
      content: "Description of results goes here...",
      image: cases.case_pictures_3,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.scrollContainer}>
        {data.map((item, index) => (
          <div key={index} className={styles.item}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.content}>{item.content}</p>
            <img className={styles.image} src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
