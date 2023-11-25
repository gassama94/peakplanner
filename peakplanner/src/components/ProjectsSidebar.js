import Button from "./Button.js";



export default function ProjectsSidebar({onStartAddTask, Tasks}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Tasks</h2>
            <div>
                <Button onClick={onStartAddTask}>
                    + Add Task

                </Button>
                <ul className="mt-8">
                    {Tasks.map(Tasks => <li key={Tasks.id}>
                        <button className="w-full text-left px-2 pyz1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">{Tasks.title}</button>
                    </li>)}
                </ul>
            </div>
        </aside>
    );
}

