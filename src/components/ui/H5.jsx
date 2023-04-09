const H5 = ({ children, className = "" }) => {
  const styles = `${className} font-satoshi text-xl leading-[120%]	md:leading-[110%]`;
  return <h5 className={styles}>{children}</h5>;
};

export default H5;
