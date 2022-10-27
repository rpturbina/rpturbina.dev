import { ProjectItemProps } from "@typings/index";

const ProjectItem = ({
  title,
  description,
  stack,
  repoLink,
  demoLink,
}: ProjectItemProps) => {
  return (
    <li className="project-item">
      <h3 className="project-title">{title}</h3>
      <p className="project-descriptiion">{description}</p>
      <p>
        <strong>Tech Stack : </strong> {stack}
      </p>
      <div className="project-link">
        <a href={repoLink} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={demoLink} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
    </li>
  );
};
export default ProjectItem;
