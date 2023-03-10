import React from "react";
import styleNavBar from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styleNavBar.nav}>
            <div className={styleNavBar.item}>
                <a> Profile </a>
            </div>
            <div className={styleNavBar.item}>
                <a> Messages </a>
            </div>
            <div className={styleNavBar.item}>
                <a> News </a>
            </div>
            <div className={styleNavBar.item}>
                <a> Music </a>
            </div>
            <div className={styleNavBar.item}>
                <a> Settings </a>
            </div>
        </nav>
    )
}

export default NavBar;