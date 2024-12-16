import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hobbies from "@/components/Hobbies";
import ListItem from "@/components/ListItem";
import Skills from "@/components/Skills";
import { MYINFO } from "@/utils/definitions";
import { Key } from "react";

const About = ({ myInfo }: { myInfo: MYINFO }) => {
  return (
    <div className="flex-1 flex gap-y-4 flex-col overflow-y-auto  ">
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
      <Skills myInfo={myInfo} />
      {/* Education */}
      <Education myInfo={myInfo} />
      {/* Experince */}
      <Experience experience={myInfo.experience} />
      {/* Certifications */}
      <Certifications certs={myInfo.certifications} />
      {/* Hobbies */}
      <Hobbies hobbies={myInfo.hobbies} />
    </div>
  );
};
export default About;
