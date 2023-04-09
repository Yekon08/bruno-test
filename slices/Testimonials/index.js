import { PrismicRichText } from "@prismicio/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "@/components/Slider";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @param { TestimonialsProps }
 */
const Testimonials = ({ slice }) => {
  return (
    <section className="bg-mainBlack px-6 md:px-0 py-16 md:pt-24 md:pb-20 text-white mt-44">
      <Slider data={slice} />
    </section>
  );
};

export default Testimonials;
