import { FaDiscord, FaPatreon } from "react-icons/fa";
// import { FaDiscord, FaCoffee, FaPatreon } from "react-icons/fa";
// import NewsletterForm from "./NewsletterForm";

export default function CommunitySection() {
    return (
        <section className="bg-sapphire text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 bg-[#161e2e] p-8 sm:p-12 lg:p-16 rounded-xl shadow-xl">
                    {/* Community Links */ }
                    <div className="flex flex-col items-center lg:w-1/2 text-center">
                        <h3 className="text-2xl md:text-3xl font-cinzel mb-4">Join Our Community</h3>
                        <p className="text-base sm:text-lg font-quicksand mb-6">
                            Be a part of the adventure! Connect with us on Discord, support our work,
                            and help shape the future of EverQuill.
                        </p>
                        <div className="flex justify-center space-x-4 sm:space-x-6 text-2xl sm:text-3xl">
                            <a
                                href="https://discord.gg/zH3CApnwsq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sapphire hover:bg-gradient-to-br from-yellow-200 to-gold rounded-full p-2 sm:p-3 shadow-xl bg-sapphire transition"
                            >
                                <FaDiscord />
                            </a>
                            {/* <a
                                href="https://www.buymeacoffee.com/everquillgames"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sapphire hover:bg-gradient-to-br from-yellow-200 to-gold rounded-full p-2 sm:p-3 shadow-xl bg-sapphire transition"
                            >
                                <FaCoffee />
                            </a> */}
                            <a
                                href="https://www.patreon.com/EverQuillGames"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sapphire hover:bg-gradient-to-br from-yellow-200 to-gold rounded-full p-2 sm:p-3 shadow-xl bg-sapphire transition"
                            >
                                <FaPatreon />
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Subscription */ }
                    {/* <div className="w-full lg:w-1/2">
                        <NewsletterForm />
                    </div> */}
                </div>
            </div>
        </section>
    );
}
