const H4 = ({ children, className = "" }) => {
  const styles = `${className} text-[22px] leading-[120%] md:text-2xl	md:leading-[110%]`;
  return <h4 className={styles}>{children}</h4>;
};

export default H4;
