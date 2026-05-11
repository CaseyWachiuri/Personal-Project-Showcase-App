function ProjectItem({ title, description }) {

  return (
    <li>
      <h3 className="font-medium text-xl">{title}</h3>
      <p className="font-small text-base">{description}</p>
    </li>
  )
}

export default ProjectItem
