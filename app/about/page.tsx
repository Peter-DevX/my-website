"use client";

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main className="min-h-screen w-full relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-[#0a0a1f] -z-10" />

      {/* Animated background gradients */}
      <motion.div
        className="fixed top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"
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
        className="fixed bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10"
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative group">
                {/* Image container */}
                <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-full">
                  <div className="w-full h-full bg-gradient-to-br backdrop-blur-xl border rounded-lg">
                    <Image
                      src="/dev_image.jpg"
                      alt="Peter Asiedu-Gyan"
                      fill
                      className="object-cover rounded-md size-10"
                      priority
                    />
                  </div>

                  {/* Decorative gradient border */}
                  {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-500 -z-10" /> */}
                </div>
              </div>
            </motion.div>

            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="space-y-6"
            >
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="text-purple-400 font-medium text-lg">
                  Hello, I&apos;m
                </span>
                <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Peter
                </h1>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl md:text-3xl text-gray-300 font-light"
              >
                Web Developer & Creative Technologist
              </motion.h2>

              {/* Bio Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-4 text-gray-400 leading-relaxed text-base md:text-lg"
              >
                <p>
                  I&apos;m a passionate web developer based in Ghana,
                  specializing in creating exceptional digital experiences that
                  blend creativity with cutting-edge technology.
                </p>
                <p>
                  With expertise in{" "}
                  <span className="text-purple-400 font-medium">Next.js</span>,
                  <span className="text-blue-400 font-medium"> React</span>, and
                  <span className="text-cyan-400 font-medium"> TypeScript</span>
                  , I transform complex ideas into elegant, user-friendly
                  solutions.
                </p>
                <p>
                  Currently expanding my skills in{" "}
                  <span className="text-pink-400 font-medium">
                    Machine Learning
                  </span>{" "}
                  as an intern at Codveda, I&apos;m constantly pushing the
                  boundaries of what&apos;s possible in web development.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold overflow-hidden"
                >
                  <span className="relative z-10">View My Work</span>
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
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>

                <motion.a
                  href="mailto:peterasiedugyan0@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="backdrop-blur-xl bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills & Interests Section (Optional) */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Development",
                items: ["Next.js", "React", "TypeScript", "Node.js"],
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Design",
                items: [
                  "UI/UX",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Responsive Design",
                ],
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Learning",
                items: ["Machine Learning", "AI", "Data Science", "Python"],
                color: "from-pink-500 to-orange-500",
              },
            ].map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <h3
                  className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} text-transparent bg-clip-text`}
                >
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
