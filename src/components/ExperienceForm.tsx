import React from "react";

type ExperienceFormProps = {
  info: any;
  setInfo: React.Dispatch<React.SetStateAction<any>>;
};

const ExperienceForm: React.FC<ExperienceFormProps> = ({ info, setInfo }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: string
  ) => {
    const { value } = e.target;
    setInfo((prev: any) => ({
      ...prev,
      experience: prev.experience.map((exp: any, i: number) =>
        i === index
          ? {
              ...exp,
              [field]: field === "activities" ? value.split("\n") : value,
            }
          : exp
      ),
    }));
  };

  const addExperience = () => {
    setInfo((prev: any) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          activities: [],
        },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    setInfo((prev: any) => ({
      ...prev,
      experience: prev.experience.filter((_: any, i: number) => i !== index),
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Experience</h2>
        <button
          onClick={addExperience}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Experience
        </button>
      </div>

      {info.experience.map((exp: any, index: number) => (
        <div key={index} className="border p-4 rounded space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => removeExperience(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <label>Company:</label>
            <input
              type="text"
              value={exp.company}
              onChange={(e) => handleChange(e, index, "company")}
              className="border p-2 rounded"
            />

            <label>Position:</label>
            <input
              type="text"
              value={exp.position}
              onChange={(e) => handleChange(e, index, "position")}
              className="border p-2 rounded"
            />

            <label>Start Date:</label>
            <input
              type="text"
              value={exp.startDate}
              onChange={(e) => handleChange(e, index, "startDate")}
              className="border p-2 rounded"
              placeholder="e.g. October, 2022"
            />

            <label>End Date:</label>
            <input
              type="text"
              value={exp.endDate}
              onChange={(e) => handleChange(e, index, "endDate")}
              className="border p-2 rounded"
              placeholder="e.g. February, 2023"
            />

            <label>Activities (one per line):</label>
            <textarea
              value={exp.activities?.join("\n")}
              onChange={(e) => handleChange(e, index, "activities")}
              className="border p-2 rounded"
              rows={4}
              placeholder="Enter activities..."
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceForm;
