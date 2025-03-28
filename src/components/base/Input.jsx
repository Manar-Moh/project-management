export function Input({
  label,
  type = "text",
  isTextArea = false,
  className,
  ...props
}) {

  const inputClassName = `border border-gray-300 p-2 rounded-md focus:border-orange-500 focus:outline-none w-full ${className}`;
  const textAreaClassName = `border border-gray-300 p-2 rounded-md focus:border-orange-500 focus:outline-none w-full ${className}`;
  return (
    <div className="mb-4">
      <label className="block mb-3">{label}</label>
      {isTextArea && (
        <textarea
          rows="5"
          className={`${textAreaClassName}`}
          {...props}
        ></textarea>
      )}
      {!isTextArea && (
        <input
          type={type}
          className={`${inputClassName}`}
          {...props}
        />
      )}
    </div>
  );
}
