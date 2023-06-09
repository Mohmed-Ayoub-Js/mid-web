import React from "react";
import "../css/style.css";
import image from './icon.png';
function Years() {
    return(
        <div className="header-year line">
<center>
<h1 className="title-select-year">Select the academic year</h1>

<div className="number-year">
    <br />
        <button className="button-number-year">1 year</button>
        <button className="button-number-year">2 year</button>
        <button className="button-number-year">3 year</button>
        <button className="button-number-year">4 year</button>
        <button className="button-number-year">5 year</button>
        <button className="button-number-year">6 year</button>
</div>
</center>     
</div>      
    );
}

export default Years;//    <fieldset className="line"></fieldset>
