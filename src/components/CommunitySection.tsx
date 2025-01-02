import { FaDiscord, FaCoffee, FaPatreon } from "react-icons/fa";

export default function CommunitySection() {
    return (
        <section className="bg-sapphire text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-[#161e2e] p-16 rounded-xl shadow-xl">
                    {/* Community Links */ }
                    <div className="flex flex-col items-center md:w-1/2 text-center">
                        <h3 className="text-2xl font-cinzel mb-4">Join Our Community</h3>
                        <p className="text-lg font-quicksand mb-6">
                            Be a part of the adventure! Connect with us on Discord, support our work,
                            and help shape the future of Fable Forge.
                        </p>
                        <div className="flex justify-center space-x-6 text-3xl">
                            <a
                                href="https://discord.com/invite/your-server"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sapphire hover:bg-gradient-to-br from-yellow-200 to-gold rounded-full p-3 shadow-xl bg-sapphire transition"
                            >
                                <FaDiscord />
                            </a>
                            <a
                                href="https://www.buymeacoffee.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sapphire hover:bg-gradient-to-br from-yellow-200 to-gold rounded-full p-3 shadow-xl bg-sapphire transition"
                            >
                                <FaCoffee />
                            </a>
                            <a
                                href="https://www.patreon.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sapphire hover:bg-gradient-to-br from-yellow-200 to-gold rounded-full p-3 shadow-xl bg-sapphire transition"
                            >
                                <FaPatreon />
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Subscription */ }
                    <div className="flex flex-col items-center md:w-1/2 text-center bg-gradient-to-tr from-slate-900 to-sapphire p-6 rounded shadow-lg border-2 border-gold">
                        <h3 className="text-2xl font-cinzel mb-4 text-gold">Subscribe to Our Newsletter</h3>
                        <p className="text-lg font-quicksand mb-6 text-gold">
                            Get the latest updates, exclusive content, and behind-the-scenes insights
                            straight to your inbox.
                        </p>
                        <form className="w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full py-2 px-4 rounded border border-sapphire mb-4 text-sapphire"
                            />
                            <button
                                type="submit"
                                className="bg-sapphire text-gold py-2 px-6 rounded hover:bg-gradient-to-br from-yellow-200 to-gold hover:text-sapphire transition font-quicksand w-full"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
