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
      <div className="flex flex-col items-center justify-center min-h-screen bg-teal-600 space-y-6">
        <Navbar></Navbar>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </div>
  );
}
