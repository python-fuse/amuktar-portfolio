import { getData } from "@/actions/actions";
import Projects from "./_components/Projects";

const page = async () => {
  const myInfo = await getData();
  return (
    <div className=" my-2 ">
      <Projects myInfo={myInfo} />
    </div>
  );
};
export default page;
