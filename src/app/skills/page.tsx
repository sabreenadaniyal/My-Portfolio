"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    const skills = [
        { name: "HTML", img: "/images/icons/html_18559574.gif" },
        { name: "CSS", img: "/images/icons/css_18925160.gif" },
        { name: "Tailwind CSS", img: "/images/icons/icons8-code.gif" },
        { name: "TypeScript", img: "/images/icons/icons8-typescript-144.png" },
        { name: "React.js / Next.js", img: "/images/icons/icons8-next.js-144.png" },
        { name: "JavaScript", img: "/images/icons/icons8-javascript.gif" },
        { name: "Python", img: "/images/icons/icons8-python.gif" },
        { name: "Github", img: "/images/icons/icons8-github.gif" },
        { name: "Streamlit", img: "/images/icons/icons8-streamlit-144.png" },
        { name: "Time management", img: "/images/icons/task-management_16104409.gif" },
        { name: "Linkedin", img: "/images/icons/icons8-linkedin.gif" },
        { name: "Fashion Designing", img: "/images/icons/icons8-hanger.gif" },
        { name: "Photography", img: "/images/icons/cute-camera_15944888.gif" },
        { name: "Computer Skills", img: "/images/icons/computer skills.gif" },
        { name: "Verbal & Written Communication", img: "/images/icons/communications.gif" }
    ];

    return (
        <section className="bg-black text-white py-20 min-h-screen">
            <div className="container mx-auto px-6">

                {/* Heading */}
                <h2 className="text-4xl font-bold mb-12 text-center">
                    Tools & <span className="text-4xl font-bold mb-12 text-center text-pink-600">Technologies</span>
                    <div className="h-1 w-52 bg-gradient-to-r from-white to-pink-600 rounded-full mx-auto mb-10 mt-2"></div>
                </h2>

                {/* Section Label */}
                <div className="text-center text-sm text-gray-500 mt-4 mb-12">
                    What I Can Do
                </div>

                {/* Grid for 4 boxes in one row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105"
                            data-aos="fade-up">

                            <div className="flex items-center space-x-4">

                                {/* Image */}
                                <Image
                                    src={skill.img}
                                    alt={skill.name}
                                    width={45}
                                    height={45}
                                    className="rounded-full"
                                />

                                {/* Only Name */}
                                <h2 className="text-lg font-semibold">{skill.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
