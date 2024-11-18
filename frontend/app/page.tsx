"use client"
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";

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
