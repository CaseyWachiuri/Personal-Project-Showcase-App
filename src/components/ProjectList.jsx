import ProjectItem from './ProjectItem'

function ProjectList({ projects }) {
  const projectItems = projects.map((proj) => (<ProjectItem key={proj.id} title={proj.title} description={proj.description} />))

  function handleSearch() {
    console.log("Hello there");
  }

  return (
    <div className="border bg-red=800 rounded flex-col justify-center h6 items-center m-2">
      <input className="border flex"
        type='search'
        value={name}
        onChange={handleSearch}
        placeholder="search projects" />
      <ul>
        {projectItems}
      </ul>
    </div>
  )
}

export default ProjectList
