import { Inter } from "next/font/google";
import { Caveat } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/NavBar";

//const inter = Inter({ subsets: ["latin"] });

const caveat = Caveat({ subsets: ["latin"] });

export const metadata = {
  title: "Recipe Finder",
  description: "Created By Ai Oakenfull",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={caveat.className}>
        <div className="demo-wrap">
          
          <div className="demo-content">
            <NavBar />
            {children}{" "}
          </div>
        </div>
      </body>
    </html>
  );
}
