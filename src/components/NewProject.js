import { useRef } from "react"
import Input from "./Input.js"
import Modal from "./Modal.js"

export default function NewProject({onAdd, onCancel} ){
  const modal = useRef();

  const title = useRef();
  const description  = useRef();
  const dueDate = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;


    // validation....
    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {

      // show the error modal
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate

    });

  }


  return (
    <>
    <Modal ref={modal} buttonCaption="Okay">
      <h2 className="text-xl font-bold text-stone-500 my-4" >
        Invalid Input
      </h2>
      <p className="text-stone-400 mb-4">Oops... looks like you forgot to enter a value.</p>
      <p className="text-stone-400 mb-4">Please make sure youprovide a value for every input field.</p>
    </Modal>
  <div className="w-[35rem] mt-16">
    <menu className="flex items-center justify-end gap-4 my-4">
      <li>
        <button onClick={onCancel} className="text-stone-800 hover:text-stone-950" >Cancel</button>
        </li>
      <li>
        <button 
        onClick={handleSave} 
        className="px-6 py-2 rounded-md bg-deep-blue text-stone-50 hover:bg-stone-950">Save</button>
        </li>
    </menu>
    <div>
      <Input type="text" ref={title}  label="Title" />
      <Input ref={description}  label="Description"  textarea />
      <Input type="date" ref={dueDate}  label="Due Date" />
  </div>
  </div>
        </>
  );
}