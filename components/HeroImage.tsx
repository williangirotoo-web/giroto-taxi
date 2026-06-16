import Image from "next/image"

interface HeroImageProps {
  src: string
  alt: string
}

export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[16/7]">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        className="object-cover object-center"
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
    </div>
  )
}
