import React from "react";
import CircularGallery from "./circularGallery";

const GalleryComp: React.FC = () => {
  return (
    <section id="gallery" className="py-16 w-full bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Gallery & Locations</h2>
        <CircularGallery />
      </div>
    </section>
  );
};

export default GalleryComp;
