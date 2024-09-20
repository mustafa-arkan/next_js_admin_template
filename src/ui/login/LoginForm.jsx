// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import styles from "./LoginForm.module.css";
// import CommonFormButton from "../buttons/CommonFormButton";
// import CustomMuiTextField from "../mui/CustomMuiTextField";
// import CustomMuiPasswordField from "../mui/CustomMuiPasswordField";
// import Link from "next/link";
// import Alert from "@mui/material/Alert";
// import { styled } from "@mui/system";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Snackbar from "@mui/material/Snackbar";
// import MuiAlert from "@mui/material/Alert";

// const StyledErrorAlert = styled(Alert)`
//   &.slide-in {
//     animation: slideIn 0.3s ease-in-out;
//   }

//   &.slide-out {
//     animation: slideOut 0.3s ease-in-out;
//   }
// `;

// const StyledSuccessAlert = styled(Alert)`
//   &.slide-in {
//     animation: slideIn 0.3s ease-in-out;
//   }

//   &.slide-out {
//     animation: slideOut 0.3s ease-in-out;
//   }
// `;

// export default function LoginForm() {
//   const router = useRouter();
//   const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);

//   const [showSuccessAlert, setShowSuccessAlert] = useState(false);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const initialValues = {
//     username: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     username: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const handleSubmit = (values) => {
//     console.log("values", values);
//     setLoading(true);
//     setTimeout(() => {
//       console.log("values", values);
//       setShowSuccessSnackbar(true);
//       setTimeout(() => {
//         router.push("/dashboard/applicants/individual/all");
//       }, 3000);
//     }, 1000);
//   };

//   const handleSuccessSnackbarClose = () => {
//     setShowSuccessSnackbar(false);
//   };

//   return (
//     <>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <div className={styles["form-field"]}>
//               <Field
//                 name="username"
//                 component={CustomMuiTextField}
//                 label="E-mail"
//               />
//             </div>

//             <div className={styles["form-field"]}>
//               <Field
//                 name="password"
//                 component={CustomMuiPasswordField}
//                 label="Password"
//               />
//             </div>

//             <div className={styles["forget-password-text"]}>
//               Forgot password?
//             </div>

//             {showSuccessAlert ? (
//               <StyledSuccessAlert
//                 severity="success"
//                 className={showSuccessAlert ? "slide-in" : "slide-out"}
//               >
//                 Login successful!
//               </StyledSuccessAlert>
//             ) : null}

//             {error ? (
//               <StyledErrorAlert
//                 severity="error"
//                 className={error ? "slide-in" : "slide-out"}
//               >
//                 {error}
//               </StyledErrorAlert>
//             ) : null}

//             <CommonFormButton text="SignIn" loading={loading} />
//             <div className={styles["text-after-submit"]}>
//               Wants to Create an account ?{" "}
//               <Link href="/registration">
//                 {" "}
//                 <span className={styles["bold-text"]}>Register Now</span>{" "}
//               </Link>{" "}
//             </div>
//           </Form>
//         )}
//       </Formik>

//       <Snackbar
//         open={showSuccessSnackbar}
//         autoHideDuration={3000}
//         onClose={handleSuccessSnackbarClose}
//       >
//         <MuiAlert
//           elevation={6}
//           variant="filled"
//           onClose={handleSuccessSnackbarClose}
//           severity="success"
//         >
//           Login successful!
//         </MuiAlert>
//       </Snackbar>
//     </>
//   );
// }
//implement jwt
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";
import CommonFormButton from "../buttons/CommonFormButton";
import CustomMuiTextField from "../mui/CustomMuiTextField";
import CustomMuiPasswordField from "../mui/CustomMuiPasswordField";
import Link from "next/link";
import Alert from "@mui/material/Alert";
import { styled } from "@mui/system";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const StyledErrorAlert = styled(Alert)`
  &.slide-in {
    animation: slideIn 0.3s ease-in-out;
  }

  &.slide-out {
    animation: slideOut 0.3s ease-in-out;
  }
`;

const StyledSuccessAlert = styled(Alert)`
  &.slide-in {
    animation: slideIn 0.3s ease-in-out;
  }

  &.slide-out {
    animation: slideOut 0.3s ease-in-out;
  }
`;

export default function LoginForm() {
  const router = useRouter();
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        // Store JWT in localStorage
        localStorage.setItem("token", data.token);
        setShowSuccessSnackbar(true);
        setTimeout(() => {
          router.push("/dashboard/applicants/individual/all");
        }, 3000);
      } else {
        setError(data.error || "An error occurred");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessSnackbarClose = () => {
    setShowSuccessSnackbar(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles["form-field"]}>
              <Field
                name="username"
                component={CustomMuiTextField}
                label="E-mail"
              />
            </div>

            <div className={styles["form-field"]}>
              <Field
                name="password"
                component={CustomMuiPasswordField}
                label="Password"
              />
            </div>

            <div className={styles["forget-password-text"]}>
              Forgot password?
            </div>

            {showSuccessAlert ? (
              <StyledSuccessAlert
                severity="success"
                className={showSuccessAlert ? "slide-in" : "slide-out"}
              >
                Login successful!
              </StyledSuccessAlert>
            ) : null}

            {error ? (
              <StyledErrorAlert
                severity="error"
                className={error ? "slide-in" : "slide-out"}
              >
                {error}
              </StyledErrorAlert>
            ) : null}

            <CommonFormButton text="SignIn" loading={loading} />
            <div className={styles["text-after-submit"]}>
              Want to create an account?{" "}
              <Link href="/registration">
                <span className={styles["bold-text"]}>Register Now</span>
              </Link>
            </div>
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
          Login successful!
        </MuiAlert>
      </Snackbar>
    </>
  );
}
