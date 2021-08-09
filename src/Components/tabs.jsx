import MediaGallery from "./gallery";

export function MantellaTab() {
    return (
        <div className="textField">
            <p>
                Mantella is a psychedelic rock band from Oulu, Finland. Formed during 2020,
                Mantella started working on their own sound fueled by the pandemic and the
                band members' love for psychedelic, progressive and classic rock bands of
                the past and the present
            </p>
        </div>
    );
}

export function ConcertsTab() {
    return (
        <div className="textField">
            <p>
                There are currently no scheduled concerts
            </p>
        </div>
    );
}

export function DiscographyTab() {
    return (
        <div className="textField">
            <p>
                First EP "Idle Thoughs" will be released in September. Stay tuned!
            </p>
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