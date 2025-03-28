import { NoTasks } from "./NoTasks";
export function Tasks({project}) {
  return <>
   {project.tasks.length > 0 && (
        <ul className="list-disc list-inside mb-4">
          {project.tasks.map((task) => (
            <li key={task.id} className="text-gray-600 mb-2">
              {task.name}
            </li>
          ))}
        </ul>
      )}
      {project.tasks.length === 0 && (
        <NoTasks />
      )}
  </>;
}
