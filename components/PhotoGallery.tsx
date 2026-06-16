import Image from "next/image"

interface GalleryImage {
  src: string
  alt: string
}

interface PhotoGalleryProps {
  images: GalleryImage[]
  title?: string
}

export default function PhotoGallery({ images, title }: PhotoGalleryProps) {
  if (!images || images.length === 0) return null

  return (
    <section className="hidden md:block py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        {title && (
          <h2 className="text-xl font-bold mb-6 text-center text-white">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-3 gap-4">
          {images.slice(0, 3).map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 1200px) 33vw, 400px"
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                quality={80}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
