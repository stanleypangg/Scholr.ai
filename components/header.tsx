import Link from "next/link";

interface HeaderProps {
    // TODO
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div>
            <h1>Header</h1>
            <ul>
                <Link href="\">
                    
                </Link>
            </ul>
        </div>
    );
};

export default Header;