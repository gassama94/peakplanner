import { useState } from 'react';
import './App.css';
import NoProjectSelected from './components/NoProjectSelected.js';
import ProjectsSidebar from './components/ProjectsSidebar.js';
import NewProject from './components/NewProject';

function App() {
  const [tasksState, setTasksState] = useState({
    selectedTasksId: undefined,
    Tasks: []
  })

  function handleStartAddTask(){
    setTasksState(prevState => {
      return {
        ...prevState,
        selectedTasksId: null,

      };
    });
  }

  function handleAddTask(taskData){
    setTasksState(prevState => {
      const newTask = {
        ...taskData,
        id: Math.random()
      }
      return {
        ...prevState,
        Tasks: [...prevState.Tasks, newTask]
      }
    })
  }

  console.log(tasksState);

  let content;

  if (tasksState.selectedTasksId === null) {
    content = <NewProject onAdd={handleAddTask}/>
  } else if (tasksState.selectedTasksId === undefined) {
    content = <NoProjectSelected onStartAddTask={handleStartAddTask} />;
  }
  return (
    <main className='h-screen my-8 flex gap-8'>

    <ProjectsSidebar onStartAddTask={handleStartAddTask} />
    {content}
    </main>
  );
}

export default App;
