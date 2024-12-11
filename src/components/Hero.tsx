import Image from "next/image";
import abubakar from "../assets/Nice_photo.jpg";
import Link from "next/link";
import LinkButton from "./LinkButton";
const Hero = () => {
  return (
    <div className="grid w-full h-[calc(100dvh-70px)] place-content-center ">
      <div className="flex max-w-fit gap-x-8 items-center">
        <div className="overflow-hidden hover:scale-[1.05] duration-1000 w-[240px] border-blue-400 border-2 rounded-full h-[240px]">
          <Image
            src={abubakar}
            alt="Abubakar"
            width={240}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-y-2 max-w-52 justify-between">
          <h2 className="text-2xl font-semibold text-blue-500">
            Abubakar M. Muktar
          </h2>
          <p className="text-justify">
            Highly skilled and motivated <span className="hype">data</span>{" "}
            professional with expertise in
            <span className="hype"> data science</span>,{" "}
            <span className="hype">analytics</span>, and{" "}
            <span className="hype">visualization</span>.
          </p>
          <div className="flex gap-x-2">
            <LinkButton href="/about" text="About me" />
            <LinkButton href="/projects" text="Projects" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
