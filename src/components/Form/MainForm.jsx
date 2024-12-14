import { Field, Form, Formik } from "formik";
import s from "./MainForm.module.css";

export const MainForm = () => {
  const initialValues = {
    name: undefined,
    email: undefined,
    text: undefined,
  };

  return (
    <Formik initialValues={initialValues}>
      <Form>
        <p className={s.formTitle}>
          Leave your contacts to get
          <br /> a free-of-charge project kick-off
        </p>

        <div className={s.shortInputs}>
          <div className={s.hoverContainer}>
            <Field
              className={s.input}
              id="name"
              name="name"
              type="text"
              placeholder=""
            />
            <label className={s.label} htmlFor="name">
              Name
            </label>
          </div>

          <div className={s.hoverContainer}>
            <Field
              className={s.input}
              id="email"
              name="email"
              type="email"
              placeholder=""
            />
            <label className={s.label} htmlFor="email">
              Email
            </label>
          </div>
        </div>

        <div className={s.hoverContainer}>
          <div className="relative flex flex-col-reverse mb-[8.5vw] lg:mb-[2.4vw]">
            <Field
              className={s.input}
              id="text"
              name="text"
              type="text"
              placeholder=""
            />
            <label className={s.label} htmlFor="text">
              How can we help you?
            </label>
          </div>
        </div>

        <div className={s.uploadContainer}>
          <label className={s.uploadLabel} htmlFor="file-upload">
            Upload File
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className={s.uploadInput}
            />
            <span className={s.uploadIcon}>
              <img src="/icons/file-icon.svg" alt="" />
            </span>
          </label>
        </div>

        <div className={s.sendContainer}>
          <div className={s.checkboxContainer}>
            <label htmlFor="checkbox">
              <Field id="checkbox" name="nda" type="checkbox" />
              <span className={s.checkmark}></span>
              Send me an NDA
            </label>
          </div>

          <button className={s.btn} type="submit">
            <span>SEND</span>
            <img src="/icons/swiper-arrow-next.svg" alt="Arrow" />
          </button>
        </div>
      </Form>
    </Formik>
  );
};
