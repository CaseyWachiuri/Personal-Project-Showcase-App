import { useEffect, useState } from 'react'
import projectData from './data/projects'
import Header from './components/Header'
import ProjectList from './components/ProjectList'
import AddProject from './components/AddProject';

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
      <AddProject />
      <ProjectList projects={projects} />
      {/* < SearchBar title={title} /> */}
    </>
  )
}

export default App
