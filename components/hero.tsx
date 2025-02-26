import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Button from "./button";

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
                    <Button href="/about">Learn More</Button>
                    <Button href="/login">Get Started</Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;