import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import "./menubar.css";

const MenuComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="menu-container">
            <button className="menu-icon" onClick={toggleMenu}>
                <MdOutlineMenu />
            </button>
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <button className="close-icon" onClick={toggleMenu}>
                    <IoCloseSharp />
                </button>
                <ul className="menu-items">
                    <li>Ac</li>
                    <li>Tv</li>
                    <li>Tables</li>
                </ul>
            </div>
        </div>
    );
};

export default MenuComponent;
