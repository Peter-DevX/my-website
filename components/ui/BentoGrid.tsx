// 'use client'
// import Lottie from "react-lottie";
// import { cn } from "../lib/utils";
// import { BackgroundGradientAnimation } from "./GradientBg";
// import { GlobeDemo } from "./GridGlobe";
// import { useState } from "react";
// import animationData from '@/data/confetti.json'
// import MagicButton from "./MagicButton";
// import { IoCopyOutline } from "react-icons/io5";
// export const BentoGrid = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   img,
//   titleClassName,
//   imgClassName,
//   spareImg,
//   id,
// }: {
//   className?: string;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   header?: React.ReactNode;
//   icon?: React.ReactNode;
//   id?: number;
//   img?: string;
//   imgClassName?: string;
//   titleClassName?: string;
//   spareImg?: string;
// }) => {
//   // border - neutral - 200;

//   const [copied, setCopied] = useState(false);
//   const handleCopy = () => {
//     navigator.clipboard.writeText('peterasiedugyan0@gmail.com');

//     setCopied(true)
//   }

//   return (
//     <div
//       className={cn(
//         "relative overflow-hidden group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:shadow-none",
//         className
//       )}
//       style={{
//         background: "#020024",
//         backgroundColor: `linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(12, 12, 66, 1) 30%, rgba(0, 212, 255, 1) 100%)`,
//       }}
//     >
//       <div className={`${id === 6} && flex justify-center h-full`}>
//         <div className="w-full h-full absolute">
//           {img && (
//             <img
//               src={img}
//               alt={img}
//               className={cn(imgClassName, "object-cover, object-center")}
//             />
//           )}
//         </div>
//         <div
//           className={`absolute right-0 -bottom-5 ${
//             id === 5 && "w-full opacity-80"
//           }`}
//         >
//           {spareImg && (
//             <img
//               src={spareImg}
//               alt={spareImg}
//               className={"object-cover, object-center"}
//             />
//           )}
//         </div>

//         {id === 4 && (
//           <BackgroundGradientAnimation className="size-full">
//             <div className="absolute z-50 flex items-center justify-center text-white font-bold w-full" />
//           </BackgroundGradientAnimation>
//         )}
//         <div
//           className={cn(
//             titleClassName,
//             "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
//           )}
//         >
//           <div className="font-sans  font-extralight text-neutral-600 text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
//             {description}
//           </div>
//           <div className="lg:text-3xl font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200 max-w-96 z-10">
//             {title}

//             {id === 2 && <GlobeDemo />}

//             {id === 3 && (
//               <div className="flex gap-1 lg:gap-5 w-fit absolute-right-3 lg:right-2">
//                 <div className="flex flex-col gap-1 lg:gap-8">
//                   {["React.js", "Next.js", "TypeScript"].map((item) => (
//                     <span
//                       key={item}
//                       className="py-2 lg:py-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
//                     >
//                       {item}
//                     </span>
//                   ))}

//                   <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
//                 </div>
//                 <div className="flex flex-col gap-1 lg:gap-8">
//                   <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
//                   {["MongoDB", "Express.js", "Node.js"].map((item) => (
//                     <span
//                       key={item}
//                       className="py-2 lg:py-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
//             {id === 4 && (
//               <div className="mt-5 relative">
//                 <div className={`absoute -b0ttom-5 right-0`}>
//                   <Lottie
//                     options={{
//                       loop: copied,
//                       autoplay: copied,
//                       animationData,
//                       rendererSettings:{
//                         preserveAspectRatio: 'xMidYMid slice',
//                       }
//                     }}
//                   />
//                 </div>

//                 <MagicButton
//                 title={copied ? 'Email copied' : 'Copy my email'}
//                 icon={<IoCopyOutline />}
//                 position="left"
//                 otherClasses="!bg-[#161a31]"
//                 handleClick={handleCopy}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";

import Lottie from "react-lottie";
import { cn } from "../lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[minmax(16rem,1fr)] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  titleClassName,
  imgClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("peterasiedugyan0@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border transition duration-200 hover:shadow-xl dark:border-white/20 dark:shadow-none",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg,rgba(2, 0, 36, 1) 10%, rgba(34, 34, 171, 1) 100%, rgba(1, 1, 13, 1) 78%, rgba(0, 212, 255, 1) 100%)",
        // "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,12,66,1) 30%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div
        className={`${id === 6 && "flex justify-center"}
          "h-full w-full"
        }`}
      >
        {/* Top Image Layer */}
        {img && (
          <img
            src={img}
            alt="main"
            className={cn(
              "absolute inset-0 w-full h-full object-cover object-center",
              imgClassName
            )}
          />
        )}

        {/* Spare Image Layer */}
        {spareImg && (
          <img
            src={spareImg}
            alt="overlay"
            className={cn(
              "absolute right-0 bottom-0 object-cover object-center",
              id === 5 && "w-full opacity-80"
            )}
          />
        )}

        {/* Animated Gradient Background */}
        {id === 4 && (
          // <div className="absolute flex items-center justify-center text-white font-bold w-full">
          //   <BackgroundGradientAnimation className="w-full h-full" />
          // </div>
          <BackgroundGradientAnimation className="size-full">
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold w-full" /> */}
          </BackgroundGradientAnimation>
        )}

        {/* Content */}
        <div
          className={cn(
            titleClassName,
            "relative z-10 flex flex-col gap-4 p-5 md:p-6 lg:p-8 min-h-40 group-hover/bento:translate-x-2 transition duration-200"
          )}
        >
          {description && (
            <p className="font-sans text-sm md:text-xs lg:text-base font-light text-[#c1c2d3]">
              {description}
            </p>
          )}
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white max-w-96">
            {title}

            {/* ID-Specific Inserts */}
            {id === 2 && <GlobeDemo />}
            {id === 3 && (
              <div className="flex gap-1 lg:gap-5 mt-4">
                {[
                  ["React.js", "Next.js", "TypeScript"],
                  ["MongoDB", "Express.js", "Node.js"],
                ].map((column, i) => (
                  <div key={i} className="flex flex-col gap-1 lg:gap-4">
                    {column.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs lg:text-sm rounded-md text-white/80 bg-[#10132e]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {id === 4 && (
              <div className="mt-6 relative">
                <div className="absolute bottom-0 right-0 z-20 w-32 h-32">
                  <Lottie
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                  />
                </div>

                <MagicButton
                  title={copied ? "Email copied" : "Copy my email"}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="!bg-[#161a31] center"
                  handleClick={handleCopy}
                />

                {/* <MagicButton
                  title={copied ? "Email copied" : "Copy my email"}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="!bg-[#161a31] mt-4"
                  handleClick={handleCopy}
                /> */}
              </div>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};
