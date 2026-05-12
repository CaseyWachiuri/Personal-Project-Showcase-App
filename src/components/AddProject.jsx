import { useState } from "react";

function AddProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Handle the submitted form data
  function handleSubmit(e) {
    e.preventDefault();
    alert("form submitted successfully");
  }

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }


  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  console.log(`title: ${title} , description: ${description}`);

  return (
    <div className="border bg-gray-100 flex flex-col justify-around rounded-l m-2 p-2">
      <h2 className="font-bold text-2xl">Add Project</h2>
      <form
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col my-4">
          <label className="font-medium text-lg">Title</label>
          <input className="border rounded-l mt-1 p-2"
            type="text"
            onChange={handleTitleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium text-lg">Description</label>
          <input
            className="border rounded-l mt-1 p-2"
            type="text"
            onChange={handleDescriptionChange}
          />
        </div>
        <button type="submit" className="border bg-white-800 rounded-l font-medium my-3 px-8">Add</button>
      </form>
    </div >
  )
}

export default AddProject
