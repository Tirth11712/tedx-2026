import Image from "next/image";

export default function PageBackdrop({ contained = false }: { contained?: boolean }) {
  return (
    <div className={contained ? "page-backdrop page-backdrop--contained" : "page-backdrop"} aria-hidden="true">
      <Image src="/media/backdrop.webp" alt="" fill sizes="100vw" className="page-backdrop-img" />
    </div>
  );
}
