import React from "react";
import { render } from "react-dom";
import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=742&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=742&q=80",
    thumbnailWidth: 243,
    thumbnailHeight: 319,
  },

  {
    src: "https://images.unsplash.com/photo-1517463700628-5103184eac47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1517463700628-5103184eac47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    thumbnailWidth: 212,
    thumbnailHeight: 319,
  },

  {
    src: "https://images.unsplash.com/photo-1554757716-46f23cad3134?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1554757716-46f23cad3134?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    thumbnailWidth: 319,
    thumbnailHeight: 212,
  },
  {
    src: "https://images.unsplash.com/photo-1572776686773-383a0ab2863d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNrYXRlYm9hcmRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    thumbnail:
      "https://images.unsplash.com/photo-1572776686773-383a0ab2863d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNrYXRlYm9hcmRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    thumbnailWidth: 213,
    thumbnailHeight: 320,
  },
  {
    src: "https://images.unsplash.com/photo-1531679407038-9e30eb3065fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1531679407038-9e30eb3065fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    thumbnailWidth: 321,
    thumbnailHeight: 214,
  },
  {
    src: "https://images.unsplash.com/photo-1515384054302-4531182061f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5peG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    thumbnail:
      "https://images.unsplash.com/photo-1515384054302-4531182061f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5peG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    thumbnailWidth: 229,
    thumbnailHeight: 320,
  },
  {
    src: "https://images.unsplash.com/photo-1572495641004-28421ae52e52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1572495641004-28421ae52e52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    thumbnailWidth: 213,
    thumbnailHeight: 320,
  },
];

function HomeGridGallery() {
  return (
    <div className="w-screen">
      <Gallery images={IMAGES} backdropClosesModal={true} />,
    </div>
  );
}

export default HomeGridGallery;
