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
      img: "https://tripi.vn/cdn-cgi/image/width=640,height=640/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FAACLPU8TZV_%2Ftmp%2Fplaytemp4847545985849756299%2FmultipartBody8727373779401190948asTemporaryFile?generation=1649834882934883&alt=media",
    },
    {
      id: 2,
      img: "https://tripi.vn/cdn-cgi/image/width=640,height=640/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FDCZ9GWBR34_%2Ftmp%2Fplaytemp641779362058268120%2FmultipartBody3327129715363470507asTemporaryFile?generation=1648521131208779&alt=media",
    },
    {
      id: 3,
      img: "https://tripi.vn/cdn-cgi/image/width=640,height=640/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2F1HD13PFY96_%2Ftmp%2Fplaytemp1548210514325493357%2FmultipartBody7313762926693915959asTemporaryFile?generation=1649240290567202&alt=media",
    },
    {
      id: 4,
      img: "https://tripi.vn/cdn-cgi/image/width=640,height=640/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FP1X7ZF7RE6_%2Ftmp%2Fplaytemp3737253869110256423%2FmultipartBody637767143341390660asTemporaryFile?generation=1646880301546996&alt=media",
    },
    {
      id: 5,
      img: "https://tripi.vn/cdn-cgi/image/width=640,height=640/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FP1X7ZF7RE6_%2Ftmp%2Fplaytemp3737253869110256423%2FmultipartBody637767143341390660asTemporaryFile?generation=1646880301546996&alt=media",
    },
    {
      id: 6,
      img: "https://tripi.vn/cdn-cgi/image/width=640,height=640/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2F2H1BQUVN2I_%2Ftmp%2Fplaytemp4332522927599923195%2FmultipartBody783253346416295469asTemporaryFile?generation=1646617475691144&alt=media",
    },
    {
      id: 7,
      img: 'https://tripi.vn/cdn-cgi/image/width=640,height=640/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FVTGSB9P0FR_%2Ftmp%2Fplaytemp3241131477509980588%2FmultipartBody6513803101835553645asTemporaryFile?generation=1649297417238565&alt=media'
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
