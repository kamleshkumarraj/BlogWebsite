import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCube, Pagination , Autoplay} from 'swiper/modules';

export default function ImgSlider() {
  return (
    <>
      <Swiper
      autoplay={{delay: 2000,
        disableOnInteraction: false,}}
        loop={true}
        grabCursor={true}
        modules={[ Pagination ,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt='hii' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt='hii' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt='hii' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt='hii' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}