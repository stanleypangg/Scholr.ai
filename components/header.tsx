import Link from "next/link";
import Image from "next/image";
import Button from "./button";

interface HeaderProps {
    // TODO
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header>
            <div className="p-6 flex gap-4 text-white bg-black">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="Scholr.ai logo"
                        width={120}
                        height={120}
                    />
                </Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Button href="/login">Get Started</Button>
            </div>
        </header>
    );
};

export default Header;