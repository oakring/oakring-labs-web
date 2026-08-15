import Link from "next/link";
import { footer, nav, site } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/LogoMark";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <LogoMark size={32} className="mt-0.5 h-8 w-8" />
          <div>
            <p className="text-sm font-semibold font-body text-foreground">{site.name}</p>
            <p className="mt-1 max-w-sm font-body text-sm text-muted-foreground">
              {site.tagline}
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
      <Container className="mt-8">
        <p className="text-xs text-muted-foreground">{footer.copyright}</p>
      </Container>
    </footer>
  );
}
