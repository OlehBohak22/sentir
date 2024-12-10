import s from "./CaseDetails.module.css";
import { Layout } from "../../components/Layout/Layout";

export const CaseDetails = ({ details }) => {
  return (
    <section className={s.section}>
      <Layout className={s.container}>
        <div className={s.caseDesc}>
          <p>{details.case_description}</p>
        </div>
        <div className={s.caseDetails}>
          {details.url_hyperlink ? (
            <div className={s.detailsBlock}>
              <span>Website:</span>
              <a href={details.url_hyperlink} target="_blank">
                {details.text_hyperlink}
              </a>
            </div>
          ) : (
            ""
          )}

          {details.service ? (
            <div className={s.detailsBlock}>
              <span>Service:</span>
              <p>{details.service}</p>
            </div>
          ) : (
            ""
          )}

          {details.industries ? (
            <div className={s.detailsBlock}>
              <span>Industries:</span>
              <p>{details.industries}</p>
            </div>
          ) : (
            ""
          )}

          {details.location ? (
            <div className={s.detailsBlock}>
              <span>Location:</span>
              <p>{details.location}</p>
            </div>
          ) : (
            ""
          )}

          {details.platforms ? (
            <div className={s.detailsBlock}>
              <span>Platforms:</span>
              <p>{details.platforms}</p>
            </div>
          ) : (
            ""
          )}

          {details.timeline ? (
            <div className={s.detailsBlock}>
              <span>Timeline:</span>
              <p>{details.timeline}</p>
            </div>
          ) : (
            ""
          )}

          {details.mvp_in_numbers ? (
            <div className={s.detailsBlock}>
              <span>MVP in numbers:</span>
              <p>{details.mvp_in_numbers}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </Layout>
    </section>
  );
};
