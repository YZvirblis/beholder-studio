import Image from "next/image";
import CommunitySection from "./CommunitySection";

export default function AboutSection() {
    return (
        <section id="about" className="bg-sapphire text-gold py-12 border-t-4 border-gold shadow-lg">
            <div className="container mx-auto px-6 text-center">
                {/* Section Title */ }
                <h2 className="text-3xl font-cinzel mb-8">
                    About Beholder Studio
                </h2>

                {/* Story Section */ }
                <div className="space-y-6 text-lg font-quicksand text-left max-w-4xl mx-auto">
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
                        That’s why I created <span className="font-semibold">Beholder Studio</span>—to bring D&D
                        and TTRPGs to everyone, no matter their circumstances. This is more than just a platform;
                        it’s an <span className="font-semibold">ecosystem</span> for creators, players, and dreamers.
                        Whether you’re a solo adventurer or part of a group, Beholder Studio offers resources, modules,
                        and tools designed to include everyone. My mission is to remove the barriers to playing and
                        creating, empowering players of all levels to immerse themselves in worlds of their own making.
                    </p>
                </div>

                {/* Centered Logo */ }
                <div className="flex justify-center my-8">
                    <Image src="/images/logo.png" alt="Beholder Studio Logo" width={ 150 } height={ 150 } />
                </div>

                <CommunitySection />
            </div>
        </section>
    );
}
