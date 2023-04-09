import Image from "next/image";
import { Button, H3, H5, Paragraph } from "../ui";
import { PrismicRichText } from "@prismicio/react";

const Content = ({ data }) => {
  return (
    <div className="px-6 xl:px-0 xl:w-desktop mx-auto mt-16 xl:mt-32">
      {data.items.map((item, i) => {
        return (
          <div
            key={i}
            className={`flex flex-col xl:flex-row items-center mb-16 xl:mb-24 last:mb-0 ${
              i % 2 !== 0 && "xl:flex-row-reverse"
            }`}
          >
            <div
              className={`relative w-full h-[250px] md:w-[585px] md:h-[430px]`}
            >
              <Image
                src={item.img.url}
                alt={item.img.alt || "presentation image"}
                fill
                className="rounded-t-2xl"
              />
            </div>

            <div
              className={`mt-10 xl:mt-0 ${
                i % 2 !== 0 ? "xl:mr-36" : "xl:ml-36"
              }`}
            >
              <div className="flex items-center">
                <div className="w-16 h-16 bg-mainOlive rounded-xl flex items-center justify-center">
                  <Image
                    src={item.icon.url}
                    alt={item.icon.alt || "icon"}
                    width={32}
                    height={32}
                  />
                </div>
                <H3 className="xl:max-w-[300px] flex-1 ml-5 xl:ml-8">
                  {item.title}
                </H3>
              </div>
              <Paragraph
                type="big"
                div
                className={`max-w-sm mt-6 ${
                  item.list.length > 0 ? "mb-6" : "mb-10"
                }`}
              >
                <PrismicRichText field={item.description} />
              </Paragraph>

              {item.list.length > 0 && (
                <div className="grid grid-cols-2 mb-10 gap-x-10 gap-y-4">
                  {item.list.map((listItem, i) => (
                    <div key={i} className={`flex items-center`}>
                      <Image
                        src={"/check.svg"}
                        alt="check icon"
                        width={24}
                        height={24}
                        className="mr-4"
                      />
                      <H5>{listItem.text}</H5>
                    </div>
                  ))}
                </div>
              )}
              <Button
                type="medium"
                style="black"
                prismicLink
                link={item.btnlink}
              >
                {item.btntext}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
