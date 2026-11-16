import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolio } from "@/data/portfolio";

type ContactLink = {
  label: string;
  href: string;
  icon: IconType;
  external: boolean;
};

export function ContactLinks() {
  const { email, github, linkedin } = portfolio.contact;

  const links: ContactLink[] = [
    { label: "Email", href: `mailto:${email}`, icon: FaEnvelope, external: false },
    { label: "GitHub", href: github, icon: FaGithub, external: true },
    { label: "LinkedIn", href: linkedin, icon: FaLinkedin, external: true },
  ];

  return (
    <ul className="flex flex-wrap gap-3">
      {links.map(({ label, href, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex items-center gap-2.5 rounded-xl border border-line px-4 py-3 text-[0.95rem] font-medium transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-white"
          >
            <Icon aria-hidden="true" className="h-[1.1rem] w-[1.1rem] shrink-0" />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}