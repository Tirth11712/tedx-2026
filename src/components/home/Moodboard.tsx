import Image from "next/image";
import type { GalleryItem } from "@/data/site";
import "@/styles/moodboard.css";

export default function Moodboard({ items }: { items: GalleryItem[] }) {
  return (
    <div className="moodboard-grid">
      {items.map((item, i) => (
        <figure className="moodboard-card" key={item.src}>
          <div className="moodboard-frame">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, 22vw"
              className="moodboard-img"
              priority={i < 2}
            />
          </div>
          {item.caption && (
            <figcaption
              className="moodboard-caption"
              style={item.captionFont ? { fontFamily: `var(${item.captionFont})` } : undefined}
            >
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
