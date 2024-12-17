import React from "react";

type SkillsFormProps = {
  info: any;
  setInfo: React.Dispatch<React.SetStateAction<any>>;
};

const SkillsForm: React.FC<SkillsFormProps> = ({ info, setInfo }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const { value } = e.target;
    setInfo((prev: any) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [key]: value.split(","),
      },
    }));
  };

  return (
    <div className="flex flex-col">
      <label>Languages (comma-separated):</label>
      <input
        type="text"
        value={info.skills.languages.join(",")}
        onChange={(e) => handleChange(e, "languages")}
        placeholder="e.g. Python, JavaScript, Java"
      />

      <label>ML Tools (comma-separated):</label>
      <input
        type="text"
        value={info.skills.ml.join(",")}
        onChange={(e) => handleChange(e, "ml")}
        placeholder="e.g. TensorFlow, PyTorch"
      />

      <label>Analysis & Visualization (comma-separated):</label>
      <input
        type="text"
        value={info.skills.analysisVisualization.join(",")}
        onChange={(e) => handleChange(e, "analysisVisualization")}
        placeholder="e.g. Tableau, Power BI"
      />
    </div>
  );
};

export default SkillsForm;
