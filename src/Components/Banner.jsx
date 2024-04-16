import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Banner.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='h-full'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className='slide slide-1'>
            </div></SwiperSlide>
        <SwiperSlide><div className='slide slide-2'>
            </div></SwiperSlide>
        <SwiperSlide><div className='slide slide-3'>
            </div></SwiperSlide>
        <SwiperSlide><div className='slide slide-4'>
            </div></SwiperSlide>
        
        
      </Swiper>
        </div>
    );
};

export default Banner;