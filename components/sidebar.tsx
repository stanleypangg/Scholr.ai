import React from "react";

interface SidebarProps {
    name: string;
}

const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <aside>
            <h2>Name here</h2>
            <ul>
                <li><a href="">Create a New Course</a></li>
                <li><a href="">Library</a></li>
                <li><a href="">Profile</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;