import { getData } from "@/actions/actions";
import About from "./_components/About";

const page = async () => {
  const myInfo = await getData();
  return (
    <div className=" my-2 ">
      <About myInfo={myInfo} />
    </div>
  );
};
export default page;
