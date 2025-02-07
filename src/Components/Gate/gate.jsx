import React, {useState, useEffect} from "react";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga4";
import Leaves from "../leaves";
import CookieBanner from "./cookiebanner";
import "./gate.css";
import FroggedBrain from "../../Images/FroggedBrain.jpg"
import Spotify from "../../Images/gate/spotify.png"
import Youtube from "../../Images/gate/youtube.png"

const links = {
    Bird: {
        youtube: "https://www.youtube.com/watch?v=DLc1hbYZ2ls&ab_channel=Mantella",
        spotify: "https://open.spotify.com/track/3CIJolDJIseFFAXtGi9rIg?si=361b240a44734490"
    },
    Creek: {
        youtube: "https://www.youtube.com/watch?v=r2gH0MMkJss&ab_channel=Mantella",
        spotify: "https://open.spotify.com/track/6BYyadiS1gFEMrH3Unn1io?si=2e1fdaac17704990"
    },
    Puppet: {
        youtube: "",
        spotify: ""
    },
    Scarlet: {
        youtube: "",
        spotify: ""
    },
    Spectator: {
        youtube: "",
        spotify: ""
    },
    "Exit Signs": {
        youtube: "",
        spotify: ""       
    },
    Shattered: {
        youtube: "",
        spotify: ""
    },
    Hourglass: {
        youtube: "",
        spotify: ""
    },
    "Frogged Brain": {
        youtube: "",
        spotify: ""
    }
}

function Gate(props) {
    const {song} = props;

    const [cookieModalOpen, setCookieModalOpen] = useState(true);

    useEffect(() => {
        ReactPixel.init('891292735108237');
        ReactPixel.revokeConsent();
        
        ReactGA.initialize([{trackingId: "G-PFQJQ5F5KH"}]);
        ReactGA.send({hitType: "pageview", page: song});
        ReactGA.event({
            action: "pageview_" + song,
            category: "song_pageview"
        });
    }, [song])

    function clickLink(target) {
        if(!cookieModalOpen) {
            ReactPixel.track("ViewContent", {content_name: song, content_type: target})
            const url = links[song][target];
            window.open(url, '_blank').focus();

            ReactGA.event({
                action: "open_link_" + song + "_" + target,
                category: "conversion"
            });
        }
    }

    function accept() {
        setCookieModalOpen(false);
        ReactPixel.grantConsent();
        ReactPixel.pageView();

        ReactGA.event({
            action: "GDPR_accept",
            category: "GDPR"
        });
    }

    function decline() {
        setCookieModalOpen(false);
        ReactGA.event({
            action: "GDPR_reject",
            category: "GDPR"
        });
    }

    return <div id="gate">
        <div style={{filter: cookieModalOpen ? "brightness(10%)" : "none"}}>
            <Leaves turqoise/>
            <img className="blur" src={FroggedBrain} alt=""/>
            <div className="content">
                <img className="albumCover" src={FroggedBrain} alt="Idle thoughts album cover"/>
                <p className="jungle">Mantella - {song}</p>
                <table className="platforms">
                    <tbody>
                        <tr onClick={() => clickLink("spotify")}>
                            <td><img src={Spotify} alt="Spotify"/></td>
                            <td><div className="listenBtn">Listen</div></td>
                        </tr>
                        <tr onClick={() => clickLink("youtube")}>
                            <td><img src={Youtube} alt="Youtube"/></td>
                            <td><div className={"listenBtn"}>Listen</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        {cookieModalOpen ? <CookieBanner accept={accept} decline={decline}/> : null}
    </div>;
}

export default Gate;