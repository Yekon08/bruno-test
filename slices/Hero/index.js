import React from "react";
import { Button, H1, H4, Paragraph } from "@/components/ui";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => {
  console.log(slice);

  const cardHero = (mobile = false) => {
    return (
      <div
        className={`${
          mobile ? "block md:hidden" : "hidden md:block"
        } w-full md:w-96 bg-white rounded-2xl p-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-top-44 z-10`}
      >
        <Paragraph type="big" div className="mb-6">
          <PrismicRichText field={slice.primary.descriptioncard} />
        </Paragraph>
        <Button
          type="gold"
          prismicLink
          link={slice.primary.linkbtn}
          className="block text-center"
        >
          {slice.primary.textbtn}
        </Button>
      </div>
    );
  };

  return (
    <section className="w-full h-full pt-24 bgHero">
      <Image
        src={"/heroElement.svg"}
        alt="hero element"
        width={340}
        height={460}
        className="hidden lg:block absolute right-[10%] top-0"
      />

      <div className="px-6 xl:px-0 xl:w-desktop mx-auto mb-6 md:mb-56 xl:mb-24">
        <H1 className="text-white md:max-w-xl">
          {slice.primary.title[0].text}
        </H1>
        <H4 className="text-white mt-6">{slice.primary.description[0].text}</H4>
      </div>
      <div className="px-6 xl:px-0 xl:w-desktop mx-auto flex flex-col gap-6 md:gap-0 md:flex-row items-center md:justify-between">
        {cardHero(true)}
        <div
          className={`relative w-full h-[260px] sm:h-[450px] md:w-[450px] md:h-[360px] xl:w-[${slice.primary.leftimg.dimensions.width}px] xl:h-[${slice.primary.leftimg.dimensions.height}px]`}
        >
          <Image
            src={slice.primary.leftimg.url}
            alt={slice.primary.leftimg.alt || "Left presentation image"}
            fill
            className="rounded-[24px]"
          />
        </div>
        <div className="relative w-full md:w-auto">
          {cardHero()}
          <div
            className={`relative w-full h-[260px] sm:h-[450px] md:w-[450px] md:h-[360px] xl:w-[${slice.primary.rightimg.dimensions.width}px] xl:h-[${slice.primary.rightimg.dimensions.height}px]`}
          >
            <Image
              src={slice.primary.rightimg.url}
              alt={slice.primary.rightimg.alt || "Right presentation image"}
              fill
              className="rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
