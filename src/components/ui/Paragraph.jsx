const Paragraph = ({ children, type, className = "" }) => {
  const handleStyles = () => {
    switch (type) {
      case "small":
        return "text-sm leading-[18px]";
      case "big":
        return "text-lg leading-[24px]";
      default:
        "";
    }
  };

  const styles = `text-blackText ${className} ${handleStyles()}`;
  return <p className={styles}>{children}</p>;
};

export default Paragraph;
