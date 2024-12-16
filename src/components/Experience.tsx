import { MYINFO } from "@/utils/definitions";

const Experience = ({ experience }: { experience: MYINFO["experience"] }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl text-blue-500 font-semibold">Experience</h2>

      {experience.map((exp, index) => (
        <div key={index} className="rounded border  p-4">
          <h3 className="text-lg font-bold text-blue-500">{exp.company}</h3>
          <p className="text-sm text-gray-400 mb-2  ">
            {exp.position} | {exp.startDate} - {exp.startDate}
          </p>

          <ul className="list-disc list-inside text-xs">
            {exp.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Experience;
