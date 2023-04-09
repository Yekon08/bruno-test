import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { H2, Paragraph } from "./ui";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { useState } from "react";

const Slider = ({ data }) => {
  console.log("data: ", data);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  if (data) {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col w-[600px]">
          <H2 className="text-white max-w-xl mb-10">{data.primary.title}</H2>
          <div className="w-[576px]">
            <Swiper
              modules={[Pagination, Navigation, Controller]}
              controller={{ control: controlledSwiper }}
              pagination={{
                el: ".swiper-custom-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".next",
                prevEl: ".prev",
              }}
              slidesPerView={1}
              className="h-full w-full"
              loop
            >
              {data.items.map((slide, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Paragraph type="quote" className="text-white" div>
                      <PrismicRichText field={slide.description} />
                    </Paragraph>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="flex items-center mt-20">
            <button className="prev bg-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
              <Image
                src="/arrowDownBlack.svg"
                alt="arrow left slider"
                width={10}
                height={17}
                className="rotate-90"
              />
            </button>
            <button className="next bg-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ml-1">
              <Image
                src="/arrowDownBlack.svg"
                alt="arrow right slider"
                width={10}
                height={17}
                className="-rotate-90"
              />
            </button>
            <div className="swiper-custom-pagination ml-6 flex-1" />
          </div>
        </div>
        <div className="w-[400px] ml-24">
          <Swiper
            modules={[Controller]}
            slidesPerView={1}
            onSwiper={setControlledSwiper}
            className="sliderImage h-full w-full "
            loop
          >
            {data.items.map((slide, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="relative mb-[72px]">
                    <Image
                      src={slide.img.url}
                      alt={slide.img.alt}
                      width={slide.img.dimensions.width}
                      height={slide.img.dimensions.height}
                    />
                    <Image
                      src={slide.signature.url}
                      alt={slide.signature.alt}
                      width={slide.signature.dimensions.width}
                      height={slide.signature.dimensions.height}
                      className="absolute -bottom-16 right-0"
                    />
                  </div>
                  <p className="font-satoshi text-xl">{slide.name}</p>
                  <Paragraph type="medium" className="text-white opacity-70">
                    {slide.job}
                  </Paragraph>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
  }
};

export default Slider;
