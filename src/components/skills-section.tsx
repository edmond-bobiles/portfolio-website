import { Reveal } from "@/components/reveal";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <h2 className="mb-10 text-[2rem] leading-[1.2] font-bold">Skills</h2>

      <div className="flex flex-col gap-10">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 100}>
            <h3 className="mb-4 font-mono text-[0.8rem] font-normal text-muted">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {category.skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-2.5 rounded-xl border border-line px-4 py-3 text-[0.95rem] font-medium transition duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white"
                >
                  <Icon aria-hidden="true" className="h-[1.1rem] w-[1.1rem] shrink-0" />
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}