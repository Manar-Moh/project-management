import { Button } from "./Button";
import { Input } from "./Input";

export function NewProject() {
  return (
    <div className="w-full md:w-4/5 px-10">
        <form className="mt-20">
          <Input label="Project Name" />
          <Input label="Description" isTextArea={true} />
          <Input label="Due Date" type="date" />
          <menu className="mt-4">
            <Button type="submit" className={"bg-orange-600 hover:bg-orange-800 me-3 w-1/6"}>Create</Button>
            <Button type="reset" className={"bg-gray-400 hover:bg-gray-700"}>Cancel</Button>
          </menu>
        </form>
    </div>
  );
}