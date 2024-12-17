import React from "react";

type EducationFormProps = {
  info: any;
  setInfo: React.Dispatch<React.SetStateAction<any>>;
};

const EducationForm: React.FC<EducationFormProps> = ({ info, setInfo }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    level: string,
    field: string
  ) => {
    const { value } = e.target;
    setInfo((prev: any) => ({
      ...prev,
      education: {
        ...prev.education,
        [level]: {
          ...prev.education[level],
          [field]: field === "relevantCourses" ? value.split(",") : value,
        },
      },
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Bachelor</h3>
      <div className="flex flex-col gap-2">
        <label>Degree:</label>
        <input
          type="text"
          value={info.education.bachelor.degree}
          onChange={(e) => handleChange(e, "bachelor", "degree")}
          className="border p-2 rounded"
        />

        <label>School:</label>
        <input
          type="text"
          value={info.education.bachelor.school}
          onChange={(e) => handleChange(e, "bachelor", "school")}
          className="border p-2 rounded"
        />

        <label>Graduation:</label>
        <input
          type="text"
          value={info.education.bachelor.graduation}
          onChange={(e) => handleChange(e, "bachelor", "graduation")}
          className="border p-2 rounded"
          placeholder="e.g. Dec, 2017"
        />

        <label>Relevant Courses (comma-separated):</label>
        <textarea
          value={info.education.bachelor.relevantCourses?.join(",")}
          onChange={(e) => handleChange(e, "bachelor", "relevantCourses")}
          className="border p-2 rounded"
          rows={4}
          placeholder="Operating Systems, Data Structures, Algorithms..."
        />
      </div>

      <h3 className="text-xl font-bold mt-6">Master</h3>
      <div className="flex flex-col gap-2">
        <label>Degree:</label>
        <input
          type="text"
          value={info.education.master.degree}
          onChange={(e) => handleChange(e, "master", "degree")}
          className="border p-2 rounded"
        />

        <label>School:</label>
        <input
          type="text"
          value={info.education.master.school}
          onChange={(e) => handleChange(e, "master", "school")}
          className="border p-2 rounded"
        />

        <label>Graduation:</label>
        <input
          type="text"
          value={info.education.master.graduation}
          onChange={(e) => handleChange(e, "master", "graduation")}
          className="border p-2 rounded"
          placeholder="e.g. Dec, 2023"
        />

        <label>Relevant Courses (comma-separated):</label>
        <textarea
          value={info.education.master.relevantCourses?.join(",")}
          onChange={(e) => handleChange(e, "master", "relevantCourses")}
          className="border p-2 rounded"
          rows={4}
          placeholder="Machine Learning, Data Science, AI..."
        />
      </div>
    </div>
  );
};

export default EducationForm;
