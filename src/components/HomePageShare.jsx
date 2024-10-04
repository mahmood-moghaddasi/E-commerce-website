import styles from "./HomePageShare.module.css";
function HomePageShare() {
  return (
    <div className={styles.container}>
      <div>
        <p>Share your setup with</p>
        <h1>#FuniroFurniture</h1>
      </div>
      <div className={styles.pictures}>
        <div className={styles.p1}>
          <img src="../../public/images/shares/pic-mid.png" alt="" />
        </div>
        <div className={styles.p2}>
          <img src="../../public/images/shares/pic-tall-02.png" alt="" />
        </div>
        <div className={styles.p3}>
          <img src="../../public/images/shares/pic-01.png" alt="" />
        </div>
        <div className={styles.p4}>
          {" "}
          <img src="../../public/images/shares/pic-02.png" alt="" />
        </div>
        <div className={styles.p5}>
          {" "}
          <img src="../../public/images/shares/pic-tall-01.png" alt="" />
        </div>
        <div className={styles.p6}>
          {" "}
          <img src="../../public/images/shares/pic-tall-03.png" alt="" />
        </div>
        <div className={styles.p7}>
          {" "}
          <img src="../../public/images/shares/pic-03.png" alt="" />
        </div>
        <div className={styles.p8}>
          {" "}
          <img src="../../public/images/shares/pic-mid.png" alt="" />
        </div>
        <div className={styles.p9}>
          <img src="../../public/images/shares/pic-tall-01.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePageShare;
