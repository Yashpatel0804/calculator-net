import Image from "next/image";
import Navbar from "./Navbar";
import Calculateage from "./Calculateage"


export default function Home() {
  return (
    <>
   <Navbar/>
   <Calculateage></Calculateage>
  </>
  );
}
