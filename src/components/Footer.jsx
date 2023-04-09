import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { Button, Paragraph } from "./ui";
import Image from "next/image";

const Footer = ({ data }) => {
  return (
    <footer className="md:pt-[72px] pb-10">
      <div className="px-6 xl:px-0 xl:w-desktop mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap justify-between pb-10 border-b border-greyBorder">
          {data.slices.map((slice) => {
            return (
              <div
                key={slice.id}
                className="border-b border-greyBorder md:border-none pb-6 md:pb-0"
              >
                <Paragraph
                  className="font-satoshi mb-6 mt-6 md:mt-0"
                  type="big"
                >
                  {slice.primary.title}
                </Paragraph>
                <ul className="md:grid md:grid-rows-6 md:grid-flow-col md:gap-x-10">
                  {slice.primary.list.map((list, i) => (
                    <li key={i} className="mb-4 last:mb-0">
                      <a href={slice.primary.listlinks[i].text} target="_blank">
                        <Paragraph type="small" className="text-darkGrey">
                          {list.text}
                        </Paragraph>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div className="flex flex-col mt-6 md:mt-0">
            <Paragraph className="font-satoshi mb-6" type="big">
              {data.titlecontact}
            </Paragraph>
            <Button
              type="small"
              style="gold"
              prismicLink
              link={data.firstbtnlink}
              className="mb-2 text-center md:text-left"
            >
              {data.firstbtntext}
            </Button>
            <Button
              type="small"
              style="black"
              prismicLink
              link={data.secondbtnlink}
              className="text-center md:text-left"
            >
              {data.secondbtntext}
            </Button>
          </div>
        </div>
        <div className="mt-8 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/3 mt-6 md:mt-0">
            <Image
              src={data.logo.url}
              alt={data.logo.alt}
              width={data.logo.dimensions.width}
              height={data.logo.dimensions.height}
            />
          </div>
          <div className="flex flex-wrap gap-4 md:gap-0 items-center md:w-1/3 text-center justify-center border-b border-greyBorder md:border-none pb-6 md:pb-0">
            <Paragraph type="tiny">{data.copyright}</Paragraph>
            <PrismicLink field={data.legalmentions} className="md:mx-4">
              <Paragraph type="tiny">legal mentions</Paragraph>
            </PrismicLink>
            <Paragraph type="tiny" className="underlineEm" div>
              <PrismicRichText field={data.madeby} />
            </Paragraph>
          </div>
        </div>
        <span className="block md:w-1/3" />
      </div>
    </footer>
  );
};

export default Footer;
