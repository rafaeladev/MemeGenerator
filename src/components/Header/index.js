import React from "react";
import logo from "../../images/Troll-Face.png";

const Header = () => {
    return (
        <nav>
            <div className="nav--title">
                <img
                    src={logo}
                    alt="Meme Generator Logo"
                    className="nav--logo"
                />
                <h2>Meme Generator</h2>
            </div>
            <p>React Course - Project 3</p>
        </nav>
    );
};

export default Header;
