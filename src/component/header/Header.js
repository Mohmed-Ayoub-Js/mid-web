import React from "react";
import "../css/style.css";
import Link from "../link/Link";
function Header(){
    return(
        <div className="header-header" id="headerall">
            <div className="logo">
                <h1 className="logo-website">
                     <span className="part-one-of-logo">MEDICINE</span> Algeria
                </h1>
            </div>
            <div className="link">
                <Link />
            </div>

        </div>
    );
}


export default Header;