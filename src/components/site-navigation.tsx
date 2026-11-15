"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export function SiteNavigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [sectionId, setSectionId] = useState("home");

  useEffect(() => {
    if (!isHome) return;

    const elements = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }
        const current = links.find((link) => visible.has(link.id));
        if (current) setSectionId(current.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    elements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) setSectionId("contact");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHome]);

  const onProjectRoute = pathname === "/projects" || pathname.startsWith("/projects/");
  const activeId = onProjectRoute ? "projects" : isHome ? sectionId : null;

  return (
    <nav aria-label="Main">
      <ul className="flex flex-wrap gap-x-6 gap-y-1">
        {links.map((link) => {
          const isActive = link.id === activeId;
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                aria-current={isActive ? (isHome ? "location" : "page") : undefined}
                className={`text-[0.95rem] font-medium transition-colors ${
                  isActive ? "text-accent" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

