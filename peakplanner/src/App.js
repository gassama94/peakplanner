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
      const taskId = Math.random();
      const newTask = {
        ...taskData,
        id: taskId,
      }
      return {
        ...prevState,
        selectedTasksId: undefined,
        Tasks: [...prevState.Tasks, newTask]
      }
    })
  }


  let content;

  if (tasksState.selectedTasksId === null) {
    content = <NewProject onAdd={handleAddTask}/>
  } else if (tasksState.selectedTasksId === undefined) {
    content = <NoProjectSelected onStartAddTask={handleStartAddTask} />;
  }
  return (
    <main className='h-screen my-8 flex gap-8'>

    <ProjectsSidebar 
    onStartAddTask={handleStartAddTask}
    Tasks={tasksState.Tasks} />
    {content}
    </main>
  );
}

export default App;
