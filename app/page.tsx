import { ReactElement } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero";

export default function LandingPage(): ReactElement {
    return (
        <>
            <Header></Header>
            <HeroSection></HeroSection>
        </>
    );
};