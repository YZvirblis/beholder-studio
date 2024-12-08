import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // FontAwesome Icons

export default function Footer() {
    return (
        <footer className="bg-sapphire text-gold py-6">
            <div className="container mx-auto px-6">
                {/* Top Section */ }
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gold pb-4 mb-4">
                    {/* Logo and Tagline */ }
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-2xl font-cinzel tracking-wide">
                            Beholder Studio
                        </h2>
                        <p className="text-sm font-quicksand mt-2">
                            Your Story, Your Journey, Your Beholder.
                        </p>
                    </div>

                    {/* Navigation Links */ }
                    <nav className="flex space-x-6">
                        <Link
                            href="/"
                            className="text-sm font-quicksand hover:text-white transition"
                        >
                            Home
                        </Link>
                        <Link
                            href="/store"
                            className="text-sm font-quicksand hover:text-white transition"
                        >
                            Store
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-quicksand hover:text-white transition"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-quicksand hover:text-white transition"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>

                {/* Bottom Section */ }
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Social Media Links */ }
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            <FaInstagram />
                        </a>
                    </div>

                    {/* Copyright */ }
                    <p className="text-sm font-quicksand mt-4 md:mt-0">
                        &copy; { new Date().getFullYear() } Beholder Studio. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
