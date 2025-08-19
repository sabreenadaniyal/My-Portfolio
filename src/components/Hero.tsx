"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Typewriter from "typewriter-effect";


export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="text-gray-600 body-font bg-black mt-28">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-8">

        {/* Text Section */}
        <div
          className="flex flex-col md:items-start items-center md:text-left text-center mb-10 md:mb-0 md:w-1/2"
          data-aos="fade-right">
          <h1 className="text-sm sm:text-5xl text-gray-200 mb-4 leading-tight text-center md:text-left">
            Hello, Myself
            <br />
            <span
              className="text-5xl font-bold bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-transparent bg-clip-text inline-block"
              data-aos="fade-up"
            >
              SABREENA DANIYAL!
            </span>
          </h1>

          {/* Role Typewriter */}
          <div className="text-white text-2xl mb-2 flex items-center gap-2">
            <span>and I&apos;m a </span>
            <span
              className="text-pink-900 font-bold"
              data-aos="fade-left">
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "Web Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </div>

          <p className="text-gray-100 text-lg mb-6">Code & Couture..</p>
        </div>

        {/* Image Section */}
        <div
          className="lg:max-w-lg w-5/6 md:w-1/2 flex justify-center"
          data-aos="zoom-in"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg ring-2 ring-pink-900 transition-transform 
          duration-500 hover:scale-105">
            <Image
              src="/images/profile picture.jpg"
              alt="SABREENA DANIYAL profile"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
