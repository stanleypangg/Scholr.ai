import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Button from "./button";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400"],
});

const HeroSection: React.FC = () => {
    return (
        <section className="py-40">
            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className={`${playfair.className} text-6xl`}>
                    Introducing Scholr.ai
                </h1>
                <h2 className="text-3xl">
                    Discover a new way to learn with AI-powered courses.
                </h2>
                <div className="flex gap-4">
                    <Button href="/about">Learn More</Button>
                    <Button href="/login">Get Started</Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;