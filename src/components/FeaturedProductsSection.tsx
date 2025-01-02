import Image from "next/image";
import Link from "next/link";

type Product = {
    id: number;
    title: string;
    description: string;
    image?: string;
};

const featuredProducts: Product[] = [
    {
        id: 1,
        title: "The Shadow Dagger of Ardeep",
        description: "A legendary weapon with a mysterious backstory.",
        image: "/images/shadow-dagger.jpg", // Replace with actual image paths
    },
    {
        id: 2,
        title: "Enchanted Tome of Mystra",
        description: "A magical tome containing ancient spells.",
        image: "/images/enchanted-tome.jpg", // Replace with actual image paths
    },
    {
        id: 3,
        title: "Cloak of Whispering Shadows",
        description: "A cloak that conceals the wearer in shadow.",
        image: "/images/cloak-shadows.jpg", // Replace with actual image paths
    },
];

export default function FeaturedProductsSection() {
    return (
        <section
            className="bg-[#161e2e] text-gold py-12"
            style={ {
                backgroundImage: "url('/images/seamless-background.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "repeat",
            } }
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-cinzel text-center mb-8">
                    Featured Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    { featuredProducts.map((product) => (
                        <div
                            key={ product.id }
                            className="bg-white p-6 rounded shadow-md hover:shadow-lg transition text-sapphire"
                        >
                            { product.image && (
                                <Image
                                    src={ product.image }
                                    alt={ product.title }
                                    className="rounded mb-4"
                                    width={ 100 }
                                    height={ 100 }
                                />
                            ) }
                            <h3 className="text-xl font-quicksand font-bold mb-2">
                                { product.title }
                            </h3>
                            <p className="text-sm font-quicksand mb-4">{ product.description }</p>
                            <button className="bg-gold text-sapphire py-2 px-4 rounded hover:bg-sapphire hover:text-gold transition font-quicksand">
                                View Details
                            </button>
                        </div>
                    )) }
                </div>
                <div className="flex flex-col md:flex-row justify-center align-middle p-16 space-y-4 md:space-y-0 md:space-x-6 w-full">
                    <Link href={ "/market" } className="text-2xl font-quicksand hover:text-white transition">
                        <button className="bg-sapphire text-gold py-3 px-6 rounded hover:bg-gold hover:text-sapphire transition font-quicksand border-2 border-gold">
                            View all
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
