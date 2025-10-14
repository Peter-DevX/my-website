// "use client";

// import React from "react";
// import { motion } from "motion/react";
// import RecentProject from "@/components/RecentProject";

// export default function PortfolioPage() {
//   return (
//     <main className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-black text-white">
//       {/* Hero Section */}
//       <section className="container mx-auto px-4 py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//             My Portfolio
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             A showcase of my projects and professional work in web development
//             and design.
//           </p>
//         </motion.div>
//       </section>

//       {/* Projects Section */}
//       <section className="py-20 bg-black/50">
//         <div className="container mx-auto px-4">
//           <RecentProject />
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="container mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//           Technical Skills
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {[
//             { name: "React", level: "95%" },
//             { name: "Next.js", level: "90%" },
//             { name: "TypeScript", level: "85%" },
//             { name: "Tailwind CSS", level: "90%" },
//             { name: "Node.js", level: "80%" },
//             { name: "MongoDB", level: "75%" },
//             { name: "Git", level: "85%" },
//             { name: "UI/UX Design", level: "80%" },
//           ].map((skill) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.3 }}
//               className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all"
//             >
//               <h3 className="text-lg font-semibold mb-3 text-purple-300">
//                 {skill.name}
//               </h3>
//               <div className="w-full h-2 bg-gray-700 rounded-full">
//                 <div
//                   className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
//                   style={{ width: skill.level }}
//                 />
//               </div>
//               <span className="text-sm text-gray-400 mt-2 inline-block">
//                 {skill.level}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="container mx-auto px-4 py-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center max-w-3xl mx-auto"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//             Let&apos;s Work Together
//           </h2>
//           <p className="text-gray-300 mb-8">
//             I&apos;m always open to discussing new projects, creative ideas, or
//             opportunities to be part of your visions.
//           </p>
//           <a
//             href="mailto:your.email@example.com"
//             className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-500 hover:to-purple-500 transition-colors duration-300"
//           >
//             Get In Touch
//           </a>
//         </motion.div>
//       </section>
//     </main>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import RecentProject from "@/components/RecentProject";
import Footer from "@/components/Footer";
import FloatingNavWrapper from "@/components/FloatingNavWrapper";

export default function PortfolioPage() {
  const { scrollYProgress } = useScroll();
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const skills = [
    { name: "React", level: 95, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", level: 90, color: "from-gray-300 to-gray-500" },
    { name: "TypeScript", level: 85, color: "from-blue-400 to-blue-600" },
    { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-cyan-500" },
    { name: "Node.js", level: 80, color: "from-green-400 to-emerald-600" },
    { name: "MongoDB", level: 75, color: "from-green-500 to-green-700" },
    { name: "Git", level: 85, color: "from-orange-400 to-red-500" },
    { name: "UI/UX Design", level: 80, color: "from-purple-400 to-pink-500" },
  ];

  return (
    <main className="min-h-screen w-full relative overflow-hidden">
      <FloatingNavWrapper />
      {/* Animated background gradients */}
      <div className="fixed inset-0 bg-[#0a0a1f] -z-10" />
      <motion.div
        className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Hero Section with Parallax */}
      <section className="relative container mx-auto px-4 pt-32 pb-20">
        <motion.div
          style={{ y, opacity }}
          className="text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Portfolio
              </h1>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting digital experiences that blend creativity with technical
            excellence.
            <br />
            <span className="text-gray-500">
              Each project tells a story of innovation and dedication.
            </span>
          </motion.p>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { num: "30+", label: "Projects" },
              { num: "100%", label: "Quality" },
              { num: "24/7", label: "Support" },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative group"
              >
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-8 py-6 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    {stat.num}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Featured Work
            </span>
            <motion.div
              className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          <RecentProject />
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative container mx-auto px-4 py-32">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Tech Arsenal
          </span>
          <motion.div
            className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredSkill(idx)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative group"
            >
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 overflow-hidden">
                {/* Animated background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  animate={
                    hoveredSkill === idx
                      ? {
                          background: [
                            `linear-gradient(45deg, transparent, rgba(255,255,255,0.1))`,
                            `linear-gradient(225deg, transparent, rgba(255,255,255,0.1))`,
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {skill.name}
                    </h3>
                    <motion.span
                      className="text-2xl font-bold text-gray-400 group-hover:text-white transition-colors"
                      animate={
                        hoveredSkill === idx ? { scale: [1, 1.2, 1] } : {}
                      }
                      transition={{ duration: 0.3 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  {/* Progress bar */}
                  <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        delay: idx * 0.1 + 0.3,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={
                          hoveredSkill === idx
                            ? {
                                x: ["-100%", "200%"],
                              }
                            : {}
                        }
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 0.5,
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity -z-10`}
                animate={
                  hoveredSkill === idx
                    ? {
                        scale: [1, 1.05, 1],
                      }
                    : {}
                }
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10" />

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            >
              Let&apos;s Create Together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
            >
              Have a project in mind? I&apos;m always open to discussing new ideas,
              creative collaborations, or opportunities to bring your vision to
              life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.svg
                  className="w-5 h-5 relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
