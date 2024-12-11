import Image from "next/image";
import abubakar from "../assets/me.jpg";
import LinkButton from "./LinkButton";
const Hero = () => {
  return (
    <div className="grid w-full h-[calc(100dvh-70px)] place-content-center ">
      <div className="flex flex-col max-w-fit gap-y-8 items-center">
        <h2 className="text-2xl font-bold">Welcome to My DataVerse</h2>
        <div className="overflow-hidden hover:scale-[1.05] duration-1000 w-[240px] border-blue-400 border-2 rounded-full h-[240px]">
          <Image
            src={abubakar}
            alt="Abubakar"
            width={240}
            className="object-contain"
          />
        </div>
        <div className="flex gap-x-2 justify-between w-full">
          <LinkButton href="/about" text="About me" />
          <LinkButton href="/projects" text="Projects" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
