import Image from "next/image";
import config from "@/config.json";

export default function PageBackdrop({ contained = false }: { contained?: boolean }) {
  return (
    <div className={contained ? "page-backdrop page-backdrop--contained" : "page-backdrop"} aria-hidden="true">
      <Image src={config.media.pageBackdrop} alt="" fill sizes="100vw" className="page-backdrop-img" priority />
    </div>
  );
}
