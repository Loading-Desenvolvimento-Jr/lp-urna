import Image from "next/image";
import { site } from "@/lib/site";

export function Logo({ size = 28, showName = true }: { size?: number; showName?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/brand/urna-mark.svg"
        alt=""
        width={Math.round(size * (158 / 181))}
        height={size}
        priority
      />
      {showName && (
        <span className="text-[17px] font-bold tracking-[-0.02em] text-ink">
          {site.name}
        </span>
      )}
    </span>
  );
}
