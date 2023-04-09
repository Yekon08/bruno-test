const Paragraph = ({ children, type, className = "", div = false }) => {
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

  const styles = `text-mainBlack ${className} ${handleStyles()}`;
  if (div) {
    return <div className={styles}>{children}</div>;
  }
  return <p className={styles}>{children}</p>;
};

export default Paragraph;
