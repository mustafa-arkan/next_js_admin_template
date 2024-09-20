// "use client";
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import styles from "./RegisterForm.module.css";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// const RegisterForm = () => {
//   return (
//     <>
//       <Formik>
//         <Form className={styles["register_form"]}>
//           <div className={styles["input_field"]}>
//             <label htmlFor="email">Email</label>
//             <Field
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               className={styles["input_box"]}
//             />
//             <ErrorMessage name="email" component="div" />
//           </div>

//           <div className={styles["input_field"]}>
//             <label htmlFor="username">Username</label>
//             <Field
//               type="text"
//               id="username"
//               name="username"
//               placeholder="Enter your user name"
//               className={styles["input_box"]}
//             />
//             <ErrorMessage name="username" component="div" />
//           </div>

//           <div className={styles["input_field"]}>
//             <label htmlFor="password">Password</label>

//             <div className={styles["pass_box"]}>
//               <Field
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Enter your Password"
//                 className={styles["input_box"]}
//               />
//               <div className={styles["pass_eye_container"]}>
//                 <RemoveRedEyeIcon />
//                 <VisibilityOffIcon />
//               </div>
//             </div>

//             <ErrorMessage name="password" component="div" />
//           </div>

//           <div className={styles["input_field"]}>
//             <label htmlFor="confirmPassword">Confirm Password</label>

//             <div className={styles["pass_box"]}>
//               <Field
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 placeholder="Confrim your Password"
//                 className={styles["input_box"]}
//               />
//               <div className={styles["confirm_eye_container"]}>
//                 <RemoveRedEyeIcon />
//                 <VisibilityOffIcon />
//               </div>
//             </div>
//             <ErrorMessage name="confirmPassword" component="div" />
//           </div>

//           <button type="submit" className={styles["signup_btn"]}>
//             Sign Up
//           </button>
//         </Form>
//       </Formik>
//     </>
//   );
// };

// export default RegisterForm;
//======================================== Raw Design Code(only design no functionality) =============================//
"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./RegisterForm.module.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CommonFormButton from "../buttons/CommonFormButton";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const RegisterForm = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassVisible, setConfirmPassVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);

  const initialValues = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values, actions) => {
    console.log("values", values);
    setLoading(true);
    setTimeout(() => {
      console.log("values", values);
      setShowSuccessSnackbar(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    }, 1000);
  };

  const handleSuccessSnackbarClose = () => {
    setShowSuccessSnackbar(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue, setFieldTouched }) => (
          <Form className={styles["register_form"]}>
            <div className={styles["input_field"]}>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className={`${styles["input_box"]} ${
                  touched.email && errors.email ? styles["error"] : ""
                }`}
                onChange={(e) => {
                  setFieldValue("email", e.target.value);
                  setFieldTouched("email", true, false);
                }}
              />
              {touched.email && errors.email && (
                <div className={styles["error_message"]}>{errors.email}</div>
              )}
            </div>

            <div className={styles["input_field"]}>
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter your user name"
                className={`${styles["input_box"]} ${
                  touched.username && errors.username ? styles["error"] : ""
                }`}
                onChange={(e) => {
                  setFieldValue("username", e.target.value);
                  setFieldTouched("username", true, false);
                }}
              />
              {touched.username && errors.username && (
                <div className={styles["error_message"]}>{errors.username}</div>
              )}
            </div>

            <div className={styles["input_field"]}>
              <label htmlFor="password">Password</label>

              <div className={styles["pass_box"]}>
                <Field
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your Password"
                  className={`${styles["input_box"]} ${
                    touched.password && errors.password ? styles["error"] : ""
                  }`}
                  onChange={(e) => {
                    setFieldValue("password", e.target.value);
                    setFieldTouched("password", true, false);
                  }}
                />
                <div
                  className={styles["pass_eye_container"]}
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <VisibilityOffIcon />
                  ) : (
                    <RemoveRedEyeIcon />
                  )}
                </div>
              </div>

              {touched.password && errors.password && (
                <div className={styles["error_message"]}>{errors.password}</div>
              )}
            </div>

            <div className={styles["input_field"]}>
              <label htmlFor="confirmPassword">Confirm Password</label>

              <div className={styles["pass_box"]}>
                <Field
                  type={confirmPassVisible ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your Password"
                  className={`${styles["input_box"]} ${
                    touched.confirmPassword && errors.confirmPassword
                      ? styles["error"]
                      : ""
                  }`}
                  onChange={(e) => {
                    setFieldValue("confirmPassword", e.target.value);
                    setFieldTouched("confirmPassword", true, false);
                  }}
                />
                <div
                  className={styles["confirm_eye_container"]}
                  onClick={() => setConfirmPassVisible(!confirmPassVisible)}
                >
                  {confirmPassVisible ? (
                    <VisibilityOffIcon />
                  ) : (
                    <RemoveRedEyeIcon />
                  )}
                </div>
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <div className={styles["error_message"]}>
                  {errors.confirmPassword}
                </div>
              )}
            </div>

            <CommonFormButton
              text="SignUp"
              loading={loading}
              className={styles["signup_btn"]}
            />
            {/* <button
              loading={loading}
              className={styles["signup_btn"]}
              style={{
                background: theme.colors.authBtnBg,
                color: theme.colors.authBtnColor,
              }}
            >
              SignUp
            </button> */}
          </Form>
        )}
      </Formik>
      <Snackbar
        open={showSuccessSnackbar}
        autoHideDuration={3000}
        onClose={handleSuccessSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSuccessSnackbarClose}
          severity="success"
        >
          Register successful!
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default RegisterForm;
