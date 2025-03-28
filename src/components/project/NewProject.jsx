import { Button } from "../base/Button";
import { Input } from "../base/Input";
import { useRef } from "react";
import { Modal } from "../base/Modal";
export function NewProject({ onReset, onSubmitHandle }) {
  const pName = useRef();
  const pDescription = useRef();
  const pDueDate = useRef();
  const modalRef = useRef();

  function onSubmit(event) {
    event.preventDefault();

    const name = pName.current.value;
    const description = pDescription.current.value;
    const dueDate = pDueDate.current.value;

    if (
      name.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    let project = {
      name: name,
      description: description,
      dueDate: dueDate,
    };

    onSubmitHandle(project);
    pName.current.value = "";
    pDescription.current.value = "";
    pDueDate.current.value = "";
  }

  return (
    <>
      <Modal ref={modalRef} title="Error">
        <p className="text-gray-500">Please fill all the fields</p>
      </Modal>
      <div className="w-full md:w-4/5 px-10">
        <form className="mt-20">
          <Input label="Project Name" ref={pName} />
          <Input label="Description" isTextArea={true} ref={pDescription} />
          <Input label="Due Date" type="date" ref={pDueDate} />
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
    </>
  );
}
