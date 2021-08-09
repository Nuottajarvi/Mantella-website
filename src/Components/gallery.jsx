import React from "react";
import Gallery from "react-grid-gallery";
import Band01 from "../Images/album/band01.jpg";
import Band02 from "../Images/album/band02.jpg";
import Band03 from "../Images/album/band03.jpg";
import Band04 from "../Images/album/band04.jpg";
import Band05 from "../Images/album/band05.jpg";
import Arttu01 from "../Images/album/arttu01.jpg";
import Peetujanne from "../Images/album/peetujanne.jpg";
import Niko01 from "../Images/album/niko01.jpg";
import Arttujanne01 from "../Images/album/arttujanne01.jpg";
import Teemu01 from "../Images/album/teemu01.jpg";
import Teemuarttupeetu01 from "../Images/album/teemuarttupeetu01.jpg";

const IMAGES = [
  {
    src: Band01,
    thumbnail: Band01,
    thumbnailWidth: 320,
    thumbnailHeight: 213.25,
  },
  {
    src: Band04,
    thumbnail: Band04,
    thumbnailWidth: 266.5,
    thumbnailHeight: 400,
  },
  {
    src: Arttu01,
    thumbnail: Arttu01,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
  },
  {
    src: Band03,
    thumbnail: Band03,
    thumbnailWidth: 320,
    thumbnailHeight: 213.25,
  },
  {
    src: Band02,
    thumbnail: Band02,
    thumbnailWidth: 320,
    thumbnailHeight: 213.25,
  },
  {
    src: Peetujanne,
    thumbnail: Peetujanne,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
  },
  {
    src: Teemuarttupeetu01,
    thumbnail: Teemuarttupeetu01,
    thumbnailWidth: 352,
    thumbnailHeight: 264,
  },
  {
    src: Niko01,
    thumbnail: Niko01,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
  },
  {
    src: Arttujanne01,
    thumbnail: Arttujanne01,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
  },
  {
    src: Teemu01,
    thumbnail: Teemu01,
    thumbnailWidth: 240,
    thumbnailHeight: 320,
  },
  {
    src: Band05,
    thumbnail: Band05,
    thumbnailWidth: 320,
    thumbnailHeight: 240,
  },
];

export default function MediaGallery() {
  return (
    <Gallery
      images={IMAGES}
      enableLightbox={true}
      backdropClosesModal
      rowHeight={360}
    />
  );
}