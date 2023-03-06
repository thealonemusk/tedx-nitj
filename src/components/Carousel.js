import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/autoplay"

import "swiper/css/navigation"
// import "../styles.css"

import SwiperCore, { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper"

// import img1 from "../assets/img/img1.jpg"
// import img2 from "../img/img2.jpg"
// import img3 from "../img/img3.jpg"
// import img4 from "../img/img4.jpg"
// import img5 from "../img/img5.jpg"
// import img6 from "../img/img6.jpg"
// import img7 from "../img/img7.jpg"
// import img8 from "../img/img8.jpg"
// import img9 from "../img/img9.jpg"
// import img10 from "../img/img10.jpg"

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay])

export const Carousel = () => {


    return (


        <div className="container">
            <div className="title_wrapper">
                <div className="title_">
                    <span>
                        OUR GALLERY

                    </span>
                </div>
            </div>
            <div className="swipper-wrapper swipper">
                <Swiper
                    navigation={true}
                    effect={"coverflow"}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
                    loop={true}
                    coverfloweffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="" alt="img1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="" alt="img2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="" alt="img3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="" alt="img4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="" alt="img5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="" alt="img6" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="" alt="img7" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="" alt="img8" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="" alt="img9" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="" alt="img10" />
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>

    )
}