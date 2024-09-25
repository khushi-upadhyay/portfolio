import { About } from "@/app/components/pages/About"
import { Skills } from "@/app/components/pages/Skills"
import { Achievements } from "@/app/components/pages/Achievements"
import { Connect } from "@/app/components/pages/Connect" 
import { Experience } from "@/app/components/pages/Experience"
import { Form } from "@/app/components/pages/Form"
import { Projects } from "@/app/components/pages/Projects"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <About />
      <Skills/>
      <Projects />
      <Experience />
      <Achievements />
      <Connect />
      <Form/>
    </div>
  );
}