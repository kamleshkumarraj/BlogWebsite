
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import sunImg from '../../assets/Images/sun.png'
import moonImg from '../../assets/Images/moon.png'
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  console.log(theme)
  return (
    <div id="link"
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
      <img src={moonImg} alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <img src={sunImg} alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;