import { Button } from "../base/Button";

export function NoTasks() {
  return (
    <p className="text-gray-600 mb-4 text-center mt-10">
      <span className="text-2xl font-semibold text-gray-800">
        No tasks added yet
      </span>
      <br />
      <span className="text-gray-400 text-lg">Add tasks to get started!</span>
      <br />
      <Button className="bg-orange-600 hover:bg-orange-800 text-white py-2 px-4 rounded-md mt-4">
        Add Task
      </Button>
      <br />
    </p>
  );
}