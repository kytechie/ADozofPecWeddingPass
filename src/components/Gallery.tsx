"use client";

import GalleryHero from "./GalleryHero";
import GalleryGrid from "./GalleryGrid";
import GalleryLightbox from "./GalleryLightbox";

import { useState } from "react";

const photos = [
  "/images/prewedding/1.jpg",
  "/images/prewedding/2.jpg",
  "/images/prewedding/3.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section
        id="gallery"
        className="bg-[#FAF8F2] pt-16 pb-24"
      >
        <GalleryHero />

        <GalleryGrid
          photos={photos}
          onSelect={setSelectedImage}
        />
      </section>

      <GalleryLightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}