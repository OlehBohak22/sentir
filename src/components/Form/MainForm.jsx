import { Field, Form, Formik } from "formik";
import { useState } from "react";
// import * as Yup from "yup";
import { toast } from "react-toastify"; // Імпортуємо react-toastify
import "react-toastify/dist/ReactToastify.css"; // Стилі toast
import s from "./MainForm.module.css";
import { postData, getToken } from "../../services/api";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

export const MainForm = ({ closePopup }) => {
  const [fileName, setFileName] = useState("Upload File");
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    text: "",
    nda: false,
  };

  // const validationSchema = Yup.object({
  //   name: Yup.string().required("Name is required"),
  //   email: Yup.string()
  //     .email("Invalid email address")
  //     .required("Email is required"),
  //   text: Yup.string().required("This field is required"),
  // });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "Upload File");
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { name, email, text } = values;

    if (!name || !email || !text) {
      toast.error(
        "The 'Name', 'Email', and 'How can we help you?' fields are required!"
      );
      setSubmitting(false);
      return;
    }

    try {
      const token = await getToken("admin_projection", "mkGp6Rpv5$On7BR&VU");

      const formData = new FormData();
      formData.append("name", values.name || "");
      formData.append("email", values.email || "");
      formData.append("text", values.text || "");
      formData.append("nda", values.nda);

      const fileInput = document.querySelector("#file-upload");
      if (fileInput && fileInput.files.length > 0) {
        formData.append("file", fileInput.files[0]);
      }

      const response = await postData(
        token,
        "wp-json/responses/v1/endpoint",
        formData
      );

      console.log(response);

      resetForm();
      setFileName("Upload File");

      if (closePopup) {
        closePopup();
        navigate("/thanks-page");
      } else {
        navigate("/thanks-page");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again!");
    } finally {
      setSubmitting(false);
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
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
                  onChange={handleFileChange}
                />
                <span className={s.uploadIcon}>
                  <img src="/icons/file-icon.svg" alt="" />
                  <img src="/icons/add-file-icon.svg" alt="" />
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
                <span>{isSubmitting ? "Sending" : "SEND"}</span>
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
    </>
  );
};

export const TestToast = () => {
  const handleClick = () => {
    toast.error("Test error message!");
  };

  return <button onClick={handleClick}>Show Toast</button>;
};
