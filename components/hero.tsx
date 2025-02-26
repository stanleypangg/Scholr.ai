import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400"],
});

const HeroSection: React.FC = () => {
    return (
        <section className="py-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className={`${playfair.className} text-4xl`}>
                    Ignite Your Learning Journey
                </h1>
                <p>
                    Discover a new way to learn with AI-powered courses.
                </p>
                <div className="flex gap-4">
                    <Link href="/about">Learn More</Link>
                    <Link href="/login">Get Started</Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;