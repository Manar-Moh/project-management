import { NewTask } from "./NewTask";
import { NoTasks } from "./NoTasks";
import { useState } from "react";

export function Tasks({ project }) {
  const [tasks, setTasks] = useState(project.tasks);
  const [isNewTask, setIsNewTask] = useState(false);
  function handleOnAddTask(newTask) {
    setTasks((prev) => [...prev, newTask]);
  }

  function handleOnNewTask() {
    setIsNewTask((prev) => !prev);
  }
  return (
    <>
      {isNewTask && <NewTask project={project} onNewTask={handleOnAddTask} />}
      {tasks.length > 0 && (
        <ul className="list-disc list-inside ">
          {tasks.map((task) => (
            <li key={task.id} className="text-gray-600 mb-2">
              {task.name}
            </li>
          ))}
        </ul>
      )}
      {!isNewTask & (tasks.length === 0) ? (
        <NoTasks onNewTask={handleOnNewTask} />
      ) : null}
    </>
  );
}
