import { ProjectsSidebar } from "./components/sidebar/ProjectsSidebar";
import { NewProject } from "./components/NewProject";
import { NoProjects } from "./components/NoProjects";
import {useState } from "react";

function App() {
  const [projectsState, setProjectState] = useState({
    currentSelectedProject: null,
    projects: [],
  });

  function handleSelectProject(project) {
    setProjectState((prev) => ({
      ...prev,
      currentSelectedProject: project,
    }));
  }

  function handleAddProject(project) {
    project.id = projectsState.projects.length + 1;
    setProjectState((prev) => ({
      ...prev,
      projects: [...prev.projects, project],
    }));
  }

  function handleReset() {
    setProjectState((prev) => ({
      ...prev,
      currentSelectedProject: null,
    }));
  }

  return (
    <main className="flex">
      <ProjectsSidebar
        handleSelectProject={handleSelectProject}
        projects={projectsState.projects}
      />
      {projectsState.currentSelectedProject != null ? (
        <NewProject 
        onReset={handleReset} 
        onSubmitHandle={handleAddProject}
        />
      ) : (
        <NoProjects />
      )}
    </main>
  );
}

export default App;
