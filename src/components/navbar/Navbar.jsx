import { PrismicLink, PrismicText, PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { useState } from "react";
import H6 from "../ui/H6";
import Paragraph from "../ui/Paragraph";
// import ArrowDown from "../../"

const Navbar = ({ data }) => {
  console.log("nav: ", data);
  const [isHover, setIsHover] = useState(false);
  return (
    <nav
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="bg-mainOlive h-[72px] border-b border-transparent hover:border-grayBorder flex
      items-center text-white hover:text-blackText hover:bg-white
      transition-all relative ${}"
    >
      <div className="w-[1208px] h-full mx-auto flex items-center justify-between">
        <ul className="flex gap-6 w-1/3 h-full">
          {data.slices.map((slice) => {
            return (
              <li
                key={slice.id}
                className="text-sm h-full flex items-center hover:border-b-2 hover:border-mainOlive "
              >
                <PrismicLink
                  field={slice.primary.link}
                  className="flex items-center h-full"
                >
                  <PrismicText field={slice.primary.name} />
                  {slice.items.length > 0 && (
                    <Image
                      src={isHover ? "/arrowDownBlack.svg" : "/arrowDown.svg"}
                      alt="arrow down"
                      className="ml-2"
                      width={10}
                      height={17}
                    />
                  )}
                </PrismicLink>

                {slice.items.length > 0 && (
                  <div className="invisible transition-all submenu shadow">
                    <ul className="w-[1208px] h-full mx-auto flex items-center gap-10">
                      {slice.items.map((item) => {
                        return (
                          <li key={JSON.stringify(item)} className="-ml-6">
                            <PrismicLink
                              field={item.child_link}
                              className="flex"
                            >
                              <div className="flex transition-all p-6 rounded-xl hover:bg-grayLight">
                                <div className="w-12 h-12 bg-mainOlive rounded-xl flex items-center justify-center mr-6">
                                  <Image
                                    src={item.icon.url}
                                    alt={data.logo.alt}
                                    width={24}
                                    height={24}
                                  />
                                </div>
                                <div className="mt-2">
                                  <H6 className="mb-4 max-w-[190px]">
                                    {item.child_name}
                                  </H6>
                                  <Paragraph
                                    type="small"
                                    className="max-w-[280px]"
                                  >
                                    {item.description[0].text}
                                  </Paragraph>
                                </div>
                              </div>
                            </PrismicLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <Link href="/" className="cursor-pointer">
          <Image
            src={isHover ? data.logohover.url : data.logo.url}
            alt={data.logo.alt}
            width={data.logo.dimensions.width}
            height={data.logo.dimensions.height}
          />
        </Link>

        <div className="w-1/3 flex justify-end">
          <Button
            type={isHover ? "gold" : "nav"}
            prismicLink
            link={data.linkbtn}
          >
            {data.textbtn}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
