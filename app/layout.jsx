import { Inter } from "next/font/google";
import "./globals.css";

//components
import NavBar from "./Components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ibtissam Massa",
  description: "Ibtissam Massa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
