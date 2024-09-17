import { About } from "@/components/pages/About"
import { Skills } from "@/components/pages/Skills"
import { Projects } from "@/components/pages/Projects"
 import { Connect } from "@/components/pages/Connect" 
import { Experience } from "@/components/pages/Experience"
import { Form } from "@/components/pages/Form"
import { Achievement  } from "@/components/pages/Achievement"
import { Temp } from "@/components/pages/Temp"


export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <About />
      <Skills/>
      <Projects />
      <Experience />
      <Achievement />
      <Connect />
      <Form/>
      <Temp />
    </div>
  );
}