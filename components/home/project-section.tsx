import Link from "next/link";
import { projectList } from "@/data";
import ProjectCard from "../project-card";
import { Section } from "../section";
import { fadeInLeft, StaggerAnimateInView } from "../stagger-animate";
import { buttonVariants } from "../ui/button";

export function ProjectSection() {
  return (
    <Section className="container mx-auto">
      <h2 className="mb-6 flex justify-between font-bold text-2xl leading-relaxed">
        <span>Projects</span>
        <Link
          className={buttonVariants({ variant: "secondary" })}
          href="/projects"
        >
          View all
        </Link>
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
