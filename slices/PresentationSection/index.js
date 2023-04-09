import React from "react";
import Title from "@/components/presentation/Title";

/**
 * @typedef {import("@prismicio/client").Content.PresentationSectionSlice} PresentationSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PresentationSectionSlice>} PresentationSectionProps
 * @param { PresentationSectionProps }
 */
const PresentationSection = ({ slice }) => (
  <section className="mt-36">
    <Title data={slice} />
    alo
  </section>
);

export default PresentationSection;
