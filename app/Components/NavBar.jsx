import Link from "next/link";
import Image from "next/image";

//Images
import downloadIcon from "../../public/download.svg"

function NavBar() {
    return ( 
        <div className="flex justify-between sticky px-20 py-10 items-center">
            <h3 className="font-bold text-lg">Ibtissam M.</h3>
            <ul className="flex gap-6 font-light text-sm">
                <li>About</li>
                <li>Tech Stack</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <Link className="bg-white inline-flex rounded-lg px-2.5 py-1.5 gap-2" href="/">
                <p className="text-black text-sm">Resume</p>
                <Image src={downloadIcon} alt="resume"/>
            </Link>
        </div>
     );
}

export default NavBar;