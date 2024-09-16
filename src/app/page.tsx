import { About } from "@/components/pages/About"
import { Skills } from "@/components/pages/Skills"
import { Projects } from "@/components/pages/Projects"
//  import { Connect } from "@/components/pages/Temp" 
import { Experience } from "@/components/pages/Experience"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <About />
      <Skills/>
      <Projects />
     
      <Experience />
    </div>
  );
}