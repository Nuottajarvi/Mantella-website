import Spotify from "../Images/social-media/spotify.png";
import Youtube from "../Images/social-media/youtube.png";
import Instagram from "../Images/social-media/instagram.png";
import Facebook from "../Images/social-media/facebook.png";
import Bandcamp from "../Images/social-media/bandcamp.png";
import SoundCloud from "../Images/social-media/soundcloud.png";
import iTunes from "../Images/social-media/itunes.png";

const socialMedias = [
    {file: Spotify, alt: "Spotify", url: "https://open.spotify.com/artist/6H2bvOunfdhlp8CaIhY3du?si=sFLvS_I1QCali8B_cvgnFA&dl_branch=1"},
    {file: Youtube, alt: "Youtube", url: "https://www.youtube.com/channel/UCd3oTEyhq0e4kbXoUU_TOxQ"}, 
    {file: Instagram, alt: "Instagram", url: "https://www.instagram.com/mantella.band/"},
    {file: Facebook, alt: "Facebook", url: "https://www.facebook.com/mantella.band"},
    {file: Bandcamp, alt: "Bandcamp", url: "https://mantella.bandcamp.com"},
    {file: SoundCloud, alt: "Soundcloud", url: "https://soundcloud.com/mantellaband"},
    {file: iTunes, alt: "iTunes", url: "https://music.apple.com/us/artist/mantella/1584109714"}
];


export default function Footer(props) {
    const {ReactGA} = props;
    return <div id="social-medias" className="footer fadeIn">
        {socialMedias.map(some => 
            <a href={some.url} key={some.alt} target="_blank" rel="noreferrer" onClick={
                () => {
                    ReactGA.event({action: "footer_click", category: some.alt});
                }}>
                <img src={some.file} alt={some.alt}/>
            </a>
        )}
    </div>;
}