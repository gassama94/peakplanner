import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import SignInForm from './pages/auth/SignInForm';
import NoProjectSelected from './components/NoProjectSelected.js';
import { Route, Switch, Redirect} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import ProjectsSidebar from './components/ProjectsSidebar.js';
import NewProject from './components/NewProject';
import SelectedProject from './components/SelectedProject.js';
import SignUpForm from './pages/auth/SignUpForm';
import "./api/axiosDefaults";

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

const [ setShowSignUp] = useState(false);

  const handleShowSignUp = () => {
    setShowSignUp(true);
  };

  const handleHideSignUp = () => {
    setShowSignUp(false);
  };


  //const location = useLocation(); // Get the current location
  //const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';


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
  <Router>
      <NavBar isAuthenticated={isAuthenticated} onLogout={handleLogout} onSignUpClick={handleShowSignUp} />
      <Switch>
        {/* Home Page Route */}
        <Route exact path="/">
          {isAuthenticated ? (
    <main className='h-screen my-8 flex gap-8'>
  <ProjectsSidebar 
    onStartAddProject={handleStartAddProject}
    projects={projectsState.projects}
    onSelectProject={handleSelectProject}
    selectedProjectId={projectsState.selectedProjectId}
    />
    {content}
    </main> 
    ) : (
        <Redirect to="signin"/>

        )}

          </Route>
        {/* Sign In Route */}
        <Route exact path="/signin">
          {isAuthenticated ? <Redirect to="/" /> : (
            <>
              <h1>Sign In</h1>
              <SignInForm onLogin={handleLogin} />
            </>
          )}
        </Route>

        {/* Sign Up Route */}
        <Route exact path="/signup">
          {isAuthenticated ? <Redirect to="/" /> : (
            <>
              <h1>Sign Up</h1>
              <SignUpForm onBack={handleHideSignUp}/>
            </>
          )}
        </Route>

        <Route render={() => <p>Page not found!</p>} />

        {/* ... other routes ... */}
      </Switch>
    </Router>

      </div>   
  );
}

export default App;
