"use client";

import Image from "next/image";
import PageHero from "@/components/layout/PageHero";

interface GalleryItem {
  id: number;
  image: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, image: "/images/gallery/gallery-01.webp" },
  { id: 2, image: "/images/gallery/gallery-02.webp" },
  { id: 3, image: "/images/gallery/gallery-03.webp" },
  { id: 4, image: "/images/gallery/gallery-04.webp" },
  { id: 5, image: "/images/gallery/gallery-05.webp" },
  { id: 6, image: "/images/gallery/gallery-06.webp" },
  { id: 7, image: "/images/gallery/gallery-07.webp" },
  { id: 8, image: "/images/gallery/gallery-08.webp" },
  { id: 9, image: "/images/gallery/gallery-09.webp" },
  { id: 10, image: "/images/gallery/gallery-10.webp" },
  { id: 11, image: "/images/gallery/gallery-11.webp" },
  { id: 12, image: "/images/gallery/gallery-12.webp" },
  { id: 13, image: "/images/gallery/gallery-13.webp" },
  { id: 14, image: "/images/gallery/gallery-14.webp" },
  { id: 15, image: "/images/gallery/gallery-15.webp" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="GALLERY"
        description="Take a look at some of our recent projects."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />

      <section className="py-20 sm:py-28 bg-kemnay-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid — images only */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg bg-kemnay-dark group cursor-pointer"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
