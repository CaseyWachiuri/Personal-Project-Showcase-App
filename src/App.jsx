import React, { useState } from 'react'
import './App.css'

function App() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A Clock App",
    },
    {
      id: 2,
      title: "Project 2",
      description: "A Project List Display App",
    },
    {
      id: 3,
      title: "Project 3",
      description: "A Spotify Playlist Organiser",
    },
  ]

  // Destructuring the array
  const { id, title, description } = projects;

  // Initializing state handling
  const [searchProj, setSearchProj] = useState("");

  // Input change handler
  

  return (
    <>
    </>
  )
}

export default App
