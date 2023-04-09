import { PrismicLink } from "@prismicio/react";

const Button = ({
  children,
  type = "medium",
  style = "black",
  prismicLink = false,
  link = "",
  className = "",
}) => {
  const handleStyles = () => {
    switch (style) {
      case "nav":
        return "text-white bg-whiteLowOpacity";
      case "gold":
        return "text-blackText bg-mainGold hover:bg-black hover:text-white";
      case "black":
        return "text-white bg-blackText hover:bg-darkGrey";
      default:
        "";
    }
  };

  const handleType = () => {
    switch (type) {
      case "big":
        return "px-[72px] py-5 rounded-xl font-lg leading-[110%]";
      case "medium":
        return "px-10 py-4 rounded-xl font-base leading-[110%]";
      case "small":
        return "px-6 py-3 rounded-xl font-sm leading-[110%]";
      case "full":
        return "block w-full h-auto py-5 text-center font-lg leading-[110%]";
      default:
        "";
    }
  };

  const styles = `font-satoshi rounded-xl transition-all ${className} ${handleStyles()} ${handleType()}`;

  if (prismicLink) {
    return (
      <PrismicLink field={link} className={`${styles} inline-block`}>
        {children}
      </PrismicLink>
    );
  }
  return <button className={styles}>{children}</button>;
};

export default Button;
