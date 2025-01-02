"use client"

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
        <section className="relative bg-[url('/images/hero-bg.png')] bg-cover text-gold h-screen flex items-center justify-start border-b-4 border-gold shadow-lg">
            {/* Background Overlay */ }
            <div className="absolute inset-0 bg-gradient-to-b from-sapphire to-gray-900 p-52"></div>

            {/* Content */ }
            <div className="relative z-10 text-left max-w-3xl px-6 p-16 ml-24">
                {/* Logo/Title */ }
                <h1 className="text-5xl md:text-6xl font-cinzel font-bold mb-4">
                    EverQuill
                </h1>

                {/* Tagline */ }
                <p className="text-lg md:text-xl font-quicksand mb-8">
                    The Pen of Creation, The Forge of Legends.
                </p>

                {/* Call-to-Action Buttons */ }
                <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-6">
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
