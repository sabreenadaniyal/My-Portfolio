"use client";

export default function About() {
    return (
        <section className="py-16 bg-black">

            {/* Heading */}
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Get In
                <span className="text-4xl font-bold mb-12 text-center text-pink-600">Touch</span>
                <div className="h-1 w-32 bg-gradient-to-r from-white to-pink-600 rounded-full mx-auto mb-10 mt-2"></div>
            </h2>

            {/* Outer Box with uneven columns */}
            <div className="max-w-5xl mx-auto bg-gray-50 p-10 rounded-2xl shadow-lg grid grid-cols-1 
            md:grid-cols-[35%_65%] gap-8">

                {/* Sidebar Contact Info */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
                        Contact Information
                    </h2>
                    <ul className="space-y-6 text-gray-700 text-lg">
                        <li className="text-center">
                            <div className="text-3xl mb-2">📍</div>
                            <span className="font-semibold block">Address:</span>
                            <p>123 Main Street, Karachi, Pakistan</p>
                        </li>
                        <li className="text-center">
                            <div className="text-3xl mb-2">📞</div>
                            <span className="font-semibold block">Phone:</span>
                            <p>+92 300 1234567</p>
                        </li>
                        <li className="text-center">
                            <div className="text-3xl mb-2">📧</div>
                            <span className="font-semibold block">Email:</span>
                            <p>sabreenaxxx@yahoo.com</p>
                        </li>
                    </ul>
                </div>

                {/* Contact Form */}
                <div>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea
                                rows={4}
                                placeholder="Write your message..."
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
