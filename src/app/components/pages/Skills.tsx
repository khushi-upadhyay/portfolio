
// import OrbitingCircles from "@/app/components/magicui/orbiting-circles";
// import Image from 'next/image';


// export function Skills() {
//   return (
//     <div className="relative flex h-[900px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-none bg-black md:shadow-xl">
//       <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
//         Skills
//       </span>

//       {/* Inner Circle - Databases */}
//       <OrbitingCircles
//         className="size-[30px] border-none bg-transparent"
//         duration={25}
//         delay={20}
//         radius={100} // Small radius for 2 skills (databases)
//       >
//         <Icons.databases />
//       </OrbitingCircles>

//       {/* Second Layer - Tools */}
//       <OrbitingCircles
//         className="size-[50px] border-none bg-transparent"
//         duration={20}
//         delay={15}
//         radius={180} // Medium radius for 3 skills (tools)
//       >
//         <Icons.tools />
//       </OrbitingCircles>

//       {/* Third Layer - Language Skills (C, C++, Java, Swift, Python) */}
//       <OrbitingCircles
//         className="size-[50px] border-none bg-transparent"
//         radius={260} // Larger radius for 5 skills (languages)
//         duration={20}
//         reverse
//       >
//         <Icons.languages />
//       </OrbitingCircles>

//       {/* Fourth Layer - Python Skills (Numpy, Matlab, TensorFlow, FastAPI, PyTorch) */}
//       <OrbitingCircles
//         className="size-[50px] border-none bg-transparent"
//         radius={330} // Large radius for 5 Python-related skills
//         duration={30}
//         delay={10}
//         reverse
//       >
//         <Icons.pythonSkills />
//       </OrbitingCircles>

//       {/* Fifth Layer - Libraries/Frameworks (React, Next.js, Tailwind, JavaScript, CSS, HTML) */}
//       <OrbitingCircles
//         className="size-[50px] border-none bg-transparent"
//         radius={400} // Largest radius for 6 libraries/frameworks
//         duration={30}
//         delay={10}
//         reverse
//       >
//         <Icons.libraries />
//       </OrbitingCircles>
//     </div>
//   );
// }

// const Icons = {
//   databases: () => (
//     <>
//       {/* MongoDB and SQL Icons */}
//       {/* <img src="/images/skills/mongodb.svg" alt="MongoDB" className="w-20 h-20" /> */}
//       <Image src="/images/skills/mongodb.svg" alt="MongoDB" width={80} height={80} />

//       {/* <img src="/images/skills/sql.svg" alt="SQL" className="w-20 h-20" /> */}
//     </>
//   ),
//   tools: () => (
//     <>
//       {/* Git, Figma, Linux Icons */}
//       <img src="/images/skills/git.svg" alt="Git" className="w-20 h-20" />
//       <img src="/images/skills/figma.svg" alt="Figma" className="w-20 h-20" />
//       <img src="/images/skills/linux-tux.svg" alt="Linux" className="w-20 h-20" />
//     </>
//   ),
//   languages: () => (
//     <>
//       {/* C, C++, Java, Swift, Python Icons */}
//       <img src="/images/skills/c.svg" alt="C" className="w-20 h-20" />
//       <img src="/images/skills/c++.svg" alt="C++" className="w-20 h-20" />
//       <img src="/images/skills/java.svg" alt="Java" className="w-20 h-20" />
//       <img src="/images/skills/swift.svg" alt="Swift" className="w-20 h-20" />
//       <img src="/images/skills/python.svg" alt="Python" className="w-20 h-20" />
//     </>
//   ),
//   pythonSkills: () => (
//     <>
//       {/* Numpy, Matlab, TensorFlow, FastAPI, PyTorch Icons */}
//       <img src="/images/skills/numpy.svg" alt="Numpy" className="w-20 h-20" />
//       <img src="/images/skills/matlab.svg" alt="Matlab" className="w-20 h-20" />
//       <img src="/images/skills/tensorflow.svg" alt="TensorFlow" className="w-20 h-20" />
//       <img src="/images/skills/fastapi.svg" alt="FastAPI" className="w-20 h-20" />
//       <img src="/images/skills/pytorch.svg" alt="PyTorch" className="w-20 h-20" />
//     </>
//   ),
//   libraries: () => (
//     <>
//       {/* React, Next.js, Tailwind, JavaScript, CSS, HTML Icons */}
//       <img src="/images/skills/react.svg" alt="React" className="w-20 h-20" />
//       <img src="/images/skills/nextjs.svg" alt="Next.js" className="w-20 h-20" />
//       <img src="/images/skills/tailwind.svg" alt="Tailwind" className="w-20 h-20" />
//       <img src="/images/skills/javascript.svg" alt="JavaScript" className="w-20 h-20" />
//       <img src="/images/skills/css.svg" alt="CSS" className="w-20 h-20" />
//       <img src="/images/skills/html.svg" alt="HTML" className="w-20 h-20" />
//     </>
//   ),
// };

