import Image from "next/image";
import authBgImage from "../../../public/images/auth-pages/auth_bg.png";
import styles from "./page.module.css";
import RegisterForm from "@/ui/register/RegisterForm";

export default function RegistrationPage() {
  return (
    <>
      <div className={styles["register_section"]}>
        <div className={styles["left_container"]}>
          <div className={styles["brand_image"]}>
            <Image
              src={authBgImage}
              alt="Auth Background Image"
              fill
              sizes="100vw"
              priority
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        <div className={styles["right_container"]}>
          <div className={styles["auth_form"]}>
            {/* <div className={styles["form_logo"]}>
              <Image
                src="/images/Logoicon.png"
                width={130}
                height={30}
                alt="ico"
                layout="responsive"
              />
            </div> */}
            <div className={styles["form_title_1"]}>
              Hello! lets get started
            </div>
            <div className={styles["form_title_2"]}>Sign up to continue.</div>

            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}
