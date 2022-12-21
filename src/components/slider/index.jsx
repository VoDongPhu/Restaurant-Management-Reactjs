import React from "react";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

export default function Slider() {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
  const arr = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1672304/pexels-photo-1672304.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      img: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];
  return (
    <div className="home-main slider-component">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {arr.map((e, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="slider" style={{ outline: 'none'}}>
                <div>
                  <div className="home-main slider-content">
                    <a className="slider-link">
                      <img src={e.img} alt="" className="slider-img" />
                    </a>
                  </div>
                </div>
              </div>  
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
