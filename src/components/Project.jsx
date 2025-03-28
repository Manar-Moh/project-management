export function Project({ project }) {

    let date = new Date(project.dueDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
  return (
    <div className="w-full md:w-4/5 px-10">
      <h1 className="text-2xl font-bold">{project.name}</h1>
      <p className="text-gray-700">{project.description}</p>
      <p className="text-gray-500">Due Date: {date}</p>
    </div>
  );
}