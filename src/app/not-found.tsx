import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-16">
      <h1 className="mb-3 text-[2.5rem] leading-[1.2] font-bold">Page not found</h1>
      <p className="mb-6 max-w-[65ch] text-muted">
        We couldn&apos;t find the page or project you were looking for.
      </p>
      <Link href="/projects" className="font-semibold text-accent hover:underline">
        ← Back to all projects
      </Link>
    </section>
  );
}