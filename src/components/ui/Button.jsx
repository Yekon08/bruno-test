import { PrismicLink } from "@prismicio/react";

const Button = ({
  children,
  type,
  prismicLink = false,
  link = "",
  py = "py-3",
  px = "px-4",
  fontSize = "text-sm",
}) => {
  const handleStyles = () => {
    switch (type) {
      case "nav":
        return "text-white bg-whiteLowOpacity";
      case "gold":
        return "text-blackText bg-mainGold";

      default:
        "";
    }
  };

  const styles = `font-satoshi rounded-xl transition-all ${py} ${px} ${fontSize} ${handleStyles()}`;

  if (prismicLink) {
    return (
      <PrismicLink field={link} className={styles}>
        {children}
      </PrismicLink>
    );
  }
  return <button className={styles}>{children}</button>;
};

export default Button;
