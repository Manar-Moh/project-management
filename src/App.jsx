import { ProjectsSidebar } from "./components/sidebar/ProjectsSidebar";
import { NewProject } from "./components/project/NewProject";
import { NoProjects } from "./components/project/NoProjects";
import { useState } from "react";
import { Project } from "./components/project/Project";

function App() {
  const [projectsState, setProjectState] = useState({
    currentSelectedProject: null,
    projects: [],
  });

  function handleSelectProject(id) {
    setProjectState((prev) => ({
      ...prev,
      currentSelectedProject: id,
    }));
  }

  function handleAddProject(project) {
    project.id = Math.random();
    project.tasks = [];

    setProjectState((prev) => ({
      ...prev,
      projects: [...prev.projects, project],
    }));

    handleSelectProject(project.id);
  }

  function handleReset() {
    setProjectState((prev) => ({
      ...prev,
      currentSelectedProject: projectsState.projects.length > 0 ? projectsState.projects[0].id : null,
    }));
  }

  function handleDeleteProject(id) {
    const updatedProjects = projectsState.projects.filter(
      (project) => project.id !== id
    );
    setProjectState((prev) => ({
      ...prev,
      projects: updatedProjects,
      currentSelectedProject: updatedProjects.length > 0 ? updatedProjects[0].id : null,
    }));
  }

  return (
    <main className="flex">
      <ProjectsSidebar
        handleSelectProject={handleSelectProject}
        projects={projectsState}
      />
      {projectsState.currentSelectedProject == "new" ? (
        <NewProject onReset={handleReset} onSubmitHandle={handleAddProject} />
      ) : (projectsState.projects.length > 0 && projectsState.currentSelectedProject != null )? (
        <Project
          project={projectsState.projects.find(
            (project) => project.id === projectsState.currentSelectedProject
          )}
          onDelete={handleDeleteProject}
        />
      ) : (
        <NoProjects />
      )}
    </main>
  );
}

export default App;
