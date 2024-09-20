import styles from "./not-found.module.css";

const NotFound = () => {
  return (
    <div className={styles["background"]}>
      {/* <div className={styles["background"]}></div> */}
      <div className={styles["top"]}>
        <h1 className={styles["four_four"]}>
          4 <span>0</span> 4
        </h1>
        <h6 className={styles["page_not"]}>page not found</h6>
      </div>
      <div className={styles["container"]}>
        <div className={styles["ghost-copy"]}>
          <div className={styles["one"]}></div>
          <div className={styles["two"]}></div>
          <div className={styles["three"]}></div>
          <div className={styles["four"]}></div>
        </div>
        <div className={styles["ghost"]}>
          <div className={styles["face"]}>
            <div className={styles["eye"]}></div>
            <div className={styles["eye-right"]}></div>
            <div className={styles["mouth"]}></div>
          </div>
        </div>
        <div className={styles["shadow"]}></div>
      </div>
      <div className={styles["bottom"]}>
        <p className={styles["boo"]}>
          Boo, looks like a ghost stole this page!
        </p>

        <div c className={styles["buttons"]}>
          <button className={styles["btn"]}>Back</button>
          <button className={styles["btn"]}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
