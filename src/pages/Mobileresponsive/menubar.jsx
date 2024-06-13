import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import "./menubar.css";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const MenuComponent = (props) => {
    const { categories } = props;
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
                <div>
                    <ul className="menu-items-category">
                        {categories.map((category) => {
                            return (
                                <Link to={`/${category}`} key={category}>
                                    <MenuItem >{category.charAt(0).toUpperCase() + category.slice(1)}</MenuItem>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MenuComponent;
