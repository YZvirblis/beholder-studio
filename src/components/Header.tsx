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
                    <Image src={ "/images/logo.png" } alt="logo" width={ 40 } height={ 40 }></Image>
                    Fable Forge
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
                        href="/store"
                        className="text-lg font-quicksand hover:text-white transition"
                    >
                        Store
                    </Link>
                    <Link
                        href="/contact"
                        className="text-lg font-quicksand hover:text-white transition"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button */ }
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

            {/* Mobile Navigation */ }
            { isMenuOpen && (
                <nav className="md:hidden bg-sapphire shadow-md">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li>
                            <Link
                                href="/"
                                className="text-lg font-quicksand hover:text-white transition"
                                onClick={ () => setIsMenuOpen(false) }
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/store"
                                className="text-lg font-quicksand hover:text-white transition"
                                onClick={ () => setIsMenuOpen(false) }
                            >
                                Store
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-lg font-quicksand hover:text-white transition"
                                onClick={ () => setIsMenuOpen(false) }
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="text-lg font-quicksand hover:text-white transition"
                                onClick={ () => setIsMenuOpen(false) }
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            ) }
        </header>
    );
}
