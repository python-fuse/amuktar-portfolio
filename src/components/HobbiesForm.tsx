import React from "react";

type HobbiesFormProps = {
  info: any;
  setInfo: React.Dispatch<React.SetStateAction<any>>;
};

const HobbiesForm: React.FC<HobbiesFormProps> = ({ info, setInfo }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const hobbies = e.target.value.split(",").map((hobby) => hobby.trim());
    setInfo((prev: any) => ({
      ...prev,
      hobbies,
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Hobbies</h2>
      <div className="flex flex-col gap-2">
        <label>Enter hobbies (comma-separated):</label>
        <textarea
          value={info.hobbies.join(", ")}
          onChange={handleChange}
          className="border p-2 rounded"
          rows={4}
          placeholder="Football, Cycling, Swimming, Reading"
        />
      </div>
    </div>
  );
};

export default HobbiesForm;
