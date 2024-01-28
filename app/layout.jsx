import { Poppins } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Image from "next/image";

//components
import NavBar from "./Components/NavBar";
import StarsCanvas from "./Components/StarsBackground";

//Images
import GreenLight from "../public/GreenLight.svg";

const poppins = Poppins({ 
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebasNeue",
});

export const metadata = {
  title: "Ibtissam Massa",
  description: "Ibtissam Massa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${bebasNeue.variable}`}>
      <body className="relative poppins">
        {/* <Image className="absolute -top-[600px] right-2/4" src={GreenLight} alt="blur"/> */}
        <NavBar/>
        {children}
        <StarsCanvas />
      </body>
    </html>
  );
}
