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

  console.log(title);

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  console.log(description);

  return (
    <>
      <form className="border bg-red=800 rounded flex-col justify-center h6 items-center m-2"
        onSubmit={handleSubmit}
      >
        <div className="">
          <label>Title</label>
          <input
            type="text"
            onChange={handleTitleChange}
          />
        </div>
        <div className="">
          <label>Description</label>
          <input
            type="text"
            onChange={handleDescriptionChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default AddProject
