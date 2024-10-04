import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import styles from "./HomePageRooms.module.css";
function HomePageRooms() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <h1>50+ Beautiful rooms inspiration</h1>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
        </div>
        <button>Explore More</button>
      </div>
      <div className={styles.middle}>
        {/* <img src="../../public/images/insprations/inspration-01.png" alt="" /> */}
        <div className={styles.detailes}>
          <div>
            <p>01 --- Bed Room</p>
            <h3>Inner Peace</h3>
          </div>
          <button>
            <span>
              <IoIosArrowRoundForward />
            </span>
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightImages}>
          <img src="../../public/images/insprations/inspration-02.png" alt="" />
          <img src="../../public/images/insprations/inspration-03.png" alt="" />
        </div>
        <div className={styles.bulets}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <button>
          <span>
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </div>
  );
}

export default HomePageRooms;
