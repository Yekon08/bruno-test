import Image from "next/image";
import { useState } from "react";
import { Button, H6, Paragraph } from "../ui";
import { PrismicLink, PrismicText } from "@prismicio/react";

const NavbarMobile = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const genericHamburgerLine = `h-[2px] w-[22px] rounded-full ${
    isOpen ? "bg-black" : "bg-white"
  } transition ease transform duration-300`;

  const burgerIcon = (
    <button
      className="flex flex-col rounded justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} mb-[6px] ${
          isOpen && "rotate-45 translate-y-2"
        }`}
      />
      <div
        className={`${genericHamburgerLine} mb-[6px] ${isOpen && "opacity-0"}`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen && "-rotate-45 -translate-y-2"
        }`}
      />
    </button>
  );

  return (
    <nav
      className={`md:hidden w-full h-16 transition-all ${
        isOpen ? "bg-white" : "bg-mainOlive"
      }`}
    >
      <div className={`flex items-center justify-between h-full w-full px-6`}>
        <Image
          src={isOpen ? data.logohover.url : data.logo.url}
          alt={data.logo.alt}
          width={data.logo.dimensions.width}
          height={data.logo.dimensions.height}
        />
        {burgerIcon}
      </div>

      <div
        className={`w-full h-navMobile relative transition-all bg-white -ml-[100%] px-6 pt-14 ${
          isOpen && "ml-0"
        }`}
      >
        <Button
          type={"gold"}
          prismicLink
          link={data.linkbtn}
          className="block text-center w-full mb-16"
        >
          {data.textbtn}
        </Button>

        <ul className="flex flex-col gap-6">
          {data.slices.map((slice) => {
            return (
              <li key={slice.id} className={`text-sm h-full flex flex-col`}>
                <div className="flex items-center">
                  <PrismicLink
                    field={slice.primary.link}
                    className="flex items-center h-full"
                  >
                    <Paragraph type="big">
                      {slice.primary.name[0].text}
                    </Paragraph>
                  </PrismicLink>
                  {slice.items.length > 0 && (
                    <div
                      className="w-4 h-4 flex items-center ml-2"
                      onClick={() =>
                        setSubmenuOpen({
                          ...submenuOpen,
                          [slice.primary.name[0].text]:
                            !submenuOpen[slice.primary.name[0].text],
                        })
                      }
                    >
                      <Image
                        src={"/arrowDownBlack.svg"}
                        alt="arrow down"
                        width={10}
                        height={17}
                      />
                    </div>
                  )}
                </div>

                {slice.items.length > 0 && (
                  <ul
                    className={`${
                      submenuOpen[slice.primary.name[0].text]
                        ? "flex"
                        : "hidden"
                    } flex-col gap-1`}
                  >
                    {slice.items.map((item) => {
                      return (
                        <li key={JSON.stringify(item)}>
                          <PrismicLink field={item.child_link}>
                            <Paragraph type="small" className="max-w-[75%]">
                              {item.child_name}
                            </Paragraph>
                          </PrismicLink>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;
