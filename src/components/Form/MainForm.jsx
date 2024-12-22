import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup"; // Імпортуємо для валідації
import s from "./MainForm.module.css";
import { postData, getToken } from "../../services/api"; // Імпортуємо функції
import { toast, ToastContainer } from "react-toastify"; // Імпортуємо бібліотеку для повідомлень
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer"; // Імпортуємо для виявлення видимості елементів

import "./MainForm.css";

export const MainForm = () => {
  const [fileName, setFileName] = useState("Upload File"); // Стан для відображення назви файлу

  const initialValues = {
    name: "",
    email: "",
    text: "",
    nda: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    text: Yup.string().required("This field is required"),
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "Upload File");
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
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        progressClassName: "Toastify__progress-bar--success",
      });
      resetForm();
      setFileName("Upload File"); // Скидання назви файлу після відправки форми
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit the form. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        progressClassName: "Toastify__progress-bar--error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Використовуємо хук для виявлення, коли елемент входить в область видимості
  const { ref, inView } = useInView({
    triggerOnce: false, // Тільки один раз
    threshold: 0.1, // Відслідковуємо, коли 10% елемента з'являється на екрані
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div className={s.formTitle}>
              Leave your contacts to get
              <div className="relative w-[fit-content]" ref={ref}>
                <p>a free-of-charge project kick-off</p>
                <div className={`${s.overlay} ${inView ? s.active : ""}`}></div>
              </div>
            </div>

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
                {errors.name && touched.name && (
                  <div className={s.error}>{errors.name}</div>
                )}
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
                {errors.email && touched.email && (
                  <div className={s.error}>{errors.email}</div>
                )}
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
                {errors.text && touched.text && (
                  <div className={s.error}>{errors.text}</div>
                )}
              </div>
            </div>

            <div className={s.uploadContainer}>
              <label className={s.uploadLabel} htmlFor="file-upload">
                {fileName}
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className={s.uploadInput}
                  onChange={handleFileChange} // Додаємо обробник події
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
                <div className={s.arrowsLine}>
                  <div className={s.arrows}>
                    <img src="/icons/swiper-arrow-next.svg" alt="Arrow" />
                    <img src="/icons/swiper-arrow-next.svg" alt="Arrow" />
                  </div>
                </div>
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};
