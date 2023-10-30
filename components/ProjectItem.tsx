import { ProjectItemProps } from '@/typings/index'
import { FiExternalLink } from 'react-icons/fi'
import { IoLogoGithub } from 'react-icons/io'

const ProjectItem = ({
  title,
  description,
  stack,
  repoLink,
  demoLink,
}: ProjectItemProps) => {
  return (
    <li className="project-item">
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="line-clamp-4" title={description}>
        {description}
      </p>
      <p className="py-4">
        <strong>Tech Stack : </strong> {stack}
      </p>
      <div className="flex gap-x-3">
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="opacity-60 transition-opacity hover:opacity-100"
            title="Go to project repo"
          >
            <IoLogoGithub fontSize={24} />
          </a>
        )}
        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="opacity-60 transition-opacity hover:opacity-100"
          title="Go to project demo"
        >
          <FiExternalLink fontSize={24} />
        </a>
      </div>
    </li>
  )
}
export default ProjectItem
