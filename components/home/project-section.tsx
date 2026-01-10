import { projectList } from "@/data";
import Link from "next/link";
import ProjectCard from "../project-card";
import { Section } from "../section";
import { StaggerAnimateInView, fadeInLeft } from "../stagger-animate";
import { buttonVariants } from "../ui/button";

export function ProjectSection() {
  return (
    <Section className="container mx-auto">
      <h2 className="mb-6 leading-relaxed text-2xl font-bold flex justify-between">
        <span>Projects</span>
        <Link className={buttonVariants({ variant: "secondary" })} href="/projects">
          View all
        </Link>
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectList
          .filter((p) => p.highlight)
          .slice(0, 6)
          .map((project, i) => (
            <StaggerAnimateInView key={project.title} variants={fadeInLeft}>
              <ProjectCard {...project} index={i} />
            </StaggerAnimateInView>
          ))}
      </div>
    </Section>
  );
}
