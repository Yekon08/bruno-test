const H3 = ({ children, className = "" }) => {
  const styles = `${className} text-2xl leading-[120%] md:text-[28px]	md:leading-[110%]`;
  return <h3 className={styles}>{children}</h3>;
};

export default H3;
