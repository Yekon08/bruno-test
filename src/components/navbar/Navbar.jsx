import { PrismicLink, PrismicText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { useState } from "react";
// import ArrowDown from "../../"

const Navbar = ({ data }) => {
  console.log("nav: ", data);
  const [isHover, setIsHover] = useState(false);
  return (
    <nav
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="bg-mainOlive h-[72px] border-b border-transparent hover:border-grayBorder flex: ;
      items-center text-white hover:text-blackText hover:bg-white
      transition-all"
    >
      <div className="w-[1208px] h-full mx-auto flex items-center justify-between">
        <ul className="flex gap-6 w-1/3">
          {data.slices.map((slice) => {
            return (
              <li key={slice.id} className="text-sm">
                <PrismicLink
                  field={slice.primary.link}
                  className="flex items-center"
                >
                  <PrismicText field={slice.primary.name} />
                  {slice.items.length > 1 && (
                    <Image
                      src={isHover ? "/arrowDownBlack.svg" : "/arrowDown.svg"}
                      alt="arrow down"
                      className="ml-2"
                      width={10}
                      height={17}
                    />
                  )}
                </PrismicLink>

                {/* {slice.items.length > 0 && (
                  <ul>
                    {slice.items.map((item) => {
                      return (
                        <li key={JSON.stringify(item)}>
                          <PrismicLink field={item.child_link}>
                            <h3>{item.child_name}</h3>
                          </PrismicLink>
                        </li>
                      );
                    })}
                  </ul>
                )} */}
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
        {/* <PrismicNextImage field={data.logo} /> */}

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
