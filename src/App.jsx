import { useEffect, useState } from 'react'
import projects from '../db.json';
import Header from './components/Header';

function App() {
  const data = [
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

  // Initializing state handling
  const [projects, setProjects] = useState("data");

  // Fetch data from the database (later challenge)
  //useEffect(() => {
  //});

  // Destructuring the array
  const { id, title, description } = projects;

  // Search State handling
  const [searchProj, setSearchProj] = useState("");

  // Input change handler


  return (
    <>
      <Header text={"Personal Project Showcase App"} />
      <SearchBar title={title} />
    </>
  )
}

export default App
