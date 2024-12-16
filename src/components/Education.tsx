import { MYINFO } from "@/utils/definitions";
import ListItem from "./ListItem";

const Education = ({ myInfo }: { myInfo: MYINFO }) => {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-3xl text-blue-500 font-semibold">Education</h2>
        <div className="border rounded-lg p-4 ">
          <h3 className="font-semibold text-blue-500">
            {myInfo.education.bachelor.school}
          </h3>
          <p className="text-white/90 text-sm mb-2">
            {myInfo.education.bachelor.degree} -{" "}
            {myInfo.education.bachelor.graduation}
          </p>
          <h3 className="pb-2">Relevant courses:</h3>
          <div className="flex flex-wrap gap-2">
            {myInfo.education.bachelor.relevantCourses.map((course, index) => (
              <ListItem key={index} text={course} />
            ))}
          </div>
        </div>
      </div>
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold text-blue-500 text-justify">
          {myInfo.education.master.school}
        </h3>
        <p className="text-white/90 text-sm mb-2">
          {myInfo.education.master.degree} -{" "}
          {myInfo.education.master.graduation}
        </p>
        <h3 className="pb-2">Relevant courses:</h3>
        <div className="flex flex-wrap gap-2">
          {myInfo.education.master.relevantCourses.map((course, index) => (
            <ListItem key={index} text={course} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
