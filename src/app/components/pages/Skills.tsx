import OrbitingCircles from "@/app/components/magicui/orbiting-circles";
import Image from 'next/image';

export function Skills() {
  return (
    <div className="relative flex h-[900px] w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-neutral-950" id="Skills">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none  dark:from-white dark:to-black">
        Skills
      </span>
        {/* Inner Circle - Databases */}
        <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        duration={20}
        delay={0} 
        radius={100} 
      >
        <Icons.sql />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        duration={20}
        delay={10.5} 
        radius={100} 
      >
        <Icons.mongodb />
      </OrbitingCircles>

      {/* Second Layer - Tools */}
      <OrbitingCircles
        className="size-[40px] border-none bg-transparent"
        duration={20}
        delay={15} 
        radius={180} 
        reverse
      >
        <Icons.figma />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        duration={20}
        delay={20} 
        radius={180} 
        reverse
      >
        <Icons.git />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={180} 
        reverse
      >
        <Icons.linux />
      </OrbitingCircles>

      {/* Third Layer - Language Skills (C, C++, Java, Swift, Python) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={260} 
        duration={15}
        delay={0} 
       
      >
        <Icons.C />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={260} 
        duration={15}
        delay={3}
     
      >
        <Icons.CPlusPlus />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={260} 
        duration={15}
        delay={6}
       
      >
        <Icons.Java />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={260} 
        duration={15}
        delay={9}
        
      >
        <Icons.Swift />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[90px] border-none bg-transparent"
        radius={260} 
        duration={15}
        delay={12}
    
      >
        <Icons.Python />
      </OrbitingCircles>

      {/* Fourth Layer - Python Skills (Numpy, Matlab, TensorFlow, FastAPI, PyTorch) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={330}
        duration={20}
        delay={0} 
        reverse
      >
        <Icons.Numpy />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        radius={330}
        duration={20}
        delay={6}
        reverse
      >
        <Icons.Matlab />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={330}
        duration={20}
        delay={12}
        reverse
      >
        <Icons.TensorFlow />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={330}
        duration={20}
        delay={18}
        reverse
      >
        <Icons.FastAPI />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={330}
        duration={20}
        delay={24}
        reverse
      >
        <Icons.PyTorch />
      </OrbitingCircles>

      {/* Fifth Layer - Libraries/Frameworks (React, Next.js, Tailwind, JavaScript, CSS, HTML) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={400} 
        duration={20}
        delay={22} 
       
      >
        <Icons.React />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={400} 
        duration={20}
        delay={4}
    
      >
        <Icons.NextJS />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={400} 
        duration={20}
        delay={8}
    
      >
        <Icons.JavaScript />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={400} 
        duration={20}
        delay={12} 
      
      >
        <Icons.Tailwind />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={400} 
        duration={20}
        delay={16}
      
      >
        <Icons.CSS />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={400} 
        duration={20}
        delay={20} 
      >
        <Icons.HTML />
      </OrbitingCircles>
    </div>
  );
}
const Icons = {
  mongodb: () => (
    <>
      {/* MongoDB and SQL Icons */}
      <Image src="/images/skills/mongodb.svg" alt="MongoDB" width={80} height={80} />
      
    </>
  ),
  sql: () =>(
    <>
    <Image src="/images/skills/sql.svg" alt="SQL" width={80} height={80} />
    </>
  ),
  figma: () => (
    <>
      {/* Git, Figma, Linux Icons */}
      
      <Image src="/images/skills/figma.svg" alt="Figma" width={80} height={80} />
      
    </>
  ),
  git: () =>(
    <>
   <Image src="/images/skills/git.svg" alt="Git" width={80} height={80} />
    </>
  ),
  linux: () =>(
    <>
   <Image src="/images/skills/linux-tux.svg" alt="Linux" width={80} height={80} />
    </>
  ),
  // languages
  C: () => (
    <Image src="/images/skills/c.svg" alt="C" width={80} height={80} />
  ),
  CPlusPlus: () => (
    <Image src="/images/skills/c++.svg" alt="C++" width={80} height={80} />
  ),
  Java: () => (
    <Image src="/images/skills/java.svg" alt="Java" width={80} height={80} />
  ),
  Swift: () => (
    <Image src="/images/skills/swift.svg" alt="Swift" width={80} height={80} />
  ),
  Python: () => (
    <Image src="/images/skills/python.svg" alt="Python" width={80} height={80} />
  ),

  

 // pythonSkills
  Numpy: () => (
    <Image src="/images/skills/numpy.svg" alt="NumPy" width={80} height={80} />
  ),
  Matlab: () => (
    <Image src="/images/skills/matlab.svg" alt="MATLAB" width={80} height={80} />
  ),
  TensorFlow: () => (
    <Image src="/images/skills/tensorflow.svg" alt="TensorFlow" width={80} height={80} />
  ),
  FastAPI: () => (
    <Image src="/images/skills/fastapi.svg" alt="FastAPI" width={80} height={80} />
  ),
  PyTorch: () => (
    <Image src="/images/skills/pytorch.svg" alt="PyTorch" width={80} height={80} />
  ),
    // libraries
  React: () => (
    <Image src="/images/skills/react.svg" alt="React" width={80} height={80} />
  ),
  NextJS: () => (
    <Image src="/images/skills/nextjs.svg" alt="Next.js" width={80} height={80} />
  ),
  Tailwind: () => (
    <Image src="/images/skills/tailwind.svg" alt="Tailwind CSS" width={80} height={80} />
  ),
  JavaScript: () => (
    <Image src="/images/skills/javascript.svg" alt="JavaScript" width={80} height={80} />
  ),
  CSS: () => (
    <Image src="/images/skills/css.svg" alt="CSS" width={80} height={80} />
  ),
  HTML: () => (
    <Image src="/images/skills/html.svg" alt="HTML" width={80} height={80} />
  ),

};

export default Icons;

