"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";


export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const projects = [
    {
      title: "Blog Website",
      description:
        "A stylish and responsive fashion blog built with Next.js and Tailwind CSS, designed to showcase articles with elegance and ease.",
      image: "/images/blog website.png",
      link: "https://blog-website-milestone-3-flame.vercel.app/",
    },
    {
      title: "Pak Wheel",
      description:
        "A car listing and browsing platform inspired by PakWheels, allowing users to explore, compare, and find vehicles with ease.",
      image: "/images/pakwheel.png",
      link: "https://mini-hackathon-git-master-sabreena-zahid-alis-projects.vercel.app/",
    },
    {
      title: "E-Commerce Website",
      description:
        "This is a modern E-Commerce web application built with Next.js, Tailwind CSS, and Fakestore API.The platform provides users with a smooth online shopping experience, offering a wide range of products with details like images, prices, and descriptions.",
      image: "/images/e-commerce.png",
      link: "https://milestone-3-e-commerce-git-496bef-sabreena-zahid-alis-projects.vercel.app/",
    },
    {
      title: "Weather-Based Fashion App",
      description:
        "A stylish app that recommends outfits based on real-time weather data, built with Streamlit, OpenAI, and Gemini.",
      image: "/images/project 1.png",
      link: "https://fashion-agent-according-to-weather-updates-6rbquwemdqv4l5k7c85.streamlit.app/",
    },
    {
      title: "AI Research Agent",
      description:
        "An AI-powered research agent that can provide answers for any topic in the same wording you search for — whether you're a child, adult, or young person.",
      image: "/images/project 4.png",
      link: "https://ai-research-agent-fdy5huamyjdzvvqrwsulgn.streamlit.app/",
    },
    {
      title: "Figma Design",
      description:
        "A modern and responsive web layout created from a Figma design, converted into pixel-perfect code using Next.js and Tailwind CSS.",
      image: "/images/Figma design.png",
      link: "https://update-figma-hackhathon-5ywm.vercel.app/",
    },
    {
      title: "Dynamic Resume Builder",
      description:
        "The Dynamic Resume Builder is a web application that allows users to create, and customize professional resumes instantly. It provides an easy-to-use interface where users can enter their details, choose a template, and generate a polished resume in real-time.",
      image: "/images/dynamic resume.png",
      link: "https://hackathon-resume-3-dynamic-resume.vercel.app/"
    }
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-12">

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          My <span className="text-4xl font-bold mb-12 text-center text-pink-600">Projects</span>
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-white to-pink-600 rounded-full mx-auto mb-10"></div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-900 transition-shadow duration-300"
              data-aos="fade-up"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <Link
                  href={project.link}
                  className="bg-pink-700 text-white px-4 py-2 rounded-lg hover:bg-pink-800 transition-all duration-300" target="_blank"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
