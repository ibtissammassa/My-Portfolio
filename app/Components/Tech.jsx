import techStack from "../Data/TechStack"
import Image from "next/image";

function Tech() {
    return ( 
        <main name="techStack" className="lg:h-screen pb-32 pt-20 gap-14 md:py-0 flex flex-col items-center justify-center z-30 md:px-24 px-8">
            <div className="flex flex-col text-center gap-2.5">
                <h1 className="md:text-6xl text-5xl bebasNeue">My Tech Stack</h1>
                <p className="text-stone-300 text-sm md:text-base"> Technologies I’ve been working with recently</p>
            </div>
            <div className="flex flex-col md:gap-11 gap-7 w-4/5">
                <div className="md:flex w-full md:justify-between grid grid-cols-4 gap-10">
                    {
                        techStack.slice(0,techStack.length/2).map((tech, index) => {
                            return (
                                <div key={index} className="flex flex-col items-center gap-2.5">
                                    <Image src={tech.logo} alt={tech.name} className="h-11 w-11"/>
                                    <p className="text-stone-300 text-sm">{tech.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="md:flex w-full md:justify-between grid grid-cols-4 gap-10">
                    {
                        techStack.slice(techStack.length/2).map((tech, index) => {
                            return (
                                <div key={index} className="flex flex-col items-center gap-2.5">
                                    <Image src={tech.logo} alt={tech.name} className="h-11 w-11"/>
                                    <p className="text-stone-300 text-sm">{tech.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
     );
}

export default Tech;