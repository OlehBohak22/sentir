import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import s from "./ErrorPage.module.css";

export const ErrorPage = () => {
  return (
    <main>
      <section className={s.heroSection}>
        <Layout>
          <div className={s.titleContainer}>
            <h1>404</h1>
            <p>
              Oops! It looks like the page you're looking for doesn't exist...
            </p>
          </div>

          <Link to="/">
            <div className={s.heroHoverLink}>Back to Home</div>
          </Link>
        </Layout>
      </section>
    </main>
  );
};
