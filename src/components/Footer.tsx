"use client";

import { FaGithubSquare, FaLinkedin, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Sabreena</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Blending <span className="text-pink-500 font-semibold">Code</span> &amp;
            <span className="text-pink-500 font-semibold"> Creativity</span>
            to design modern, user-friendly, and impactful digital experiences.
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">📩 Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to get the latest updates on my projects & designs.
          </p>
          <form className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-gray-800 text-gray-300 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 text-sm font-medium hover:bg-pink-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Connected with Social Change */}
        <div className="md:text-left text-center">
          <h3 className="text-lg font-semibold text-white mb-4">🌍 Connected with Social Change</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Using technology and creativity not just for innovation, but also for
            empowering communities, promoting sustainability, and making a
            positive difference in the world.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-5">
            <Link href="https://github.com/sabreenadaniyal" target="_blank" className="hover:text-pink-500">
              <FaGithubSquare size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/sabreena-zahid-ali-1343a8198/" target="_blank" className="hover:text-pink-500">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://facebook.com/sabreena.ali.96" target="_blank" className="hover:text-pink-500">
              <FaFacebook size={24} />
            </Link>
            <Link href="https://instagram.com/sabreenadaniyal" target="_blank" className="hover:text-pink-500">
              <FaInstagramSquare size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sabreena. All rights reserved.
      </div>
    </footer>
  );
}
