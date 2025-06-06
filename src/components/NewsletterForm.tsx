'use client';
import { useState } from "react";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add functionality to handle form submission here
        console.log("Subscribed with email:", email);
        setEmail(""); // Clear the input after submission
    };

    return (
        <div className="flex flex-col items-center text-center bg-gradient-to-tr from-slate-900 to-sapphire p-6 sm:p-8 rounded shadow-lg border-2 border-gold">
            {/* Title */ }
            <h3 className="text-xl sm:text-2xl font-cinzel mb-4 text-gold">
                Subscribe to Our Newsletter
            </h3>
            {/* Description */ }
            <p className="text-sm sm:text-lg font-quicksand mb-6 text-gold">
                Get the latest updates, exclusive content, and behind-the-scenes insights
                straight to your inbox.
            </p>
            {/* Form */ }
            <form className="w-full max-w-xs sm:max-w-md" onSubmit={ handleSubmit }>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                    className="w-full py-2 px-3 sm:py-3 sm:px-4 rounded border border-sapphire mb-4 text-sapphire text-sm sm:text-base"
                    required
                />
                <button
                    type="submit"
                    className="bg-sapphire text-gold py-2 sm:py-3 px-6 rounded hover:bg-gradient-to-br from-yellow-200 to-gold hover:text-sapphire transition font-quicksand w-full text-sm sm:text-base"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}
