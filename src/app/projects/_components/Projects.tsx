import ProjectView from "@/components/DataAnalytics";
import { MYINFO } from "@/utils/definitions";

const Projects = ({ myInfo: { projects } }: { myInfo: MYINFO }) => {
  return (
    <div className="flex-1 flex gap-y-4 flex-col overflow-y-auto  ">
      {/* About */}
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold  text-blue-500">My Projects</h2>
        {/* some subtitle for this page */}
        <p className="text-sm text-white/90 w-3/4">
          Here are some of the projects that I have worked on in the past. Each
          project showcases my skills and experience in different areas of data
          science and analysis.
        </p>
      </div>

      {/* Data Analytics */}
      <ProjectView
        projects={projects.data_analytics}
        title={"Data Analytics"}
      />

      {/* Data Science */}
      <ProjectView projects={projects.data_science} title={"Data Science"} />

      {/* Data enginerring */}
      <ProjectView
        projects={projects.data_engineering}
        title={"Data Engineering"}
      />
    </div>
  );
};
export default Projects;
