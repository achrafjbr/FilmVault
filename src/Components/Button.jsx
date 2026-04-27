const Button = ({ children, style, onClick }) => {
  return (
    <div onClick={onClick} className={`${style}`}>
      {children}
    </div>
  );
};

export default Button;
