function TextField({
  value,
  setValue,
  placeholder,
  labeled = true,
  fieldName,
  className,
}) {
  return (
    <div>
      {labeled && <label htmlFor={fieldName}>{fieldName}</label>}

      <input
        type="text"
        value={value}
        id={fieldName}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className={className}
      />
    </div>
  );
}

export default TextField;
