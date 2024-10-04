import styles from "./Header.module.css";

import { FaReact, FaRegHeart } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <FaReact />
        <span>Furniro</span>
      </div>
      <div className={styles.pages}>
        <NavLink to="shop">
          <span>Home</span>
        </NavLink>
        <NavLink>
          <span>Shop</span>
        </NavLink>
        <NavLink>
          <span>About</span>
        </NavLink>
        <NavLink>
          <span>Contact</span>
        </NavLink>
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
