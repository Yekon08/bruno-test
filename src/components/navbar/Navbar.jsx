import { PrismicLink, PrismicText, PrismicNextImage } from "@prismicio/react";
import Image from "next/image";

const Navbar = ({ data }) => {
  console.log("nav: ", data);
  return (
    <nav className="bg-mainOlive h-[72px] flex items-center">
      <div className="w-[1208px] mx-auto flex items-center justify-between">
        <ul className="flex gap-6 w-1/3">
          {data.slices.map((slice) => {
            return (
              <li key={slice.id}>
                <PrismicLink field={slice.primary.link}>
                  <PrismicText field={slice.primary.name} />
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

        <Image
          src={data.logo.url}
          alt={data.logo.alt}
          width={data.logo.dimensions.width}
          height={data.logo.dimensions.height}
        />
        {/* <PrismicNextImage field={data.logo} /> */}

        <div className="w-1/3 flex justify-end">
          <button>test</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