// export default Icons;

import OrbitingCircles from "@/app/components/magicui/orbiting-circles";
import Image from 'next/image';

export function Skills() {
  return (
    <div className="relative flex h-[900px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-none bg-black md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Skills
      </span>

      {/* Inner Circle - Databases */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={25}
        delay={20}
        radius={100} // Small radius for 2 skills (databases)
      >
        <Icons.databases />
      </OrbitingCircles>

      {/* Second Layer - Tools */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={15}
        radius={180} // Medium radius for 3 skills (tools)
      >
        <Icons.tools />
      </OrbitingCircles>

      {/* Third Layer - Language Skills (C, C++, Java, Swift, Python) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={260} // Larger radius for 5 skills (languages)
        duration={20}
        reverse
      >
        <Icons.languages />
      </OrbitingCircles>

      {/* Fourth Layer - Python Skills (Numpy, Matlab, TensorFlow, FastAPI, PyTorch) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={330} // Large radius for 5 Python-related skills
        duration={30}
        delay={10}
        reverse
      >
        <Icons.pythonSkills />
      </OrbitingCircles>

      {/* Fifth Layer - Libraries/Frameworks (React, Next.js, Tailwind, JavaScript, CSS, HTML) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={400} // Largest radius for 6 libraries/frameworks
        duration={30}
        delay={10}
        reverse
      >
        <Icons.libraries />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  databases: () => (
    <>
      {/* MongoDB and SQL Icons */}
      <Image src="/images/skills/mongodb.svg" alt="MongoDB" width={80} height={80} />
      <Image src="/images/skills/sql.svg" alt="SQL" width={80} height={80} />
    </>
  ),
  tools: () => (
    <>
      {/* Git, Figma, Linux Icons */}
      <Image src="/images/skills/git.svg" alt="Git" width={80} height={80} />
      <Image src="/images/skills/figma.svg" alt="Figma" width={80} height={80} />
      <Image src="/images/skills/linux-tux.svg" alt="Linux" width={80} height={80} />
    </>
  ),
  languages: () => (
    <>
      {/* C, C++, Java, Swift, Python Icons */}
      <Image src="/images/skills/c.svg" alt="C" width={80} height={80} />
      <Image src="/images/skills/c++.svg" alt="C++" width={80} height={80} />
      <Image src="/images/skills/java.svg" alt="Java" width={80} height={80} />
      <Image src="/images/skills/swift.svg" alt="Swift" width={80} height={80} />
      <Image src="/images/skills/python.svg" alt="Python" width={80} height={80} />
    </>
  ),
  pythonSkills: () => (
    <>
      {/* Numpy, Matlab, TensorFlow, FastAPI, PyTorch Icons */}
      <Image src="/images/skills/numpy.svg" alt="Numpy" width={80} height={80} />
      <Image src="/images/skills/matlab.svg" alt="Matlab" width={80} height={80} />
      <Image src="/images/skills/tensorflow.svg" alt="TensorFlow" width={80} height={80} />
      <Image src="/images/skills/fastapi.svg" alt="FastAPI" width={80} height={80} />
      <Image src="/images/skills/pytorch.svg" alt="PyTorch" width={80} height={80} />
    </>
  ),
  libraries: () => (
    <>
      {/* React, Next.js, Tailwind, JavaScript, CSS, HTML Icons */}
      <Image src="/images/skills/react.svg" alt="React" width={80} height={80} />
      <Image src="/images/skills/nextjs.svg" alt="Next.js" width={80} height={80} />
      <Image src="/images/skills/tailwind.svg" alt="Tailwind" width={80} height={80} />
      <Image src="/images/skills/javascript.svg" alt="JavaScript" width={80} height={80} />
      <Image src="/images/skills/css.svg" alt="CSS" width={80} height={80} />
      <Image src="/images/skills/html.svg" alt="HTML" width={80} height={80} />
    </>
  ),
};

export default Icons;
