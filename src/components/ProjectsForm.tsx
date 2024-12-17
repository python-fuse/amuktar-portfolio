import React, { useState } from "react";

type ProjectsFormProps = {
  info: any;
  setInfo: React.Dispatch<React.SetStateAction<any>>;
};

const ProjectCategory: React.FC<{
  category: string;
  projects: any[];
  onUpdate: (projects: any[]) => void;
}> = ({ category, projects, onUpdate }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: string
  ) => {
    const { value } = e.target;
    const updatedProjects = projects.map((proj, i) =>
      i === index
        ? {
            ...proj,
            [field]:
              field === "tools"
                ? value.split(",").map((tool) => tool.trim())
                : field === "activities"
                ? value.split("\n").filter((activity) => activity.trim())
                : value,
          }
        : proj
    );
    onUpdate(updatedProjects);
  };

  const addProject = () => {
    onUpdate([
      ...projects,
      {
        title: "",
        tools: [],
        project_url: "",
        activities: [],
      },
    ]);
  };

  const removeProject = (index: number) => {
    onUpdate(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold capitalize">
          {category.replace("_", " ")}
        </h3>
        <button
          onClick={addProject}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Project
        </button>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="border p-4 rounded space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => removeProject(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <label>Title:</label>
            <input
              type="text"
              value={project.title}
              onChange={(e) => handleChange(e, index, "title")}
              className="border p-2 rounded"
            />

            <label>Tools (comma-separated):</label>
            <input
              type="text"
              value={project.tools.join(", ")}
              onChange={(e) => handleChange(e, index, "tools")}
              className="border p-2 rounded"
            />

            <label>Project URL:</label>
            <input
              type="text"
              value={project.project_url}
              onChange={(e) => handleChange(e, index, "project_url")}
              className="border p-2 rounded"
            />

            <label>Activities (one per line):</label>
            <textarea
              value={project.activities.join("\n")}
              onChange={(e) => handleChange(e, index, "activities")}
              className="border p-2 rounded"
              rows={6}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const ProjectsForm: React.FC<ProjectsFormProps> = ({ info, setInfo }) => {
  const [activeCategory, setActiveCategory] = useState("data_analytics");

  const updateProjects = (category: string, projects: any[]) => {
    setInfo((prev: any) => ({
      ...prev,
      projects: {
        ...prev.projects,
        [category]: projects,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4 border-b">
        {Object.keys(info.projects).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 ${
              activeCategory === category
                ? "border-b-2 border-blue-500 text-blue-500"
                : ""
            }`}
          >
            {category.replace("_", " ").toUpperCase()}
          </button>
        ))}
      </div>

      <ProjectCategory
        category={activeCategory}
        projects={info.projects[activeCategory]}
        onUpdate={(projects) => updateProjects(activeCategory, projects)}
      />
    </div>
  );
};

export default ProjectsForm;
