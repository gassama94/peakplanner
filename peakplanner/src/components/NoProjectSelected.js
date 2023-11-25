import picture from "../assets/picture.png"
import Button from "./Button.js"


export default function NewProjectSelected({onStartAddTask}){
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={picture} alt="An empty task list"  className="w-16 h-16 object-contain mx-auto">
      </img>
      <h2 className="text-xl font-bold text-stone-500 my-4">No Task Selected</h2>
      <p className="text-stone-400 mb-4">Select a Task or get started with a new one </p>
      <p className="mt-8">
      <Button onClick={onStartAddTask}>
      Create a new Task
      </Button>
        
      </p>
    </div>
  )
}