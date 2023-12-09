import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import About from "./about";
import Projects from "./projects";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div className="">
        <Navbar></Navbar>
        <div className="has-background-light">
          <div className={`lg:mx-32`}>
            <About></About>
            <Projects></Projects>
          </div>
        </div>
        <Footer></Footer>
      </div>
  );
}
