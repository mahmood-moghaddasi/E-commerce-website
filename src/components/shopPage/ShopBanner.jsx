import { IoIosArrowForward } from "react-icons/io";
import styles from "./ShopBanner.module.css";
function ShopBanner() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Shop</h1>

        <p>
          <span>
            Home <IoIosArrowForward className={styles.arrow} />
          </span>
          shop
        </p>
      </div>
    </div>
  );
}

export default ShopBanner;
