import s from "./ServicesPage.module.css";
import { Layout } from "../../components/Layout/Layout";
import { ServicesTabs } from "../../components/ServicesTabs/ServicesTabs";
import { StackSection } from "../../components/StackSection/StackSection";
import { FormSection } from "../../components/FormSection/FormSection";
import { ClientsTalk } from "../../components/ClientsTalk/ClientsTalk";

export const ServicesPage = ({ token }) => {
  return (
    <main>
      <section className={s.heroSection}>
        <Layout>
          <div className={s.titleContainer}>
            <h1>OUR SERVICES</h1>
            <p>Harmonizing innovation and empathy</p>
          </div>

          <p className={s.gradientText}>
            We partner with everyone from innovative startups to established
            enterprises, crafting products that people love.
          </p>
        </Layout>
      </section>

      <ServicesTabs token={token} />

      <StackSection />

      <ClientsTalk token={token} />

      <FormSection />
    </main>
  );
};
