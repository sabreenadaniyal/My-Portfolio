"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* Gradient Blobs for background aesthetics */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Content Section */}
      <section
        className="relative max-w-5xl text-center"
        data-aos="fade-up"
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6">
          About <span className="text-4xl font-bold mb-12 text-center text-pink-600">Me</span>
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-white to-pink-600 rounded-full mx-auto mb-10"></div>

        {/* Paragraphs */}
        <p className="text-lg leading-relaxed mb-6 text-gray-300">
          I love working as a <span className="text-pink-500 font-semibold">headless fashion designer</span> 
          and bridging creativity with technology. Coming from a strong background in 
          <span className="text-pink-500 font-semibold"> fashion designing and styling</span>, I discovered that 
          coding feels very similar to designing—both require vision, experimentation, and a touch of creativity.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-300">
          Currently, I&apos;m building skills in <span className="text-purple-400 font-semibold">HTML, CSS, 
          Tailwind CSS, TypeScript, Next.js, Streamlit, Python, and Agentic AI</span>. 
          For me, writing code is like adding the secret sauce to a design mix—where every choice reflects 
          personal style and innovation.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          What excites me most about coding is the <span className="text-blue-400 font-semibold">
          constant evolution of frameworks, libraries, and design systems</span>. 
          Web development feels like a major breakthrough for headless fashion designers, 
          merging creative expression with technical execution.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-10 justify-center">
          <a
            href="/contact"
            target="_blank"
            className="bg-gradient-to-r from-pink-600 to-purple-700 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Collaborate with Me
          </a>
          <a
            href="/images/cv.jpg"
            target="_blank"
            className="bg-gray-800 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-900 transition-all duration-300"
          >
            My Resume
          </a>
        </div>
      </section>
    </main>
  );
}

