import { About } from "@/app/components/pages/About"
import { Skills } from "@/app/components/pages/Skills"
import { Achievements } from "@/app/components/pages/Achievements"
import { Experience } from "@/app/components/pages/Experience"
import { Contact } from "@/app/components/pages/Contact"
import { Projects } from "@/app/components/pages/Projects"
//import { Temp } from "@/app/components/pages/Temp"
import { AnimatedTooltipPreview } from "@/app/components/pages/AnimatedConnect"
// import { Nav } from "@/app/components/pages/Navbar"
import { Dock } from "@/app/components/pages/Dock"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* <Nav /> */}
      <About />
     
      <Experience />
      <Dock />
      <Skills/>
      <Projects />
      <Achievements />
      <Contact/>
      <AnimatedTooltipPreview/>
    </div>
  );
}