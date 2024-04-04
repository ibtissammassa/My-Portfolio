import Image from "next/image";
import Link from "next/link";

//Images
import me from "../../public/me.png";
import dot from "../../public/dot.svg";
import linkedin from "../../public/linkedinGreen.svg";
import github from "../../public/githubGreen.svg";

function Hero() {
    return ( 
        <main className="lg:h-screen py-40 gap-7 md:gap-0 md:py-0 flex md:flex-row flex-col-reverse items-center justify-around z-30 md:px-24 px-8">
      <div className="md:w-1/2 flex md:gap-3 gap-4 flex-col z-30 text-center md:text-left">
        <div className="uppercase flex flex-col 2xl:text-9xl md:text-7xl text-5xl bebasNeue">
          <h1>Hi, I am</h1>
          <h1>Ibtissam massa.</h1>
        </div>
        <p className="text-stone-300 md:mb-5 mb-2">A software engineering student at ENSA, keen on crafting innovative solutions and embracing the ever-evolving world of technology.</p>
        <div className="flex flex-col md:flex-row items-center md:gap-3 gap-5">
          <Link href="mailto:ibtissammassa16@gmail.com" target="_blank" className="bg-green-500 z-30 hover:bg-green-400 py-3 md:py-4 px-6 uppercase rounded-[100px] justify-center items-center gap-3 inline-flex text-black text-base font-bold">
            <p>Contact me</p>
            <Image src={dot} alt="dot" />
          </Link>
          <div className="flex gap-3">
            <Link href="https://www.linkedin.com/in/ibtissam-massa" target="_blank" className="z-30 flex items-center hover:bg-neutral-700 bg-neutral-800 justify-center rounded-full px-3.5 py-2">
              <Image src={linkedin} alt="linkedin" />
            </Link> 
            <Link href="https://github.com/ibtissammassa" target="_blank" className="z-30 flex items-center hover:bg-neutral-700 bg-neutral-800 justify-center rounded-full px-3.5 py-2">
              <Image src={github} alt="github" />
            </Link>
          </div>
        </div>
      </div>
      <div className="z-20 rounded-full overflow-hidden 2xl:w-auto w-1/3">
        <Image src={me} alt="Me" />
      </div>
    </main>
     );
}

export default Hero;