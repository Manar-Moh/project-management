import { use, useRef } from "react";
import { Button } from "../base/Button";
import { Tasks } from "../tasks/Tasks";

export function Project({ project, onDelete, onTaskAdd }) {
  let date = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const newTask = useRef();

  return (
    <div className="w-full md:w-4/5 px-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 mt-10 mb-4">
          {project.name}
        </h1>
        <Button
          className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded-md mt-4"
          onClick={() => onDelete(project.id)}
        >
          Delete Project
        </Button>
      </div>

      <h3 className="text-gray-600 mb-4">Due Date: {date}</h3>

      <p className="text-gray-600 mb-4 mt-6">{project.description}</p>
      <hr className="my-4 border-t-orange-600" />
      <Tasks project={project} />
    </div>
  );
}
