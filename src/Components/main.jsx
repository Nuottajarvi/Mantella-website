import React, { useState } from "react";
import Leaves from "./leaves";
import Footer from "./footer";
import Logo from "./logo";
import { ConcertsTab, DiscographyTab, MantellaTab, MediaTab } from "./tabs";

const navs = {
    "Mantella": MantellaTab,
    "Concerts": ConcertsTab,
    "Discography": DiscographyTab,
    "Media": MediaTab
};

function Main() {

    const [tab, openTab] = useState("Mantella");
    const [fadeIn, setFadeIn] = useState("first");

    const changeTab = (name) => {
        setFadeIn("")
        setTimeout(() => {
            setFadeIn("subsequent");
            openTab(name);
        }, 1);
    };

    const navElems = Object.keys(navs).map((text, i) => 
        <div className="navelem" key={text}>
            {i === 0 ? <div>|</div> : null}
            {i === 2 ? <div className="extrabar-1">|</div> : null}
            {i === 1 || i === 3 ? <div className="extrabar-2">|</div> : null}
            <div
                className={"navbtn " + (tab === text ? "selected-navelem" : "")}
                onClick={() => changeTab(text)}
            >
                <p>{text}</p>
            </div>
            <div>
                |
            </div>
        </div>
    );

    let fade = "";
    if(fadeIn === "first")
        fade = "fadeIn";
    else if(fadeIn === "subsequent")
        fade = "fadeInFast";

    const visibleTab = navs[tab](fadeIn);
    return <div>
        <Leaves/>
        <Logo tab={tab}/>
        <div id="navmenu" className="fadeIn">
            {navElems}
        </div>
        {fade !== "" ? 
            <div className={fade}>
                {visibleTab}
            </div>
        : null}
        <Footer/>
    </div>;
}

export default Main;