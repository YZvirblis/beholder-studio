import Image from "next/image";
import CommunitySection from "./CommunitySection";
import { FaDiceD20, FaScroll, FaUserFriends, FaMagic } from "react-icons/fa";

export default function AboutSection() {
    return (
        <section id="about" className="bg-sapphire text-gold py-16 border-t-4 border-gold shadow-lg">
            <div className="container mx-auto px-6">
                {/* Section Title */ }
                <h2 className="text-4xl font-cinzel text-center mb-12 underline">
                    About Fable Forge
                </h2>

                {/* General About Section */ }
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12  p-12 rounded-lg  mb-8">
                    {/* About Fable Forge */ }
                    <div className=" text-lg font-quicksand  p-8 rounded-lg text-gold w-full">
                        <p className="mb-4">
                            At <span className="font-semibold">Fable Forge</span>, we believe in the power of stories to connect, inspire, and transform.
                            Our platform is dedicated to creating a vibrant ecosystem for tabletop RPG enthusiasts,
                            offering tools, resources, and modules to make every adventure unforgettable.
                        </p>
                        <p>
                            Whether you’re a solo adventurer or part of a group, Fable Forge is here to empower you with
                            everything you need to craft worlds, create characters, and embark on thrilling quests.
                            With a focus on accessibility and creativity, our mission is to remove barriers and ensure
                            that everyone can play, dream, and tell their own stories.
                        </p>
                    </div>

                    {/* Center Graphic */ }
                    {/* <div className="flex items-center justify-center w-1/2">
                        <img
                            src="/images/beholder.png"
                            alt="Beholder Logo"
                            className="w-60 h-60 rounded-full shadow-lg border-4 border-gold"
                        />
                    </div> */}

                    {/* Future Features */ }
                    {/* <div className="max-w-lg text-lg font-quicksand  p-8 rounded-lg text-gold">
                        <p className="mb-4">
                            Fable Forge is just beginning. Here’s what’s on the horizon:
                        </p>
                        <ul className="list-disc list-inside text-left space-y-2">
                            <li>Interactive solo adventures with dynamic storytelling.</li>
                            <li>Enhanced tools for real-time campaign management.</li>
                            <li>Exclusive content packs from renowned creators.</li>
                            <li>Advanced world-building and map creation features.</li>
                        </ul>
                    </div> */}
                </div>


                {/* Features Section */ }
                <div className="max-w-6xl mx-auto mb-16">
                    {/* <h3 className="text-3xl font-cinzel text-center mb-10">Platform Features</h3> */ }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */ }
                        <div className="flex flex-col items-center bg-gradient-to-t from-sapphire-light to-sapphire-dark p-6 rounded-lg shadow-md border border-gold cursor-default transition-transform transform hover:scale-105 hover:shadow-lg">
                            <FaScroll className="text-5xl mb-4 text-gold" />
                            <h4 className="text-l font-cinzel mb-2">Curated Modules</h4>
                            <p className="text-sm text-center font-quicksand">
                                Access a growing library of expertly crafted modules for solo and group play.
                            </p>
                        </div>
                        {/* Feature 2 */ }
                        <div className="flex flex-col items-center bg-gradient-to-t from-sapphire-light to-sapphire-dark p-6 rounded-lg shadow-md border border-gold cursor-default transition-transform transform hover:scale-105 hover:shadow-lg">
                            <FaUserFriends className="text-5xl mb-4 text-gold" />
                            <h4 className="text-l font-cinzel mb-2">Inclusive Community</h4>
                            <p className="text-sm text-center font-quicksand">
                                Join a welcoming community of players and creators sharing their passion for TTRPGs.
                            </p>
                        </div>
                        {/* Feature 3 */ }
                        <div className="flex flex-col items-center bg-gradient-to-t from-sapphire-light to-sapphire-dark p-6 rounded-lg shadow-md border border-gold cursor-default transition-transform transform hover:scale-105 hover:shadow-lg">
                            <FaDiceD20 className="text-5xl mb-4 text-gold" />
                            <h4 className="text-l font-cinzel mb-2">Dynamic Tools</h4>
                            <p className="text-sm text-center font-quicksand">
                                Leverage tools for character creation, world-building, and adventure design.
                            </p>
                        </div>
                        {/* Feature 4 */ }
                        <div className="flex flex-col items-center bg-gradient-to-t from-sapphire-light to-sapphire-dark p-6 rounded-lg shadow-md border border-gold cursor-default transition-transform transform hover:scale-105 hover:shadow-lg">
                            <FaMagic className="text-5xl mb-4 text-gold" />
                            <h4 className="text-l font-cinzel mb-2">Future Innovation</h4>
                            <p className="text-sm text-center font-quicksand">
                                Discover upcoming features that will redefine how you play and create.
                            </p>
                        </div>
                    </div>
                </div>


                {/* Story Section */ }
                <div className="flex justify-center mb-16">
                    <div className="space-y-6 text-lg font-quicksand text-left max-w-4xl bg-gradient-to-br from-yellow-200 to-gold p-8 rounded-lg shadow-md w-full text-sapphire">
                        <h3 className="text-3xl font-cinzel mb-6">The Story</h3>
                        <p>
                            From the moment I picked up my first video game as a child, I fell
                            in love with the worlds that creativity could build. Over time, I discovered my passion
                            for all forms of art—music, visual storytelling, books, and more. Yet, I realized something
                            extraordinary: video games were the ultimate masterpiece, blending so many art forms into
                            one cohesive, interactive experience. They weren’t just something to watch or hear—they
                            were something you could <span className="font-semibold">navigate</span>, something you
                            could <span className="font-semibold">become part of</span>.
                        </p>

                        <p>
                            Years later, I found Dungeons & Dragons. Naturally, I was captivated. Here was a game
                            where creativity was the rule, not the exception—a game where players could craft characters,
                            worlds, and endless possibilities. But my passion for D&D came with a challenge: I didn’t have
                            the means to play it traditionally. My surroundings lacked interest, and as a new player, I
                            found it daunting to join online groups due to confidence, language barriers, and other hurdles.
                        </p>

                        <p>
                            That’s why I created <span className="font-semibold">Fable Forge</span>—to bring D&D
                            and TTRPGs to everyone, no matter their circumstances. This is more than just a platform;
                            it’s an <span className="font-semibold">ecosystem</span> for creators, players, and dreamers.
                            Whether you’re a solo adventurer or part of a group, Fable Forge offers resources, modules,
                            and tools designed to include everyone. My mission is to remove the barriers to playing and
                            creating, empowering players of all levels to immerse themselves in worlds of their own making.
                        </p>
                        <div className="flex items-center justify-between text-center text-lg font-bold">
                            <span className="m-3">- Yuriy Zhvirblis</span>
                            <img
                                src="/images/yzprofile.jpg"
                                alt="Yuriy Zhvirblis Profile Picture"
                                className="rounded-full w-24 h-24 border-solid border-sapphire border-2 shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Centered Logo */ }
                <div className="flex justify-center my-12">
                    <Image src="/images/logo.png" alt="Fable Forge Logo" width={ 150 } height={ 150 } />
                </div>

                <CommunitySection />
            </div>
        </section>
    );
}
