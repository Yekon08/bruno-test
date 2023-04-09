import { PrismicLink } from "@prismicio/react";
import { Button, Paragraph } from "./ui";
import Image from "next/image";

const Footer = ({ data }) => {
  console.log("data: ", data);
  return (
    <footer className="pt-[72px] pb-10">
      <div className="w-desktop mx-auto">
        <div className="w-desktop mx-auto flex justify-between pb-10 border-b border-greyBorder">
          {data.slices.map((slice) => {
            return (
              <div key={slice.id}>
                <Paragraph className="font-satoshi mb-6" type="big">
                  {slice.primary.title}
                </Paragraph>
                <ul className="grid grid-rows-6 grid-flow-col gap-x-10">
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
          <div className="flex flex-col">
            <Paragraph className="font-satoshi mb-6" type="big">
              {data.titlecontact}
            </Paragraph>
            <Button
              type="small"
              style="gold"
              prismicLink
              link={data.firstbtnlink}
              className="mb-2"
            >
              {data.firstbtntext}
            </Button>
            <Button
              type="small"
              style="black"
              prismicLink
              link={data.secondbtnlink}
            >
              {data.secondbtntext}
            </Button>
          </div>
        </div>
        <div className="mt-8 flex items-center">
          <div className="w-1/3">
            <Image
              src={data.logo.url}
              alt={data.logo.alt}
              width={data.logo.dimensions.width}
              height={data.logo.dimensions.height}
            />
          </div>
          <div className="flex items-center w-1/3 text-center justify-center">
            <Paragraph type="tiny">{data.copyright}</Paragraph>
            <Paragraph
              type="tiny"
              prismicLink
              link={data.legalmentions}
              className="mx-4"
            >
              legal mentions
            </Paragraph>
            <Paragraph type="tiny">{data.madeby}</Paragraph>
          </div>
        </div>
        <span className="block w-1/3" />
      </div>
    </footer>
  );
};

export default Footer;
