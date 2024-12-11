import s from "./CaseHorizontalSection.module.css";

export const CaseHorizontalSection = ({ cases }) => {
  // Розпарсити JSON з поля "data-table-1"
  const dataTable1 = cases["data-table-1"]
    ? JSON.parse(cases["data-table-1"])
    : {};

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.horizontalBlocks}>
          <div className={s.block}>
            {Object.values(dataTable1).map((item, index) => (
              <div key={index} className={s.item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
