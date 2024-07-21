import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import slide from "../../assets/img/1.png";

export default function Promo() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  window.onresize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <section className="promo">
      <div className="container">
        <div className="promo__slider">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={width > 1024 ? 20 : 15}
            slidesPerView={width > 768 ? 4 : width > 576 ? 3 : 2}
            loop
            freeMode={true}
            speed={9000}
            allowTouchMove={false}
            autoplay={{
              delay: 1,
              reverseDirection: true,
              disableOnInteraction: false,
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper: any) => console.log(swiper)}
          >
            <SwiperSlide className="promo__slide-wrap">
              <a className="promo__slide" href="#">
                <img className="promo__slide-img" src={slide} alt="sfd" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="promo__slide-wrap">
              <a className="promo__slide" href="#">
                <img className="promo__slide-img" src={slide} alt="sfd" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="promo__slide-wrap">
              <a className="promo__slide" href="#">
                <img className="promo__slide-img" src={slide} alt="sfd" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="promo__slide-wrap">
              <a className="promo__slide" href="#">
                <img className="promo__slide-img" src={slide} alt="sfd" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="promo__slide-wrap">
              <a className="promo__slide" href="#">
                <img className="promo__slide-img" src={slide} alt="sfd" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="promo__slide-wrap">
              <a className="promo__slide" href="#">
                <img className="promo__slide-img" src={slide} alt="sfd" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
