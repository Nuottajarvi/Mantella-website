import MediaGallery from "./gallery";
import IdleThoughts from "../Images/IdleThoughts.jpeg";
import ValleyBleedsGold from "../Images/ValleyBleedsGold.jpg";
import FroggedBrain from "../Images/FroggedBrain.jpg";
import SpotifyWhite from "../Images/social-media/spotify-white.png";

export function MantellaTab(props) {
    
    const {ReactGA} = props;
    return (
        <div className="textField">
            <a href="https://open.spotify.com/artist/6H2bvOunfdhlp8CaIhY3du" onClick={() => {
                ReactGA.event({action: "call_to_action", category: "Spotify"});
            }}>
                <div id="spotifyBtn" className="fadeInSlow">Listen on Spotify now!<img src={SpotifyWhite} alt="spotify-logo"/></div>
            </a>
            <p>
                Mantella is a psychedelic rock band from Oulu, Finland. Formed during 2020,
                Mantella started working on their own sound fueled by the band members' love for
                psychedelic, progressive and classic rock bands of the past and the present
            </p>
            <p>
                The bands latest album "Frogged Brain" was self-recorded and mixed in the band's garage and released in 2025.
            </p>
        </div>
    );
}

export function DiscographyTab() {
    return (
        <div className="textField" target="_blank">
            <a href="https://open.spotify.com/album/4P6bDNGkWxmz4yVRlMZy0o">
                <div>
                    <img src={FroggedBrain} alt="album art of frogged brain" className="albumart"/>
                    <h3>Frogged Brain</h3>
                    <p>1. Puppet</p>
                    <p>2. Scarlet</p>
                    <p>3. Spectator</p>
                    <p>4. Exit Signs</p>
                    <p>5. Shattered</p>
                    <p>6. Hourglass</p>
                    <p>7. Frogged Brain</p>
                    <img src={ValleyBleedsGold} alt="single art of valley bleeds gold" className="albumart"/>
                    <h3>Valley Bleeds Gold</h3>
                    <p>1. Valley Bleeds Gold - 5:59</p>
                    <img src={IdleThoughts} alt="album art of idle thoughts" className="albumart"/>
                    <h3>Idle Thoughts</h3>
                    <p>1. Idle Thoughts - 4:11</p>
                    <p>2. Weary Surfer - 5:12</p>
                    <p>3. Bird - 5:02</p>
                    <p>4. Metropolis - 5:20</p>
                    <p>5. Creek - 3:11</p>
                </div>
            </a>
        </div>
    );
}

export function MediaTab() {
    return (
        <div className="galleryField">
            <MediaGallery/>
        </div>
    );
}