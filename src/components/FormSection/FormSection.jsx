import { Layout } from "../../components/Layout/Layout";
import { AnimateSvgForm } from "../AninmateSvgLine/AninmateSvgLine";
import { MainForm } from "../Form/MainForm";
import s from "./FormSection.module.css";

export const FormSection = () => {
  return (
    <section className={s.section}>
      <div>
        <AnimateSvgForm />
      </div>
      <Layout className={s.container}>
        <div>
          <h2 className={s.title}>
            Drop us
            <br /> a line
          </h2>
        </div>

        <MainForm />
      </Layout>
    </section>
  );
};
