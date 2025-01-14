"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Example icon library
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-sapphire text-gold shadow-md top-0 sticky z-50 border-b-2 border-gold">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */ }
                <Link href="/" className="text-2xl font-cinzel tracking-wide flex flex-row align-middle text-center">
                    <Image src="/Images/logo.png" alt="logo" width={ 40 } height={ 40 } />
                    EverQuill<span className="text-sm align-top">&trade;</span>
                </Link>

                {/* Desktop Navigation */ }
                <nav className="hidden md:flex space-x-6">
                    <Link
                        href="/"
                        className="text-lg font-quicksand hover:text-white transition"
                    >
                        Home
                    </Link>
                    <Link
                        href="/market"
                        className="text-lg font-quicksand hover:text-white transition"
                    >
                        Market
                    </Link>
                    {/* <Link
                        href="/about"
                        className="text-lg font-quicksand hover:text-white transition"
                    >
                        About
                    </Link> */}
                </nav>

                {/* Hamburger Icon */ }
                <button
                    className="md:hidden text-gold hover:text-white"
                    onClick={ () => setIsMenuOpen(!isMenuOpen) }
                >
                    { isMenuOpen ? (
                        <XMarkIcon className="h-6 w-6" />
                    ) : (
                        <Bars3Icon className="h-6 w-6" />
                    ) }
                </button>
            </div>

            {/* Background Overlay */ }
            <div
                className={ `fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }` }
                onClick={ () => setIsMenuOpen(false) }
            />

            {/* Mobile Navigation */ }
            <div
                className={ `fixed top-0 left-0 h-full w-2/3 backdrop-blur-md shadow-2xl z-40 transform transition-transform duration-300 border-r-4 border-gold ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }` }
            >
                <nav className="flex flex-col items-start space-y-6 py-6 px-4">
                    <Link
                        href="/"
                        className="text-lg font-quicksand hover:text-white transition border-b-2 border-solid border-gold w-full"
                        onClick={ () => setIsMenuOpen(false) }
                    >
                        Home
                    </Link>
                    <Link
                        href="/market"
                        className="text-lg font-quicksand hover:text-white transition border-b-2 border-solid border-gold w-full"
                        onClick={ () => setIsMenuOpen(false) }
                    >
                        Market
                    </Link>
                    {/* <Link
                        href="/about"
                        className="text-lg font-quicksand hover:text-white transition border-b-2 border-solid border-gold w-full"
                        onClick={ () => setIsMenuOpen(false) }
                    >
                        About
                    </Link> */}
                </nav>
            </div>
        </header>
    );
}
