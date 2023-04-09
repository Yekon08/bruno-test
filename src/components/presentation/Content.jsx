import Image from "next/image";
import { Button, H3, H5, Paragraph } from "../ui";
import { PrismicRichText } from "@prismicio/react";

const Content = ({ data }) => {
  console.log("data: ", data);
  return (
    <div className="px-6 xl:px-0 xl:w-desktop mx-auto mt-32">
      {data.items.map((item, i) => {
        return (
          <div
            key={i}
            className={`flex items-center mb-24 last:mb-0 ${
              i % 2 !== 0 && "flex-row-reverse"
            }`}
          >
            <div className={`relative w-[585px] h-[430px]`}>
              <Image
                src={item.img.url}
                alt={item.img.alt || "presentation image"}
                fill
                className="rounded-t-2xl"
              />
            </div>

            <div className={`${i % 2 !== 0 ? "mr-36" : "ml-36"}`}>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-mainOlive rounded-xl flex items-center justify-center mr-8">
                  <Image
                    src={item.icon.url}
                    alt={item.icon.alt || "icon"}
                    width={32}
                    height={32}
                  />
                </div>
                <H3 className="max-w-[300px]">{item.title}</H3>
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
