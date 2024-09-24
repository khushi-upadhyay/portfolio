import { About } from "@/components/pages/About"
import { Skills } from "@/components/pages/Skills"
import { Achievements } from "@/components/pages/Achievements"
import { Connect } from "@/components/pages/Connect" 
import { Experience } from "@/components/pages/Experience"
import { Form } from "@/components/pages/Form"
import { Projects } from "@/components/pages/Projects"

import { Temp } from "@/components/pages/Temp"


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
      <Temp />
    </div>
  );
}