import { About } from "@/app/components/pages/About"
import { Skills } from "@/app/components/pages/Skills"
import { Achievements } from "@/app/components/pages/Achievements"
import { Experience } from "@/app/components/pages/Experience"
import { Form } from "@/app/components/pages/Form"
import { Projects } from "@/app/components/pages/Projects"
import { AnimatedTooltipPreview } from "@/app/components/pages/AnimatedConnect"
import { Nav } from "@/app/components/pages/Navbar"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Nav />
      <About />
      <Experience />
      <Skills/>
      <Projects />
     
      <Achievements />
      <Form/>
      <AnimatedTooltipPreview/>
    </div>
  );
}