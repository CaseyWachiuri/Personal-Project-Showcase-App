import { useState } from 'react';
import ProjectItem from './ProjectItem'

function ProjectList({ projects }) {
  const [search, setSearch] = useState('')

  // Filter Implementatoin. Look for another function in the future
  const projectsToDisplay = projects.filter((proj) => (proj.title.toLowerCase().includes(search.toLowerCase())))

  // Map through the filtered projects (displays all if nothing is typed
  const projectItems = projectsToDisplay.map((proj) => (<ProjectItem key={proj.id} title={proj.title} description={proj.description} />))

  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  // Trial run implementation for the search bar

  return (
    <div className="border bg-gray-100 rounded-l flex flex-col justify-around m-2 p-2">
      <div className="border bg-gray-100 rounded-l mb-2 px-1">
        {/* Search bar isn't the max width. Remember to fix that later*/}
        <input
          type='search'
          value={search}
          onChange={handleSearchChange}
          placeholder="search projects" />
      </div>
      <div className="border p-2">
        <ul>
          {projectItems}
        </ul>
      </div>
    </div>
  )
}

export default ProjectList
