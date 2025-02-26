import React from "react";
import Link from "next/link";

interface SidebarProps {
    name: string;
}

const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <aside>
            <h2><Link href="/">Scholr.ai</Link></h2>
            <ul>
                <li>
                    <Link href="/">Create new Course</Link>
                </li>
                <li>
                    <Link href="/">Library</Link>
                </li>
                <li>
                    <Link href="/">Profile</Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;