import Link from "next/link";
import Image from "next/image";

//Images
import downloadIcon from "../../public/download.svg"

function NavBar() {
    return ( 
        <div className="flex justify-between fixed w-full md:px-24 px-7 py-10 z-20 items-center">
            <Link href='/' className="font-bold text-lg">Ibtissam M.</Link>
            <ul className="md:flex gap-7 font-light text-sm hidden">
                <li className="hover:text-green-400 cursor-pointer">
                    <Link href="#">About</Link>
                </li>
                <li className="hover:text-green-400 cursor-pointer">
                    <Link href="#">Tech Stack</Link>
                </li>
                <li className="hover:text-green-400 cursor-pointer">
                    <Link href="#">Projects</Link>
                </li>
                <li className="hover:text-green-400 cursor-pointer">
                    <Link href="#">Contact</Link>
                </li>
            </ul>
            <Link className="bg-white hover:bg-green-50 inline-flex rounded-lg px-2.5 py-1.5 gap-2" href="/">
                <p className="text-black text-sm">Resume</p>
                <Image src={downloadIcon} alt="resume"/>
            </Link>
        </div>
     );
}

export default NavBar;