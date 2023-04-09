const H5 = ({ children, className = "" }) => {
  const styles = `${className} font-satoshi text-[32px] leading-[120%] md:text-5xl	md:leading-[110%]`;
  return <h5 className={styles}>{children}</h5>;
};

export default H5;
