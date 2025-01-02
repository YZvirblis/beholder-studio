import FadeInSection from "@/components/FadeInSection";
import Image from "next/image";
import Link from "next/link";

export default function MarketPage() {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-sapphire text-gold text-center">
            {/* Logo or Illustration */ }
            <div className="mb-8">
                <Image
                    src="/images/logo.png"
                    alt="EverQuill Logo"
                    width={ 150 }
                    height={ 150 }
                    className="mx-auto"
                />
            </div>
            {/* Heading */ }
            <h1 className="text-4xl md:text-5xl font-cinzel mb-4">Market Coming Soon</h1>

            {/* Description */ }
            <p className="text-lg md:text-xl font-quicksand max-w-2xl mx-auto mb-8">
                We’re working hard behind the scenes to bring you an amazing selection of resources, modules, and tools for your next adventure.
                Stay tuned for updates and be the first to explore our offerings!
            </p>

            {/* Call-to-Action */ }
            <div className="flex flex-col md:flex-row gap-4">
                <Link
                    href="/"
                    className="bg-gold text-sapphire py-3 px-6 rounded hover:bg-white hover:text-gold transition font-quicksand"
                >
                    Return Home
                </Link>
                <a
                    href="#subscribe"
                    className="bg-transparent border border-gold text-gold py-3 px-6 rounded hover:bg-gold hover:text-sapphire transition font-quicksand"
                >
                    Subscribe for Updates
                </a>
            </div>

            {/* Footer */ }
            <footer className="mt-12 text-sm font-quicksand text-gold/80">
                Follow us for the latest updates:
                <a href="https://twitter.com/EverQuillGames" className="underline ml-2">
                    Twitter
                </a>
                <span>|</span>
                <a href="https://discord.com/invite/yourserver" className="underline ml-2">
                    Discord
                </a>
            </footer>
        </section>
    );
}
