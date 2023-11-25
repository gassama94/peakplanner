
import './App.css';
import NoProjectSelected from './components/NoProjectSelected.js';
import ProjectsSidebar from './components/ProjectsSidebar.js';

function App() {
  return (
    <main className='h-screen my-8 flex gap-8'>

    <ProjectsSidebar />
    <NoProjectSelected />
    </main>
  );
}

export default App;
