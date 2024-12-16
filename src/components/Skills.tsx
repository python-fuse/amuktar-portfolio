import { MYINFO } from "@/utils/definitions";
import ListItem from "./ListItem";

const Skills = ({ myInfo }: { myInfo: MYINFO }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl text-blue-500 font-semibold">My Skills</h2>
      <div className="flex gap-x-4">
        <div className="w-1/3 ">
          <h3>Programming languages</h3>
          <div className="flex mt-2 flex-wrap  gap-2">
            {myInfo.skills.languages?.map((language: string, index) => (
              <ListItem key={index} text={language} />
            ))}
          </div>
        </div>

        <div className="w-1/3 ">
          <h3>ML and Big Data</h3>
          <div className="flex mt-2 flex-wrap  gap-2">
            {myInfo.skills.ml?.map((skill: string, index) => (
              <ListItem key={index} text={skill} />
            ))}
          </div>
        </div>

        <div className="w-1/3 ">
          <h3>Analytics and visualization</h3>
          <div className="flex mt-2 flex-wrap gap-2">
            {myInfo.skills.analysisVisualization?.map(
              (skill: string, index) => (
                <ListItem key={index} text={skill} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
