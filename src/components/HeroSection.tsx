"use client";

import Link from "next/link";

export default function HeroSection() {
    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            const yOffset = -80; // Adjust this value based on your sticky header height
            const yPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: yPosition,
                behavior: "smooth", // Enables smooth scrolling
            });
        }
    };

    return (
        <section className="relative bg-[url('/Images/hero-bg.png')] bg-cover bg-center text-gold h-screen flex items-center justify-center md:justify-start border-b-4 border-gold shadow-lg">
            {/* Background Overlay */ }
            <div className="absolute inset-0 bg-gradient-to-b from-sapphire to-gray-900"></div>

            {/* Content */ }
            <div className="relative z-10 text-center md:text-left max-w-full px-4 sm:px-8 md:max-w-3xl lg:px-6 lg:p-16 lg:ml-24">
                {/* Logo/Title */ }
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-cinzel font-bold mb-4 leading-tight">
                    EverQuill<span className="text-2xl align-top">&trade;</span>
                </h1>

                {/* Tagline */ }
                <p className="text-base sm:text-lg md:text-xl font-quicksand mb-8 leading-relaxed">
                    The Pen of Creation, The Forge of Legends.
                </p>

                {/* Call-to-Action Buttons */ }
                <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <Link
                        href="/market"
                        className="text-lg font-quicksand hover:text-white transition"
                    >
                        <button className="bg-gold text-sapphire py-3 px-6 rounded hover:bg-white hover:text-gold transition font-quicksand">
                            Explore Our Resources
                        </button>
                    </Link>
                    <button
                        onClick={ handleScrollToAbout }
                        className="bg-transparent border border-gold text-gold py-3 px-6 rounded hover:bg-gold hover:text-sapphire transition font-quicksand"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
