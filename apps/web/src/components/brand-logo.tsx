import Image from "next/image";

import brandLogo from "../../public/brand/dr-performance-logo.jpeg";

type BrandLogoProps = {
  compact?: boolean;
  eager?: boolean;
};

export function BrandLogo({ compact = false, eager = false }: BrandLogoProps) {
  return (
    <span
      className={compact ? "brand-logo brand-logo--compact" : "brand-logo"}
    >
      <Image
        alt="DR Performance by Daniel Rodrigues"
        className="brand-logo__image"
        priority={eager}
        sizes={compact ? "180px" : "(max-width: 720px) 320px, 520px"}
        src={brandLogo}
      />
    </span>
  );
}
