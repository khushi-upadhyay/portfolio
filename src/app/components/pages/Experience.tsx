// import Image from "next/image";
// import React from "react";
// import { Timeline } from "@/app/components/ui/timeline";

// export function Experience() {
//   const data = [
//     {
//       title: "2024",
//       content: (
//         <div>
//           <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//             Built and launched Aceternity UI and Aceternity UI Pro from scratch
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <Image
//               src="https://assets.aceternity.com/templates/startup-1.webp"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="https://assets.aceternity.com/templates/startup-2.webp"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="https://assets.aceternity.com/templates/startup-3.webp"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="https://assets.aceternity.com/templates/startup-4.webp"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Early 2023",
//       content: (
//         <div>
//           <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//             I usually run out of copy, but when I see content this big, I try to
//             integrate lorem ipsum.
//           </p>
//           <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
//             Lorem ipsum is for people who are too lazy to write copy. But we are
//             not. Here are some more example of beautiful designs I built.
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <Image
//               src="https://assets.aceternity.com/pro/hero-sections.png"
//               alt="hero template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="https://assets.aceternity.com/features-section.png"
//               alt="feature template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="https://assets.aceternity.com/pro/bento-grids.png"
//               alt="bento template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="https://assets.aceternity.com/cards.png"
//               alt="cards template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Changelog",
//       content: (
//         <div>
//           <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
//             Deployed 5 new components on Aceternity today
//           </p>
//           <div className="mb-8">
//             <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//               ✅ Card grid component
//             </div>
//             <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//               ✅ Startup template Aceternity
//             </div>
//             <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//               ✅ Random file upload lol
//             </div>
//             <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//               ✅ Himesh Reshammiya Music CD
//             </div>
//             <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
//               ✅ Salman Bhai Fan Club registrations open
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <Image
//               src="https://assets.aceternity.com/pro/hero-sections.png"
//               alt="hero template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="https://assets.aceternity.com/features-section.png"
//               alt="feature template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="https://assets.aceternity.com/pro/bento-grids.png"
//               alt="bento template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//             <Image
//               src="https://assets.aceternity.com/cards.png"
//               alt="cards template"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//             />
//           </div>
//         </div>
//       ),
//     },
//   ];
//   return (
//     <div className="w-full">
//       <Timeline data={data} />
//     </div>
//   );
// }


import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Left Side: Text Content */}
          <div className="flex-1">
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Senior Software Engineer at TechVision
            </p>
            <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mb-4">
              <li>Led the development of a real-time collaboration platform.</li>
              <li>Reduced cloud infrastructure costs by 20% through optimization.</li>
              <li>Mentored 5 junior engineers.</li>
            </ul>
          </div>
    
          {/* Right Side: Image */}
          <div className="md:w-1/3">
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="TechVision project"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Full-Stack Developer at WebCraft Inc.
          </p>
          <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mb-4">
            <li>Developed a web application for e-commerce logistics.</li>
            <li>Collaborated with the design team to improve UI/UX by 30%.</li>
            <li>Implemented RESTful APIs using Node.js and MongoDB.</li>
          </ul>
          {/* <Image
            src="https://via.placeholder.com/500"
            alt="WebCraft project"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          /> */}
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Junior Developer at CodeStream Solutions
          </p>
          <ul className="list-disc list-inside text-neutral-800 dark:text-neutral-200 text-xs md:text-sm mb-4">
            <li>Assisted in building front-end components for client projects.</li>
            <li>Tested and debugged legacy code to enhance performance.</li>
            <li>Collaborated in Agile sprints for project delivery.</li>
          </ul>
          {/* <Image
            src="https://via.placeholder.com/500"
            alt="CodeStream project"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
          /> */}
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}
