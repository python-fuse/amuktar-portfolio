import Image from "next/image";
import abubakar from "@/assets/me.png";
import { getData } from "@/actions/actions";
import About from "./_components/About";

const page = async () => {
  const myInfo = await getData();
  return (
    <div className="flex gap-x-6 mt-2 h-[calc(100dvh-80px)]">
      <div className="w-2/5 rounded-xl overflow-hidden">
        <Image
          src={abubakar}
          alt="Abubakar"
          width={240}
          className="object-contain w-full"
        />
      </div>
      <About myInfo={myInfo} />
    </div>
  );
};
export default page;
