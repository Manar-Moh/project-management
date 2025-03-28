import { Button } from "./Button";
import { Input } from "./Input";
import { useRef } from "react";

export function NewProject({ onReset, onSubmitHandle }) {
  const pName = useRef();
  const pDescription = useRef();
  const pDueDate = useRef();

  function onSubmit(event) {
    event.preventDefault();
    if(!pName.current.value || !pDescription.current.value || !pDueDate.current.value) {
      alert("Please fill all fields");
      return;
    }
    
    let project = {
      name: pName.current.value,
      description: pDescription.current.value,
      dueDate: pDueDate.current.value,
    };

    onSubmitHandle(project);
    pName.current.value = "";
    pDescription.current.value = "";
    pDueDate.current.value = "";
  }
  return (
    <div className="w-full md:w-4/5 px-10">
      <form className="mt-20">
        <Input label="Project Name" ref={pName}  />
        <Input label="Description" isTextArea={true} ref={pDescription}  />
        <Input label="Due Date" type="date" ref={pDueDate}  />
        <menu className="mt-4">
          <Button
            type="submit"
            className={"bg-orange-600 hover:bg-orange-800 me-3 w-1/6"}
            onClick={onSubmit}
          >
            Create
          </Button>
          <Button
            type="reset"
            className={"bg-gray-400 hover:bg-gray-700"}
            onClick={onReset}
          >
            Cancel
          </Button>
        </menu>
      </form>
    </div>
  );
}
