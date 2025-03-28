import { ProjectsSidebar } from "./components/sidebar/ProjectsSidebar";
import { NewProject } from "./components/project/NewProject";
import { NoProjects } from "./components/project/NoProjects";
import { useState } from "react";
import { Project } from "./components/project/Project";

function App() {
  const [projectsState, setProjectState] = useState({
    currentSelectedProject: null,
    projects: []
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

  function onTaskAdd(newTask) {
    const updatedProjects = projectsState.projects.map((project) => {
      if (project.id === newTask.projectId) {
        return { ...project, tasks: [...project.tasks, newTask] };
      }
      return project;
    });

    setProjectState((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  }

  function deleteTask(taskId, projectId) {
    setProjectState((prev) => ({
      ...prev,
      projects: prev.projects.map((project) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskId),
          };
        }
        return project;
      }),
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
          onTaskAdd={onTaskAdd}
          deleteTask={deleteTask}
        />
      ) : (
        <NoProjects />
      )}
    </main>
  );
}

export default App;
