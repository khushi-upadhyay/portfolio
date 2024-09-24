// "use client";
// import Image from "next/image";
// import React from "react";
// import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";


// export function Achievements() {
//   const cards = data.map((card, index) => (
//     <Card key={card.src} card={card} index={index} layout={true} />
//   ));

//   return (
//     <div className="w-full h-full py-20">
//       <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 text-white dark:text-neutral-200 font-sans">
//       Achievements
//       </h2>
//       <Carousel items={cards} />
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <Image
//               src="https://assets.aceternity.com/macbook.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };

// const iOSContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"ios-content" + index}
//             className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700">
//                 I’m thrilled to be in the top 1% of those chosen for the exclusive iOS Student Developer Program.
//               </span>{" "}
//               Here are some quick highlights about my journey so far:
//               <ul className="list-disc list-inside mt-2">
//                 <li>
//                   <strong>Apple</strong> and <strong>Infosys</strong> have joined forces to offer this program at SRM Institute of Science and Technology.
//                 </li>
//                 <li>
//                   I'm honing my skills in Swift and app development, learning from the best in the industry.
//                 </li>
//                 <li>
//                   The program not only focuses on coding but also on building apps that solve real-world problems. 
//                 </li>
//               </ul>
//               Want to know more? Check out my{" "}
//               <a 
//                 href="https://www.linkedin.com/posts/my-linkedin-post"
//                 target="_blank"
//                 className="underline text-blue-600"
//               >
//                 LinkedIn post
//               </a>{" "}
//               for details.
//             </p>
//             <Image
//               src="https://assets.aceternity.com/macbook.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };


// const data = [
//   {
//     category: "Top 1%",
//     title: "iOS Student Developer Program",
//     src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <iOSContent />,
//   },
//   {
//     category: "Top 20%",
//     title: "Department Rank Holder",
//     src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Elite Rank",
//     title: "NPTEL Examination",
//     src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },

//   // {
//   //   category: "Product",
//   //   title: "Maps for your iPhone 15 Pro Max.",
//   //   src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   //   content: <DummyContent />,
//   // },
//   // {
//   //   category: "iOS",
//   //   title: "Photography just got better.",
//   //   src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   //   content: <DummyContent />,
//   // },
//   // {
//   //   category: "Hiring",
//   //   title: "Hiring for a Staff Software Engineer",
//   //   src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   //   content: <DummyContent />,
//   // },
// ];


"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

export function Achievements() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 text-white dark:text-neutral-200 font-sans">
        Achievements
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const IOSContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"ios-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <a 
                href="https://www.srmist.edu.in/ios-student-developer-program/"
                target="_blank"
                className="underline text-blue-600"
              >
                Click here to know more about the iOS Student Developer Program
              </a>
              <br />
              <br />
              <span className="font-bold text-neutral-700">
                I’m thrilled to be in the top 1% of those chosen for the exclusive iOS Student Developer Program.
              </span>{" "}
              <br /><br />
              Here are some quick highlights about my journey so far:
              <ul className="list-disc list-inside mt-2">
                <li>
                  <strong>Apple</strong> and <strong>Infosys</strong> have joined forces to offer this program at SRM Institute of Science and Technology.
                </li><br/>
                <li>
                  I'm honing my skills in Swift and app development, learning from the best in the industry.
                </li><br/>
                <li>
                  The program not only focuses on coding but also on building apps that solve real-world problems. 
                </li><br/>
              </ul><br/>
              Want to know more? Check out my{" "}
              <a 
                href="https://www.linkedin.com/posts/khushiupadhyay11_ios-apple-infosys-activity-7231625549499011072-S-Ya?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                className="underline text-blue-600"
              >
                LinkedIn post
              </a>{" "}
              for details.
            </p>
            <Image
              src="/images/achievements/macOS.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Top 1%",
    title: "iOS Student Developer Program",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <IOSContent />,
  },
  {
    category: "Top 20%",
    title: "Department Rank Holder",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Elite Rank",
    title: "NPTEL Examination",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];

