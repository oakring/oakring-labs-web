import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoMarkProps = {
  className?: string;
  size?: number;
  decorative?: boolean;
};

/**
 * Renders the real asset at /public/logo.svg — never a redrawn stand-in.
 */
export function LogoMark({
  className,
  size = 28,
  decorative = true,
}: LogoMarkProps) {
  return (
    <Image
      src="/logo.svg?v=2"
      alt={decorative ? "" : "OakRing Labs"}
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden={decorative || undefined}
      unoptimized
      priority
    />
  );
}
