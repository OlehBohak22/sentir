import { companyes } from "../../services/fake-api";
import s from "./CompanyList.module.css";

export const CompanyList = () => {
  return (
    <div className={s.companyContainer}>
      <h2>Companies That Drive Us Forward</h2>

      <ul>
        {companyes.map((company) => (
          <li key={company.id}>
            <img src={company.logo} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};
