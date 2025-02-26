import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href: string;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
    return (
        <Link 
            href={href} 
            className=" bg-blue-500 text-white rounded-full border border-black"
        >
            {children}
        </Link>
    );
};

export default Button;