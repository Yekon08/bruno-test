import React from "react";
import Title from "@/components/presentation/Title";
import Content from "@/components/presentation/Content";

/**
 * @typedef {import("@prismicio/client").Content.PresentationSectionSlice} PresentationSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PresentationSectionSlice>} PresentationSectionProps
 * @param { PresentationSectionProps }
 */
const PresentationSection = ({ slice }) => (
  <section className="mt-16 md:mt-36">
    <Title data={slice} />
    <Content data={slice} />
  </section>
);

export default PresentationSection;
