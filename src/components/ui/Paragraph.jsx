const Paragraph = ({ children, type, className }) => {
  const handleStyles = () => {
    switch (type) {
      case "small":
        "text-sm leading-[18px]";

      default:
        "";
    }
  };

  const styles = `text-blackText ${className} ${handleStyles()}`;
  return <p className={styles}>{children}</p>;
};

export default Paragraph;
