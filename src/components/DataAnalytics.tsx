import { MYINFO } from "@/utils/definitions";

const ProjectView = ({
  projects,
  title,
}: {
  projects: MYINFO["projects"]["data_analytics"];
  title: string;
}) => {
  return (
    <div className="space-y-2 ">
      <h3 className="text-2xl font-semibold text-blue-500">{title}</h3>
      {projects.map((project, index) => (
        <div key={index} className="space-y-2 border rounded-md p-4">
          <h3 className="text-2xl font-semibold text-blue-500">
            {project.title}
          </h3>
          <a
            className="text-blue-600/90 text-sm"
            target="_blank"
            href={project.project_url}
          >
            Visit
          </a>
          <div className="space-x-2">
            {project.tools.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-blue-500 text-white/90 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="list-disc list-inside">
            {project.activities.map((activity, index) => (
              <li className="text-sm">{activity}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default ProjectView;
