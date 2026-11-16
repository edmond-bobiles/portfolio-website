import { portfolio } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-page border-t border-line px-6 py-8">
      <p className="font-mono text-[0.8rem] text-muted">© 2026 {portfolio.name}</p>
    </footer>
  );
}