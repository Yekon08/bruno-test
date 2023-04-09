const Paragraph = ({ children, type, className = "", div = false }) => {
  const handleStyles = () => {
    switch (type) {
      case "small":
        return "text-sm leading-[130%]";
      case "big":
        return "text-lg leading-[150%]";
      case "quote":
        return "text-xl md:text-2xl leading-[160%] italic";
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
