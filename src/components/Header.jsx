import styles from "./Header.module.css";

import { FaReact, FaRegHeart } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <FaReact />
        <span>Furniro</span>
      </div>
      <div className={styles.pages}>
        <span>Home</span>
        <span>Shop</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <div className={styles.tools}>
        <MdOutlinePerson />
        <FaRegHeart />
        <CiSearch />
        <IoCartOutline />
      </div>
    </header>
  );
}

export default Header;
