
import styles from "./footer.module.css";
import logo from '../../assets/Images/travel.png'
import facebookImg from '../../assets/Images/facebook.png'
import ticktokImg from '../../assets/Images/tiktok.png'
import instagramImg from '../../assets/Images/instagram.png'
import youtubeImg from '../../assets/Images/youtube.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <img className="rounded-full " src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465_640.png" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>XENDEK WEB</h1>
        </div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className={styles.icons}>
          <img src={facebookImg} alt="" width={18} height={18} />
          <img src={instagramImg} alt="" width={18} height={18} />
          <img src={ticktokImg} alt="" width={18} height={18} />
          <img src={youtubeImg} alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;