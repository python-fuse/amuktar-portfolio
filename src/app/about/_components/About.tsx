import ListItem from "@/components/ListItem";
import { MYINFO } from "@/utils/definitions";
import { Key } from "react";

const About = ({ myInfo }: { myInfo: MYINFO }) => {
  return (
    <div className="flex-1 flex gap-y-2 flex-col overflow-y-auto  ">
      {/* About */}
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold  text-blue-500">About me</h2>
        <h3 className="text-2xl">
          I am
          <span className=" text-blue-500"> Abubakar Muhammad Muktar</span>
        </h3>
        <p className="text-white/90 text-sm">
          A highly skilled and motivated data professional with expertise in
          data science, analytics, and visualization. I am still a student
          seeking internship/alternance. I have a strong programming background
          and experience working with various tools and technologies. I am
          passionate about leveraging data to derive actionable insights and
          drive business growth.
        </p>
      </div>

      {/* Skills */}
      <div className="space-y-2">
        <h2 className="text-3xl text-blue-500 font-semibold">My Skills</h2>
        <div className="flex gap-x-4">
          <div className="w-1/3 ">
            <h3>Programming languages</h3>
            <div className="flex mt-2 flex-wrap  gap-2">
              {myInfo.skills.languages?.map(
                (language: string, index: Key | null | undefined) => (
                  <ListItem key={index} text={language} />
                )
              )}
            </div>
          </div>

          <div className="w-1/3 ">
            <h3>ML and Big Data</h3>
            <div className="flex mt-2 flex-wrap  gap-2">
              {myInfo.skills.ml?.map(
                (skill: string, index: Key | null | undefined) => (
                  <ListItem key={index} text={skill} />
                )
              )}
            </div>
          </div>

          <div className="w-1/3 ">
            <h3>Analytics and visualization</h3>
            <div className="flex mt-2 flex-wrap gap-2">
              {myInfo.skills.analysisVisualization?.map(
                (skill: string, index: Key | null | undefined) => (
                  <ListItem key={index} text={skill} />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="space-y-2">
        <h2 className="text-3xl text-blue-500 font-semibold">Education</h2>
        <div className="border rounded-lg p-2 ">
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

        <div className="border rounded-lg p-2">
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
      </div>
    </div>
  );
};
export default About;
