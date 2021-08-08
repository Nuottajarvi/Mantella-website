import React, { useState } from "react";
import Leaves from "./leaves";
import Logo from "../Images/logo.jpg";

const navTexts = ["MANTELLA", "TOUR", "DISCOGRAPHY", "MEDIA"];

function Main() {

    const navElems = navTexts.map((text, i) => 
        <div className="navelem">
            {i == 0 ? <div>|</div> : null}
            <div>
                <p>{text}</p>
            </div>
            <div>
                |
            </div>
        </div>
    );

    return <div>
        <Leaves/>
        <img src={Logo} id="logo"/>
        <div id="navmenu">
            {navElems}
        </div>
        <div id="textField">
            <p>
                Mantella is a psychedelic rock band from Oulu, Finland. Formed during 2020,
                Mantella started working on their own sound fueled by the pandemic and the
                band members' love for psychedelic, progressive and classic rock bands of
                the past and the present
            </p>
        </div>
    </div>;
}

export default Main;