export function Button({ children, className, ...props }) {
  const classes = `text-white py-2 px-5 w-auto  rounded-md ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
