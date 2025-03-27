import { BsPlusCircle } from "react-icons/bs";
import { ProjectLink } from "./ProjectLink";
import { Button } from "../Button";

export function ProjectsSidebar({ handleSelectProject, projects }) {
  return (
    <aside className="w-1/5 bg-gray-800 h-screen p-4">
      <Button onClick={() => handleSelectProject("new")}>
        <BsPlusCircle className="inline-block " />
        <span className="px-2">New Project</span>
      </Button>
      <hr className="my-4 border-t-orange-600" />
      <ul>
        {projects.map((project) => (
          <ProjectLink
            key={project.id}
            title={project.name}
            onClick={() => handleSelectProject(project.id)}
          />
        ))}
      </ul>
    </aside>
  );
}
