import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { H2 } from "./ui";
const Slider = ({ data }) => {
  console.log("data: ", data);
  const swiper = useSwiper();
  return (
    <div className="pt-24 pb-20">
      <H2></H2>
    </div>
  );
};

export default Slider;

{
  /* <Swiper
modules={[Pagination, Navigation]}
pagination={{
  el: ".swiper-custom-pagination",
  clickable: true,
}}
navigation={{
  nextEl: ".test",
  prevEl: ".swiper-button-prev",
}}
slidesPerView={1}
className="mySwiper h-full"
loop
>
<SwiperSlide className="bg-red-500">slide 1</SwiperSlide>
<SwiperSlide className="bg-green-500">slide 2</SwiperSlide>
<SwiperSlide className="bg-blue-500">slide 3</SwiperSlide>
</Swiper>
<button className="test bg-red-200 h-6 w-6"></button>
<div className="swiper-pagination bg-green-200 h-6 w-6"></div>
<div className="swiper-custom-pagination mt-4" /> */
}
