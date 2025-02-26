import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
    // TODO
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header>
            <div className="m-6 flex gap-4">
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
                <Link href="/login" className=" bg-blue-500 text-white rounded-full border border-black">Get Started</Link>
            </div>
        </header>
    );
};

export default Header;