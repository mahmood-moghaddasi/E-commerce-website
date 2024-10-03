import styles from "./HomeBanner.module.css";
function HomeBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.card}>
        <div className={styles.text}>
          <p>New Arrival</p>
          <span>Discover Our New Collection</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            perspiciatis odio eaque neque rerum voluptate dicta!
          </p>
        </div>

        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default HomeBanner;
