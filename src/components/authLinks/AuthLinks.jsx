
import styles from "./authLinks.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSelf } from "../../store/slices/selfHandler.slice";


const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector(getSelf)
  const status = user?.firstname ? 'authenticated' : 'unauthenticated'
  console.log(status)
  console.log(user)

  return (
    <>
      {status === "unauthenticated" ? (
        <Link id="link" to="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link id="link" to="/write" className={styles.link}>
            Write
          </Link>
          <span id="link" className={styles.link} >
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
