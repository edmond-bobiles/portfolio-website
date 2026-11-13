import Link from "next/link";
import { SiteNavigation } from "@/components/site-navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-page/94">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <Link
          href="/"
          className="text-[1.05rem] font-bold text-ink"
        >
          Edmond.Dev
        </Link>
        <SiteNavigation />
      </div>
    </header>
  );
}
