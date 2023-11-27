import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import SignInForm from './pages/auth/SignInForm';
import ProjectManagement from './components/ProjectManagement';
import NoProjectSelected from './components/NoProjectSelected.js';
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import ProjectsSidebar from './components/ProjectsSidebar.js';
import NewProject from './components/NewProject';
import SelectedProject from './components/SelectedProject.js';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false); // State for authentication status

  // Simulate a login action
  const handleLogin = () => {
    // In a real app, you'd make an API call here
    setIsAuthenticated(true);
};

// Handle logout action
const handleLogout = () => {
    // In a real app, you might also inform the backend about the logout
    setIsAuthenticated(false);
};



  function handleAddTask(text){
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }


  function handleDeleteTask(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),

      };
    });

  }

  function handleSelectProject(id){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,

      };
    });

  }

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,

      };
    });
  }


function handleCancelAddProject(){
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId: undefined,

    };
  });

}

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleDeleteProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),

      };
    });
  }


  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);


  let content = (
  <SelectedProject 
  project={selectedProject} 
  onDelete={handleDeleteProject}
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={projectsState.tasks}
  />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (


<div>
  <div>

<Router>
      <NavBar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Redirect to="/projects" /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/signin">
          {isAuthenticated ? <Redirect to="/projects" /> : <SignInForm onLogin={handleLogin} />}
        </Route>
        <Route path="/projects">
          {isAuthenticated ? <ProjectManagement /> : <Redirect to="/signin" />}
        </Route>
        {/* ... other routes ... */}
      </Switch>
    </Router>
  </div>

    <main className='h-screen my-8 flex gap-8'>

{/* */}

    <ProjectsSidebar 
    onStartAddProject={handleStartAddProject}
    projects={projectsState.projects}
    onSelectProject={handleSelectProject}
    selectedProjectId={projectsState.selectedProjectId}
    />
    {content}
    </main>
      </div>
      
      
  );
}

export default App;
