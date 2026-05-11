import ProjectItem from './ProjectItem'

function ProjectList({ projects }) {
  const projectItems = projects.map((proj) => (<ProjectItem key={proj.id} title={proj.title} description={proj.description} />))

  function handleSearch() {
    console.log("Hello there");
  }

  return (
    <div className="border bg-gray-100 rounded-l flex flex-col justify-around m-2 p-2">
      <div className="border bg-gray-100 rounded-l mb-2 px-1">
        <input
          type='search'
          value={name}
          onChange={handleSearch}
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
