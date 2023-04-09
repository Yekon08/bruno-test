const H6 = ({ children, className }) => {
  return (
    <h6
      className={`font-satoshi text-mainBlack text-base leading-[18px] ${className}`}
    >
      {children}
    </h6>
  );
};

export default H6;
