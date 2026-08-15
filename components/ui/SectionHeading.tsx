import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-prose",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-display text-sm font-semibold tracking-[0.08em] text-muted-foreground uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display text-heading-lg font-semibold tracking-tight text-foreground"
      >
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
          {lead}
        </p>
      ) : null}
    </header>
  );
}
