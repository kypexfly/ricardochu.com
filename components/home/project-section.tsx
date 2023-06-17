import { projectList } from "@/lib/constants";
import Link from "next/link";
import ProjectCard from "../project-card";
import { Section } from "../section";
import { buttonVariants } from "../ui/button";

export function ProjectSection() {
  return (
    <Section>
      <h2 className="mb-6 leading-relaxed text-2xl font-bold flex justify-between">
        <span>Projects</span>
        <Link className={buttonVariants({ variant: "outline" })} href="/projects">
          View all
        </Link>
      </h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectList
          .filter((p) => p.highlight)
          .slice(0, 7)
          .map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
      </div>
    </Section>
  );
}