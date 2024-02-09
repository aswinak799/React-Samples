import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTasks(text){
    setProjectState((prevState)=>{
      const newTask = {
        text:text,
        id: Date.now(),
        projectId: prevState.selectedProject,
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    })

  }
  function handleDeleteTasks(id){
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task)=>task.id !== id)
      };
    });
    
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }
  function handleAddProject(projectData){
      setProjectState((prevState)=>{
        const newProject = {
          ...projectData,
          id: Date.now(),
        }
        return {
          ...prevState,
          projects: [...prevState.projects, newProject],
          selectedProject: undefined,

        };
      })
  }
  
  function handleCancelAddProject(){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }
  function handleSelectedProject (id){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  function handleDeleteProoject(){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(project=> project.id !== prevState.selectedProject)
      };
    });
  }

  const selectedProject = projectState.projects.find((project)=> project.id === projectState.selectedProject);
  let content = <SelectedProject 
  project={selectedProject} 
  onDelete={handleDeleteProoject} 
  onAddTask={handleAddTasks}
  onDeleteTask={handleDeleteTasks}
  tasks={projectState.tasks.filter(task=> task.projectId === projectState.selectedProject)}
  />;
  if (projectState.selectedProject === null){
      content = <NewProject 
      onAdd={handleAddProject} 
      onCancel={handleCancelAddProject}/>
  }
  else if(projectState.selectedProject === undefined){
    content = <NoProjectSelected 
    onStartAddProject={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar 
      onStartAddProject={handleStartAddProject} 
      projects={projectState.projects} 
      onSelectProject={handleSelectedProject} 
      selectedProjectId={projectState.selectedProject}/>
      {content}
    </main>
  );
}

export default App;
