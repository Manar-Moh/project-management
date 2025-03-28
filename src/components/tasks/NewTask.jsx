import { Input } from "../base/Input";
import { Button } from "../base/Button";
import { useRef, useState } from "react";
import { Modal } from "../base/Modal";

export function NewTask({ project ,onNewTask }) {

    const [taskName, setTaskName] = useState("");
    const modalRef = useRef();

    function handleOnChange(e) {
        setTaskName((prev) => e.target.value);
    }

    function onAddTask() {
        if (taskName.trim() === "") {
            modalRef.current.open();
            return;
        }
        const newTask = {
            id: crypto.randomUUID(),
            name: taskName,
            completed: false,
        };
        onNewTask(newTask);
        setTaskName("");
    }

  return (
    <>
    <Modal ref={modalRef} title="Error">
        <p className="text-gray-500">Please enter the task</p>
    </Modal>
    <div className="flex gap-2">
      <div className="flex-1">
        <Input label="Task Title" value={taskName} onChange={handleOnChange} />
      </div>
      <Button onClick={onAddTask} className="bg-blue-500 hover:bg-blue-600 self-center mt-4">
        Add
      </Button>
    </div>
    </>
  );
}
