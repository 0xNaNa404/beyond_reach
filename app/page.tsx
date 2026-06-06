import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects"
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contacts from "@/components/Contact";

export default function()
{
  return (
    <main className="min-h-screen w-full relative bg-black flex justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pt-20">
      <div className="max-w-7xl w-full">
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Experience/>
        <Skills/>
        <Contacts/>
      </div>
    </main>
  );
};