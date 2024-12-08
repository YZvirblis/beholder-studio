export default function HeroSection() {
    return (
        <section className="relative bg-sapphire text-gold h-screen flex items-center justify-center">
            {/* Background Overlay */ }
            <div className="absolute inset-0 bg-gradient-to-b from-sapphire to-gray-900 opacity-60"></div>

            {/* Content */ }
            <div className="relative z-10 text-center max-w-3xl px-6">
                {/* Logo/Title */ }
                <h1 className="text-5xl md:text-6xl font-cinzel font-bold mb-4">
                    Beholder Studio
                </h1>

                {/* Tagline */ }
                <p className="text-lg md:text-xl font-quicksand mb-8">
                    Your Story, Your Journey, Your Beholder.
                </p>

                {/* Call-to-Action Buttons */ }
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                    <button className="bg-gold text-sapphire py-3 px-6 rounded hover:bg-white hover:text-gold transition font-quicksand">
                        Explore Our Resources
                    </button>
                    <button className="bg-transparent border border-gold text-gold py-3 px-6 rounded hover:bg-gold hover:text-sapphire transition font-quicksand">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
