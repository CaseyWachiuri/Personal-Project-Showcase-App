import ProjectItem from './ProjectItem'

function ProjectList({ projects }) {
  const projectItems = projects.map((proj) => (<ProjectItem key={proj.id} title={proj.title} description={proj.description} />))

  return (
    <div className="border bg-red=800 rounded flex justify-center h6 items-center m-2">
      <ul>
        {projectItems}
      </ul>
    </div>
  )
}

export default ProjectList
