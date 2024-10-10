import OrbitingCircles from "@/app/components/magicui/orbiting-circles";
import Image from 'next/image';
import { Icons } from "@/app/public/images/skills";  // Ensure this matches your Icons path

export function Temp() {
  return (
    <div className="relative flex h-auto min-h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-neutral-950" id="Skills">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl sm:text-6xl lg:text-8xl font-semibold leading-none dark:from-white dark:to-black">
        Skills
      </span>

      {/* Inner Circle - Databases */}
      <OrbitingCircles
        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] border-none bg-transparent"
        duration={20}
        delay={0} 
        radius={80}
      >
        <Icons.sql />
      </OrbitingCircles>
      <OrbitingCircles
        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] border-none bg-transparent"
        duration={20}
        delay={10.5} 
        radius={80}
      >
        <Icons.mongodb />
      </OrbitingCircles>

      {/* Second Layer - Tools */}
      <OrbitingCircles
        className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[50px] lg:h-[50px] border-none bg-transparent"
        duration={20}
        delay={15} 
        radius={140}
        reverse
      >
        <Icons.figma />
      </OrbitingCircles>
      <OrbitingCircles
        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] border-none bg-transparent"
        duration={20}
        delay={20} 
        radius={140}
        reverse
      >
        <Icons.git />
      </OrbitingCircles>

      {/* Third Layer - Language Skills */}
      <OrbitingCircles
        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] border-none bg-transparent"
        radius={220} 
        duration={15}
        delay={0}
      >
        <Icons.C />
      </OrbitingCircles>
      <OrbitingCircles
        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] border-none bg-transparent"
        radius={220} 
        duration={15}
        delay={3}
      >
        <Icons.CPlusPlus />
      </OrbitingCircles>

      {/* Fourth Layer - Python Skills */}
      <OrbitingCircles
        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] border-none bg-transparent"
        radius={300}
        duration={20}
        delay={0} 
        reverse
      >
        <Icons.Numpy />
      </OrbitingCircles>
      {/* Add other orbiting icons */}
    </div>
  );
}
