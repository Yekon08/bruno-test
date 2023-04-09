import { H2, H5, Paragraph } from "../ui";
import { PrismicRichText } from "@prismicio/react";

const Title = ({ data }) => {
  console.log("data: ", data);
  return (
    <div className="text-center max-w-[780px] mx-auto">
      <H5 className="text-secondaryPurple ">{data.primary.titlesection}</H5>
      <H2 className="mt-2 mb-4">{data.primary.title}</H2>
      <Paragraph type="big" div className="mb-6">
        <PrismicRichText field={data.primary.description} />
      </Paragraph>
    </div>
  );
};

export default Title;
