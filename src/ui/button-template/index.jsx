function ButtonTemplate({ children, onClick = () => {}, className }) {
  const defaultClassName = 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      className={`${defaultClassName} ${className ? className : ''}`}
    >
      {children}
    </button>
  );
}

export default ButtonTemplate;
