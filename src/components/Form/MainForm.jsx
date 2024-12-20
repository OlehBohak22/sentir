import { Field, Form, Formik } from "formik";
import s from "./MainForm.module.css";
import { postData, getToken } from "../../services/api"; // Імпортуємо функції

export const MainForm = () => {
  const initialValues = {
    name: "",
    email: "",
    text: "",
    nda: false,
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const token = await getToken("admin_projection", "mkGp6Rpv5$On7BR&VU");

      const formData = new FormData();
      formData.append("name", values.name || ""); // Перевірка та додавання
      formData.append("email", values.email || "");
      formData.append("text", values.text || "");
      formData.append("nda", values.nda);

      // Отримання файлу
      const fileInput = document.querySelector("#file-upload");
      if (fileInput && fileInput.files.length > 0) {
        formData.append("file", fileInput.files[0]);
      }

      console.log("Form Data:", Array.from(formData.entries()));

      const response = await postData(
        token,
        "wp-json/responses/v1/endpoint",
        formData
      );

      console.log("Response from server:", response);
      alert("Form submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <p className={s.formTitle}>
            Leave your contacts to get
            <br />
            <span>a free-of-charge project kick-off</span>
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

            <button className={s.btn} type="submit" disabled={isSubmitting}>
              <span>{isSubmitting ? "Sending..." : "SEND"}</span>
              <img src="/icons/swiper-arrow-next.svg" alt="Arrow" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
