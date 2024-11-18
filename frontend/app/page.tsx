"use client"
import About from "./components/about";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
    <div className="has-background-light">
      <div className={`lg:mx-32`}>
        <About></About>
        <Projects></Projects>
      </div>
    </div>
  </>
  );
}
