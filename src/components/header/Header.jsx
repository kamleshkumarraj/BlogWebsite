import React from "react";
import styles from "./header.module.css";
import facebookImg from '../../assets/Images/facebook.png'
import ticktokImg from '../../assets/Images/tiktok.png'
import instagramImg from '../../assets/Images/instagram.png'
import youtubeImg from '../../assets/Images/youtube.png'
import { Link } from "react-router-dom";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import { useLocation } from "react-router-dom";



const Header = () => {
    useGSAP(() =>{
      const timeline = gsap.timeline();
      timeline.from("#nav-image img" , {
        y : -40,
        duration : .3,
        opacity : 0,
        stagger : 0.1,
        delay : .1
      })

      timeline.from('#header-text',{
        opacity : 0,
        y : -30,
        fontSize : '30px',
        duration : .2
      })

      timeline.from(`#header-link #link`,{
        y : -40,
        duration : .3,
        opacity : 0,
        stagger : 0.2,
        delay : .1
      })

    })
    const location = useLocation();
    console.log(location.pathname)
  return (
    <div style={location.pathname === "/" ? {position: "absolute"} : {position: "relative"}}  className={styles.container} >
      <div id="nav-image" className={styles.social}>
        <img src={facebookImg} alt="facebook" width={24} height={24} />
        <img src={instagramImg} alt="instagram" width={24} height={24} />
        <img src={facebookImg} alt="tiktok" width={24} height={24} />
        <img src={youtubeImg} alt="youtube" width={24} height={24} />
      </div>
      <div id="header-text" className={styles.logo}>XENDEK WEB</div>
      <div id="header-link" className={styles.links}>
        <ThemeToggle />
        <Link  id="link"  href="/" className={styles.link}>Homepage</Link>
        <Link id="link" href="/" className={styles.link}>Contact</Link>
        <Link id="link" href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Header;