"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <section className="bg-gradient-to-r from-gray-100 to-pink-50 py-16" id="testimonials">
            <div className="max-w-6xl mx-auto px-4">

                {/* Heading */}
                <h1 className="text-4xl font-bold mb-6 text-center">
                    Testimo<span className="text-pink-600">nials</span>
                </h1>
                <div
                    data-aos="zoom-in"
                    className="h-1 w-32 bg-gradient-to-r from-gray-600 to-pink-400 rounded-full mx-auto mb-12">
                </div>


                {/* Testimonials Grid */}
                <div className="grid gap-8 md:grid-cols-3">

                    {/* Testimonial 1 */}
                    <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition duration-300">
                        <p className="text-gray-600 italic">
                            &quot;She ships fast and clean. Next.js + TypeScript best practices
                            throughout the codebase. Highly recommended.&quot;
                        </p>
                        <div className="mt-6">
                            <h4 className="font-semibold text-gray-800">Ali Jawwad</h4>
                            <span className="text-sm text-gray-500">Mentor</span>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition duration-300">
                        <p className="text-gray-600 italic">
                            &quot;Her portfolio design skills are top-notch. The UI was clean and
                            very professional.&quot;
                        </p>
                        <div className="mt-6">
                            <h4 className="font-semibold text-gray-800">Rahat Bano</h4>
                            <span className="text-sm text-gray-500">Colleague</span>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition duration-300">
                        <p className="text-gray-600 italic">
                            &quot;She has great problem-solving skills and always comes up with
                            creative solutions.&quot;
                        </p>
                        <div className="mt-6">
                            <h4 className="font-semibold text-gray-800">Daniyal Pervaiz</h4>
                            <span className="text-sm text-gray-500">Friend</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
