type MaxWidthContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default MaxWidthContainer;
