import React from "react";
import styles from "./categoryList.module.css";
import {Link} from 'react-router-dom'
import styleImg from '../../assets/Images/style.png'
import fashionImg from '../../assets/Images/fashion.png'
import foodImg from '../../assets/Images/food.png'
import travelImg from '../..//assets/Images/travel.png'
import cultureImg from '../../assets/Images/culture.png'
import codingImg from '../../assets/Images/coding.png'
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

const CategoryList =  () => {
  gsap.registerPlugin(ScrollTrigger)
  const data = [
    {_id : '1' , img : styleImg , title : 'Style' , slug : 'style'},
    {_id : '2' , img : fashionImg , title : 'Fashion', slug : 'fashion'},
    {_id : '3' , img : foodImg , title : 'Food', slug : 'food'},
    {_id : '4' , img : travelImg , title : 'Travel', slug : 'travel'},
    {_id : '5' , img : cultureImg , title : 'Culture', slug : 'culture'},
    {_id : '6' , img : codingImg , title : 'Coding', slug : 'coding'},
  ];
  useGSAP(() => {
    gsap.from('.category' , {
      y : -150,
      opacity : 0,
      duration : 1,
      stagger : .2,
      scrollTrigger : {
        trigger :'.body .category',
        scroll : 'body',
        start : 'top 70%',
        end : 'top 30%',
        scrub : true,
      }
    })
  })
  return (
    <div className={`${styles.container} body`}>
      <h1 className={styles.title}>Popular slug</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            to="/blog"
            className={`${styles.category} ${styles[item.slug]} category`}
            key={item._id}
          >
            {item.img && (
              <img
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
