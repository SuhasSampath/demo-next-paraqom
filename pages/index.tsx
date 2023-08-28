import Image from "next/image";
import { Inter } from "next/font/google";
import SideNav from "../src/components/SideNav/SideNav";
import MainContainer from "../src/components/MainContainer/MainContainer";
const inter = Inter({ subsets: ["latin"] });
import MapApp from "../src/components/MainContainer/Maps/MapApp";
import Map from "../src/components/MainContainer/Maps/Map";
import infowinmap from "../src/components/MainContainer/Maps/infowinmap";
//import "../src/components/Styles/global1.css";
//import "@/styles/globals.css";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="grid grid-cols-4 gap-4">
        <div>Logo</div>
        <div>
          <MapApp />
        </div>

        <div>
          <Map />
        </div>
      </div>
    </main>
  );
}
