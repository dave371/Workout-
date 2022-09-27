function ButtonTemplate({
  children,
  onClick = () => {},
  className,
  label = '',
}) {
  const defaultClassName = 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      className={`${defaultClassName} ${className ? className : ''}`}
      aria-label={label}
    >
      {children}
    </button>
  );
}

export default ButtonTemplate;
