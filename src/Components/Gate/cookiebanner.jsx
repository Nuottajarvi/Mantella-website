import React from "react";

function CookieBanner(props) {
    const {accept, decline} = props;

    return <div id="banner">
        <div className="title">
            <h3>GDPR Cookie notice</h3>
        </div>
        <p>Hey! This webpage uses cookies and similar technologies to analyze traffic to improve our advertising in the future.</p>
            <button onClick={accept} className="accept">Allow</button>
            <button onClick={decline} className="decline">Decline</button>
    </div>;
}

export default CookieBanner;