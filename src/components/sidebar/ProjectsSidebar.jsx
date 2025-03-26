import { BsPlusCircle } from "react-icons/bs";
import { ProjectLink} from "./ProjectLink";
import { NewProject } from "../NewProject";
import { NoProjects } from "../NoProjects";

export function ProjectsSidebar() {
  return <main className="flex ">
  <aside className="w-1/5 bg-gray-800 h-screen p-4">
       <button className="bg-orange-600 hover:bg-orange-800 text-white py-2 px-5 w-auto  rounded-md">
      <BsPlusCircle className="inline-block " />
      <span className="px-2">New Project</span>
      </button>
      <hr className="my-4 border-t-orange-600" />
      <ul >
        <ProjectLink title="p 1" />
        <ProjectLink title="p 2" />
      </ul>
    </aside>
    <NoProjects />
  </main>
}