import type { Metadata } from "next";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { socialList } from "@/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `About me | ${siteConfig.title}`,
};

export default function About() {
  return (
    <div className="container mx-auto sm:px-8 sm:py-6">
      <Description />
      <Skills />
      <Education />
      <Articles />
    </div>
  );
}

function Description() {
  return (
    <section className="my-16">
      <h1 className="mb-6 flex items-center gap-2 text-center font-bold text-5xl text-gray-800 tracking-tight sm:text-left dark:text-white">
        <Image
          alt="Ricardo Chu photo"
          className="xs:mr-3 xs:inline-flex rounded-full"
          height="96"
          src="/me.png"
          width="96"
        />
        <span>
          <span className="text-gradient-flame">About</span> Me
        </span>
      </h1>
      <p className="mb-8 max-w-prose font-normal text-gray-700 leading-relaxed dark:text-gray-300">
        Hey, I&apos;m Ricardo! 🤗 I love computers, science, math and
        videogames.
      </p>

      <p className="mb-8 max-w-prose font-normal text-gray-700 leading-relaxed dark:text-gray-300">
        I&apos;m a 26-year-old Web Developer. From a young age, I have been
        fascinated by the intricacies of web development, exploring programming
        languages such as Javascript, Python and MATLAB/R for scientific and
        engineering applications.
      </p>
      <p className="mb-8 max-w-prose font-normal text-gray-700 leading-relaxed dark:text-gray-300">
        I have managed graphic design communities for over 5 years. Throughout
        my career, conducted research projects on topics such as the sizing of
        residential photovoltaic systems and analyzing the harmonics of electric
        vehicles in distribution networks. A strong passion for learning and
        always seeking new knowledge and experiences.
      </p>

      <p className="mb-8 max-w-prose font-normal text-gray-700 leading-relaxed dark:text-gray-300">
        You can contact me in any of the following ways: <br />
        <span className="group">
          {socialList.map((s) => (
            <a
              className={cn(
                buttonVariants({ variant: "link" }),
                "hover:!opacity-100 transition-opacity group-hover:opacity-50"
              )}
              href={s.url}
              key={s.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              <s.icon className="mr-2" /> {s.label}
            </a>
          ))}
        </span>
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section className="my-16">
      <h2 className="mb-6 font-bold text-3xl text-gray-800 tracking-tight sm:text-3xl dark:text-white">
        ✨ Skills and Technologies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <ul className="list-inside list-disc font-normal text-gray-700 leading-relaxed dark:text-gray-300">
          <li>Typescript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>a11y</li>
          <li>i18n</li>
          <li>GraphQL</li>
        </ul>
        <ul className="list-inside list-disc font-normal text-gray-700 leading-relaxed dark:text-gray-300">
          <li>Zustand</li>
          <li>React Query</li>
          <li>Redux Toolkit</li>
          <li>MaterialUI</li>
          <li>TailwindCSS</li>
          <li>Git & Github</li>
          <li>Framer Motion</li>
          <li>JWT Auth</li>
          <li>React Hook Form</li>
        </ul>
        <ul className="list-inside list-disc font-normal text-gray-700 leading-relaxed dark:text-gray-300">
          <li>Jest</li>
          <li>Vitest</li>
          <li>ESLint, Prettier</li>
          <li>Docker</li>
          <li>Docker Compose</li>
          <li>Javascript</li>
          <li>Python, Java</li>
          <li>Prisma</li>
          <li>Strapi</li>
        </ul>
      </div>

      <p className="mt-6">
        I&apos;m also a graphic artist,{" "}
        <a
          className={cn(
            buttonVariants({ variant: "link" }),
            "p-0 text-base underline"
          )}
          href="https://art.ricardochu.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          take a look
        </a>{" "}
        at my work!
      </p>
    </section>
  );
}

function Education() {
  return (
    <section className="my-16">
      <h2 className="mb-6 font-bold text-3xl text-gray-800 tracking-tight sm:text-3xl dark:text-white">
        🎓 Education
      </h2>
      <ol className="relative border-gray-200 border-l dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-200 bg-primary" />
          <time className="mb-1 font-normal text-gray-500 text-sm leading-none dark:text-gray-400">
            March 2023 - December 2023
          </time>
          <h3 className="font-semibold text-gray-800 text-lg dark:text-white">
            Backend with Java
          </h3>
          <p className="mb-4 max-w-prose font-normal text-gray-700 leading-relaxed dark:text-gray-300">
            Globant University
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-200 bg-primary" />
          <time className="mb-1 font-normal text-gray-500 text-sm leading-none dark:text-gray-400">
            November 2017 - January 2023
          </time>
          <h3 className="font-semibold text-gray-800 text-lg dark:text-white">
            Electrical Engineer
          </h3>
          <p className="mb-10 max-w-prose font-normal text-gray-700 leading-relaxed dark:text-gray-300">
            Universidad Técnica Estatal de Quevedo
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-gray-200 bg-primary" />
          <time className="mb-1 font-normal text-gray-500 text-sm leading-none dark:text-gray-400">
            August 2021 - November 2021
          </time>
          <h3 className="font-semibold text-gray-800 text-lg dark:text-white">
            Web Developer
          </h3>
          <p className="mb-10 max-w-prose font-normal text-gray-700 leading-relaxed dark:text-gray-300">
            ZTM Academy
          </p>
        </li>
      </ol>
    </section>
  );
}

function Articles() {
  return (
    <section className="my-16">
      <h2 className="mb-6 font-bold text-3xl text-gray-800 tracking-tight sm:text-3xl dark:text-white">
        📃 Articles
      </h2>

      <Card>
        <CardHeader>
          <CardTitle>
            Sizing of a Photovoltaic System in the City of Quevedo for
            Residential Use
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <CardDescription>
            The sizing of a small photovoltaic system of a residence in the city
            of Quevedo is presented, with the objective of analyzing solar
            photovoltaic installations as a measure to promote the use of
            distributed generation in homes and the reduction of costs to be
            paid for electricity consumption.
          </CardDescription>
          <Button asChild size="sm" variant="outline">
            <a
              href="https://centrosuragraria.com/index.php/revista/article/view/131/304"
              rel="noopener noreferrer"
              target="_blank"
            >
              Read more <Icons.extlink className="ml-1" size={18} />
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
