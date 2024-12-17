"use client";

import React, { useState } from "react";
import { MYINFO } from "@/utils/definitions";
import SkillsForm from "@/components/SkillsForm";
import EducationForm from "@/components/EducationForm";
import ExperienceForm from "@/components/ExperienceForm";
import CertificationsForm from "@/components/CertificationsForm";
import HobbiesForm from "@/components/HobbiesForm";
import ProjectsForm from "@/components/ProjectsForm";
import { writeData } from "@/actions/actions";

const UploadPage = () => {
  const [selectedSection, setSelectedSection] = useState("skills");
  const [loading, setLoading] = useState(false);

  const [info, setInfo] = useState<MYINFO>({
    skills: {
      languages: [],
      ml: [],
      analysisVisualization: [],
    },
    education: {
      bachelor: {
        degree: "",
        school: "",
        graduation: "",
        relevantCourses: [],
      },
      master: {
        degree: "",
        school: "",
        graduation: "",
        relevantCourses: [],
      },
    },
    experience: [],
    certifications: [],
    hobbies: [],
    contact: [],
    projects: {
      data_analytics: [],
      data_science: [],
      data_engineering: [],
    },
  });

  const renderForm = () => {
    switch (selectedSection) {
      case "skills":
        return <SkillsForm info={info} setInfo={setInfo} />;
      // case "education":
      //   return <EducationForm info={info} setInfo={setInfo} />;
      case "experience":
        return <ExperienceForm info={info} setInfo={setInfo} />;
      case "certifications":
        return <CertificationsForm info={info} setInfo={setInfo} />;
      case "hobbies":
        return <HobbiesForm info={info} setInfo={setInfo} />;
      case "projects":
        return <ProjectsForm info={info} setInfo={setInfo} />;
      default:
        return <div>Select a section to update</div>;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Info:", info);

    try {
      setLoading(true);
      await writeData(info);
      alert("Data uploaded successfully!");
    } catch (e) {
      alert("An error occured!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dynamic Upload Form</h1>

      <label>Select Section to Update:</label>
      <select
        value={selectedSection}
        onChange={(e) => setSelectedSection(e.target.value)}
        className="border p-2 mb-4"
      >
        <option value="projects">Projects</option>
        <option value="skills">Skills</option>
        {/* <option value="education">Education</option> */}
        <option value="experience">Experience</option>
        <option value="certifications">Certifications</option>
        <option value="hobbies">Hobbies</option>
      </select>

      <form onSubmit={handleSubmit} className="space-y-4">
        {renderForm()}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
