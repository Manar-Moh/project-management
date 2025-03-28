import { MdDeleteForever, MdDeleteOutline, MdOutlineDelete } from "react-icons/md";
import { NewTask } from "./NewTask";
import { NoTasks } from "./NoTasks";
import { useState } from "react";

export function Tasks({ project, setNewTask, deleteTask }) {
  const [isNewTask, setIsNewTask] = useState(false);
  function handleOnAddTask(newTask) {
    setNewTask(newTask);
  }

  function handleOnNewTask() {
    setIsNewTask((prev) => !prev);
  }

  function handleOnDeleteTask(taskId, projectId) {
    deleteTask(taskId, projectId);
    if(project.tasks.length === 1) handleOnNewTask();
  }

  return (
    <>
      {isNewTask && <NewTask project={project} onNewTask={handleOnAddTask} />}
      {project.tasks.length > 0 && (
        <ul className="list-inside">
          {project.tasks.map((task) => (
            <li
              key={task.id}
              className="text-gray-600 mb-2  bg-gray-300 p-2 rounded-md text-md flex  justify-between items-center"
            >
              <span>{task.name}</span>
              <MdDeleteForever color="red" size="25px" onClick={() => handleOnDeleteTask(task.id, project.id)} />
            </li>
          ))}
        </ul>
      )}
      {!isNewTask & (project.tasks.length === 0) ? (
        <NoTasks onNewTask={handleOnNewTask} />
      ) : null}
    </>
  );
}
