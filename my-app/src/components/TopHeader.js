import React from "react";
import "./TopHeader.css";

function TopHeader(){

    return (
        <div className="TopHeader">
            <h2>HarrisonElenowitz.com</h2>
            <nav>
                <a href="../index.html">Home</a>
            </nav>
            <div id="used-for-space"></div>
            <h1>React Web App</h1>
        </div>
    );
}

export default TopHeader;