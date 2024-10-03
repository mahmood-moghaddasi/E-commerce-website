import React from "react";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1>Funrio</h1>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div className={styles.right}>
          <table>
            <tr>
              <th>Links</th>
              <th>Help</th>
              <th>Newsletter</th>
            </tr>
            <tr>
              <td>Home</td>
              <td>Payment Option</td>
              <td className={styles.email}>
                <input type="text" placeholder="Enter Your Email Address" />
                <button>SUBSCRIBE</button>
              </td>
            </tr>
            <tr>
              <td>Shop</td>
              <td>Returns</td>
            </tr>
            <tr>
              <td>About</td>
              <td>Privacey Policies</td>
            </tr>
            <tr>
              <td>Contact</td>
            </tr>
          </table>
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>
        <p>2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
}

export default Footer;
