// import React from "react";
// import { projects } from "../data/index";

// const RecentProject = () => {
//   return (
//     <div className="py-20">
//       <h1 className="heading">
//         A small selection of{" "}
//         <span className="text-purple-400">recent projects</span>
//       </h1>
//       <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
//         {projects.map(({ id, title, des, img, iconLists, link }) => (
//           <div
//             key={id}
//             className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-between sm:w-96 w-[80vw] bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 rounded-2xl shadow-2xl p-6 hover:scale-105 transition-transform duration-300 border border-purple-500/30"
//           >
//             <div className="w-full h-40 flex items-center justify-center mb-4">
//               <img
//                 src={img}
//                 alt={title}
//                 className="w-full h-full object-cover rounded-xl shadow-md border border-purple-400/30"
//               />
//             </div>
//             <h2 className="text-2xl font-bold text-white mb-2 text-center drop-shadow-lg">
//               {title}
//             </h2>
//             <p className="text-gray-300 mb-4 text-center text-base font-medium leading-relaxed">
//               {des}
//             </p>
//             <div className="flex gap-3 mb-4 flex-wrap items-center justify-center">
//               {iconLists.map((Icon, idx) => (
//                 <span
//                   key={idx}
//                   className="text-2xl text-purple-400 bg-gray-800 rounded-full p-2 shadow-md"
//                 >
//                   {typeof Icon === "string" ? (
//                     <img src={Icon} alt="tech" className="w-6 h-6" />
//                   ) : typeof Icon === "function" ? (
//                     React.createElement(Icon)
//                   ) : null}
//                 </span>
//               ))}
//             </div>
//             <a
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:from-pink-500 hover:to-purple-500 transition-colors duration-300"
//             >
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProject;


import React from "react";
import { projects } from "../data/index";

const RecentProject = () => {
  return (
    <div className="py-12 md:py-20 px-4">
      <h1 data-scroll-reveal className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 leading-tight">
        A small selection of{" "}
        <span className="text-purple-400">recent projects</span>
      </h1>

      {/* Grid layout instead of flex-wrap for better control */}
      <div className="js-scroll-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10 max-w-7xl mx-auto">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 rounded-2xl shadow-2xl p-4 sm:p-6 hover:scale-[1.02] md:hover:scale-105 transition-transform duration-300 border border-purple-500/30 min-h-[420px] sm:min-h-[480px]"
          >
            {/* Image container with fixed aspect ratio */}
            <div className="w-full aspect-video mb-4 flex-shrink-0">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover rounded-xl shadow-md border border-purple-400/30"
              />
            </div>

            {/* Content container with flex-grow to push button to bottom */}
            <div className="flex flex-col flex-grow">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center drop-shadow-lg">
                {title}
              </h2>

              <p className="text-gray-300 mb-4 text-center text-sm sm:text-base font-medium leading-relaxed flex-grow">
                {des}
              </p>

              {/* Tech stack icons */}
              <div className="flex gap-2 sm:gap-3 mb-4 flex-wrap items-center justify-center">
                {iconLists.map((Icon, idx) => (
                  <span
                    key={idx}
                    className="text-xl sm:text-2xl text-purple-400 bg-gray-800 rounded-full p-1.5 sm:p-2 shadow-md"
                  >
                    {typeof Icon === "string" ? (
                      <img
                        src={Icon}
                        alt="tech"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                      />
                    ) : typeof Icon === "function" ? (
                      React.createElement(Icon)
                    ) : null}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold shadow-lg hover:from-pink-500 hover:to-purple-500 transition-colors duration-300 text-center text-sm sm:text-base w-full sm:w-auto mx-auto"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;