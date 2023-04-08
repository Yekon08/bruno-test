const H1 = ({ children, className }) => {
  const styles = `font-satoshi text-[40px] leading-[120%] md:text-[56px] md:leading-[110%] ${className}`;
  return <h1 className={styles}>{children}</h1>;
};

export default H1;
