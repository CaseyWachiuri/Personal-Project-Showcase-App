import { useEffect, useState } from 'react'
import projectData from './data/projects'
import Header from './components/Header'
import ProjectList from './components/ProjectList'

function App() {

  // Initializing state handling
  const [projects, setProjects] = useState(projectData);

  // Fetch data from the database (later challenge)
  //useEffect(() => {
  //});

  // Search State handling
  const [searchProj, setSearchProj] = useState("");

  // Input change handler


  return (
    <>
      <Header text={"Personal Project Showcase App"} />
      {/* Focus on generating the list for now */}
      {/* Prop to handle outputting the list */}
      <ProjectList projects={projects} />
      {/* < SearchBar title={title} /> */}
    </>
  )
}

export default App
