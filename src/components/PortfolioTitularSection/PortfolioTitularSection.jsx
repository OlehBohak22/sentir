import { Layout } from "../Layout/Layout";
import s from "./PortfolioTitularSection.module.css";

export const PortfolioTitularSection = ({ titulInfo }) => {
  return (
    <Layout>
      <div
        className={s.titularContainer}
        style={{ backgroundImage: `url(${titulInfo.image})` }}
      >
        <div className={s.arrow}>
          <img
            className={s.arrowImage}
            src="/icons/custom-arrow.png"
            alt="Cursor"
          />
        </div>
        <div className={s.titularContent}>
          <p>{titulInfo.description}</p>
          <ul>
            {titulInfo.features.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <h3>{titulInfo.name}</h3>
        </div>
      </div>
    </Layout>
  );
};
