import { portfolio } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-page border-t border-line px-6 py-8 text-[0.9rem] text-muted">
      <p>© 2026 {portfolio.name}</p>
    </footer>
  );
}