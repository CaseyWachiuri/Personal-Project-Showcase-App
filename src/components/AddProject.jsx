import { useState } from "react";

function AddProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Handle the submitted form data
  function handleSubmit() {
  }

  return (
    <>
      <form className="border bg-red=800 rounded flex-col justify-center h6 items-center m-2"
        onSubmit={handleSubmit}>
        <div className="">
          <label>Title</label>
          <input name="Title" />
        </div>
        <div className="">
          <label>Description</label>
          <input name="Description" />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default AddProject
