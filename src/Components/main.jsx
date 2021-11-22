import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Leaves from "./leaves";
import Footer from "./footer";
import Logo from "./logo";
import { ConcertsTab, DiscographyTab, MantellaTab, MediaTab } from "./tabs";

const navs = [
    {title: "Mantella", elem: MantellaTab, url: "/"},
    {title: "Concerts", elem: ConcertsTab, url: "/concerts"},
    {title: "Discography", elem: DiscographyTab, url: "/discography"},
    {title: "Media", elem: MediaTab, url: "/media"}
];

function Main() {

    const [fadeIn, setFadeIn] = useState("first");

    const setFadeout = (name) => {
        setFadeIn("")
        setTimeout(() => {
            setFadeIn("subsequent");
        }, 1);
    };

    const location = useLocation();
    const path = location.pathname;

    useEffect(() => {
        ReactGA.initialize([{trackingId: "G-PFQJQ5F5KH"}]);
    }, [])
    
    useEffect(() => {
        ReactGA.send({hitType: "pageview", page: path});    
    }, [path]);

    const navElems = navs.map((nav, i) => 
        <div className="navelem" key={nav.title}>
            {i === 0 ? <div>|</div> : null}
            {i === 2 ? <div className="extrabar-1">|</div> : null}
            {i === 1 || i === 3 ? <div className="extrabar-2">|</div> : null}
            <Link
                to={nav.url}
                onClick={setFadeout}
                className={"navbtn " + (path === nav.url ? "selected-navelem" : "")}
            >
                <p>{nav.title}</p>
            </Link>
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

    return <div>
        <Leaves/>
        <Logo tab={path}/>
        <div id="navmenu" className="fadeIn">
            {navElems}
        </div>
        {fade !== "" ? 
            <div className={fade}>
                <Routes>
                    {navs.map(nav => <Route path={nav.url} element={nav.elem({ReactGA})} key={nav.title}/>)}
                </Routes>
            </div>
        : null}
        <Footer ReactGA={ReactGA}/>
    </div>;
}

export default Main;