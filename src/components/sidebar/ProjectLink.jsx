export function ProjectLink({ title, active,onClick }) {
  return (
    <li
      className={`text-white p-2 hover:bg-orange-600 hover:translate-x-5 hover:rounded-md  ${
        active ? "bg-orange-600 translate-x-5 rounded-md" : ""
      }`}
      onClick={onClick}
    >
      {title}
    </li>
  );
}
