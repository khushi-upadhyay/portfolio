import { About } from "@/components/pages/About"
import { Projects } from "@/components/pages/Projects"
// import { Temp } from "@/components/pages/Temp"
import { Experience } from "@/components/pages/Experience"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <About />
      <Projects />
      <Experience />
      {/* <Temp /> */}
    </div>
  );
}