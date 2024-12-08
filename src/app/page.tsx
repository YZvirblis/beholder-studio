import HeroSection from "../components/HeroSection";


export default function HomePage() {
  return (
    <main>
      {/* Hero Section */ }
      <HeroSection />

      {/* Featured Resources Section */ }
      <section className="bg-gray-100 text-sapphire py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-cinzel text-center mb-8">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for Resource Cards */ }
            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="text-xl font-quicksand font-bold mb-2">
                The Shadow Dagger of Ardeep
              </h3>
              <p className="text-sm font-quicksand mb-4">
                A legendary weapon with a mysterious backstory.
              </p>
              <button className="bg-gold text-sapphire py-2 px-4 rounded hover:bg-sapphire hover:text-gold transition">
                View Details
              </button>
            </div>
            {/* Add more resource cards here */ }
          </div>
        </div>
      </section>

      {/* About Section Teaser */ }
      <section className="bg-sapphire text-gold py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-cinzel mb-4">About Beholder Studio</h2>
          <p className="text-lg font-quicksand mb-6">
            At Beholder Studio, we craft worlds and design adventures for TTRPG
            enthusiasts, helping you bring your stories to life.
          </p>
          <button className="bg-gold text-sapphire py-2 px-6 rounded hover:bg-white hover:text-gold transition">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}
