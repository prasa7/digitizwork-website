import Image from "next/image";
import type { ImageAsset } from "@/content/types";

interface ImageSlotProps {
  image: ImageAsset;
  className?: string;
  /** Responsive sizes hint for raster images (ignored for SVG). */
  sizes?: string;
  /** Load eagerly with high priority (use for the above-the-fold hero only). */
  priority?: boolean;
}

/**
 * Renders an image slot from content via next/image. Width/height reserve space (no layout shift).
 * SVGs are served as-is; PNG/WebP/JPEG get responsive optimisation automatically.
 */
export function ImageSlot({ image, className, sizes = "100vw", priority }: ImageSlotProps) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
