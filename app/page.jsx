import Image from "next/image";
import Link from "next/link";

//Images
import me from "../public/me.png";
import dot from "../public/dot.svg";
import linkedin from "../public/linkedinGreen.svg";
import github from "../public/githubGreen.svg";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-around z-30 px-24">
      <div className="w-1/2 flex gap-3 flex-col z-30">
        <div className="uppercase flex flex-col text-7xl bebasNeue">
          <h1>Hi, I am</h1>
          <h1>Ibtissam massa.</h1>
        </div>
        <p className="text-stone-300 mb-5">A Sydney based front-end developer passionate about building accessible and user friendly websites.</p>
        <div className="flex gap-3">
          <Link href="#" className="bg-green-500 z-30 hover:bg-green-400 py-4 px-6 uppercase rounded-[100px] justify-center items-center gap-3 inline-flex text-black text-base font-bold">
            <p>Contact me</p>
            <Image src={dot} alt="dot" />
          </Link>
          <Link href="#" className="z-30 flex items-center hover:bg-neutral-700 bg-neutral-800 justify-center rounded-full px-3.5 py-2">
            <Image src={linkedin} alt="linkedin" />
          </Link>
          <Link href="#" className="z-30 flex items-center hover:bg-neutral-700 bg-neutral-800 justify-center rounded-full px-3.5 py-2">
            <Image src={github} alt="github" />
          </Link>
        </div>
      </div>
      <div className="z-20 rounded-full overflow-hidden w-96">
        <Image src={me} alt="Me" />
      </div>
    </main>
  );
}
