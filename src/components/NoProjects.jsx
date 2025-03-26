import emptyImg from '../assets/no-projects.png';
export function NoProjects() {
  return (
    <div className="w-full md:w-4/5 px-10 ">
      <div className="text-center items-center flex flex-col justify-center h-screen">
        <img src={emptyImg} alt="No projects" className="w-1/4 " />
        <h2 className="text-2xl font-semibold text-gray-800">No projects found</h2>
        <p className="text-gray-600 mt-4">Create a new project to get started.</p>
      </div>
    </div>
  );
}