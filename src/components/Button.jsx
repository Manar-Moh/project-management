export function Button({ children, className, ...props }) {
  const classes = `bg-orange-600 hover:bg-orange-800 text-white py-2 px-5 w-auto  rounded-md ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
