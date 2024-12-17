import React from "react";

type CertificationsFormProps = {
  info: any;
  setInfo: React.Dispatch<React.SetStateAction<any>>;
};

const CertificationsForm: React.FC<CertificationsFormProps> = ({
  info,
  setInfo,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: string
  ) => {
    const { value } = e.target;
    setInfo((prev: any) => ({
      ...prev,
      certifications: prev.certifications.map((cert: any, i: number) =>
        i === index ? { ...cert, [field]: value } : cert
      ),
    }));
  };

  const addCertification = () => {
    setInfo((prev: any) => ({
      ...prev,
      certifications: [...prev.certifications, { title: "", date: "" }],
    }));
  };

  const removeCertification = (index: number) => {
    setInfo((prev: any) => ({
      ...prev,
      certifications: prev.certifications.filter(
        (_: any, i: number) => i !== index
      ),
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <button
          onClick={addCertification}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Certification
        </button>
      </div>

      {info.certifications.map((cert: any, index: number) => (
        <div key={index} className="border p-4 rounded space-y-4">
          <div className="flex justify-end">
            <button
              onClick={() => removeCertification(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <label>Title:</label>
            <input
              type="text"
              value={cert.title}
              onChange={(e) => handleChange(e, index, "title")}
              className="border p-2 rounded"
              placeholder="e.g. IBM Data Engineering Coursera"
            />

            <label>Date:</label>
            <input
              type="text"
              value={cert.date}
              onChange={(e) => handleChange(e, index, "date")}
              className="border p-2 rounded"
              placeholder="e.g. 2021"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationsForm;
