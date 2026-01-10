import type { Metadata } from "next";
import { Balancer } from "react-wrap-balancer";
import ProjectCard from "@/components/project-card";
import { siteConfig } from "@/config/site";
import { projectList } from "@/data";

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.title}`,
};

export default function Projects() {
  return (
    <>
      <section className="container mx-auto my-16 sm:px-8 sm:py-6">
        <h1 className="sr-only">Projects</h1>

        <header className="my-8 text-center sm:text-left">
          <h2 className="mb-6 font-bold text-5xl text-gray-800 tracking-tight dark:text-white">
            <span className="text-gradient-flame">Featured</span> Projects
          </h2>
          <p className="mb-10 max-w-prose font-normal text-gray-700 leading-relaxed dark:text-gray-300">
            <Balancer>
              Projects to showcase my experience in web development, utilizing
              frameworks and best practices to deliver scalable and responsive
              solutions.
            </Balancer>
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectList
            .filter((p) => p.highlight)
            .map((project, index) => (
              <ProjectCard
                index={index}
                key={project.title}
                showCover
                {...project}
              />
            ))}
        </div>
      </section>

      <section className="container mx-auto my-16">
        <header className="my-8 text-center sm:text-left">
          <h2 className="mb-6 font-bold text-3xl text-gray-800 tracking-tight sm:text-3xl dark:text-white">
            Other Projects
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectList
            .filter((p) => !p.highlight)
            .map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
        </div>
      </section>
    </>
  );
}
