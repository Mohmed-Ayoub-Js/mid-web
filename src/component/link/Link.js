import React from "react";

function Link() {
    return(
        <center>
        <div className="header-link">
            <div className="link-by-source-file-document">
            <input type="search" className="search-element" placeholder=" 🔎 Search" />

                <a href='#' target="_blank" className="link-a-element">
                    home page
                </a>
                <a href='#' target="_blank" className="link-a-element">
                    medicine
                </a>
                <a href='#' target="_blank" className="link-a-element"
                >about us
                </a>
                <a href='#' target="_blank" className="link-a-element"
                >login 
                </a>
                <a href='#' target="_blank" className="link-a-element"
                >register 
                </a>
            </div>
        </div>
        </center>
    );
}

export default Link;