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
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: `About me | ${siteConfig.title}`,
};

export default function About() {
  return (
    <div className="container mx-auto sm:py-6 sm:px-8">
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
      <h1 className="flex items-center gap-2 text-center sm:text-left mb-6 text-gray-800 dark:text-white text-5xl font-bold tracking-tight">
        <Image
          src="/me.png"
          alt="Ricardo Chu photo"
          className="rounded-full xs:inline-flex xs:mr-3"
          width="96"
          height="96"
        />
        <span>
          <span className="text-gradient-flame">About</span> Me
        </span>
      </h1>
      <p className="max-w-prose mb-8 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
        Hey, I&apos;m Ricardo! 🤗 I love computers, science, math and
        videogames.
      </p>

      <p className="max-w-prose mb-8 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
        I&apos;m a 26-year-old Web Developer. From a young age, I have been
        fascinated by the intricacies of web development, exploring programming
        languages such as Javascript, Python and MATLAB/R for scientific and
        engineering applications.
      </p>
      <p className="max-w-prose mb-8 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
        I have managed graphic design communities for over 5 years. Throughout
        my career, conducted research projects on topics such as the sizing of
        residential photovoltaic systems and analyzing the harmonics of electric
        vehicles in distribution networks. A strong passion for learning and
        always seeking new knowledge and experiences.
      </p>

      <p className="max-w-prose mb-8 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
        You can contact me in any of the following ways: <br />
        <span className="group">
          {socialList.map((s) => (
            <a
              key={s.label}
              href={s.url}
              className={cn(
                buttonVariants({ variant: "link" }),
                "group-hover:opacity-50 hover:!opacity-100 transition-opacity"
              )}
              target="_blank"
              rel="noopener noreferrer"
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
      <h2 className="mb-6 text-gray-800 dark:text-white text-3xl font-bold tracking-tight sm:text-3xl">
        ✨ Skills and Technologies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <ul className="font-normal text-gray-700 dark:text-gray-300 leading-relaxed list-inside list-disc">
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
        <ul className="font-normal text-gray-700 dark:text-gray-300 leading-relaxed list-inside list-disc">
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
        <ul className="font-normal text-gray-700 dark:text-gray-300 leading-relaxed list-inside list-disc">
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
          href="https://art.ricardochu.com/"
          className={cn(
            buttonVariants({ variant: "link" }),
            "p-0 text-base underline"
          )}
          target="_blank"
          rel="noopener noreferrer"
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
      <h2 className="mb-6 text-gray-800 dark:text-white text-3xl font-bold tracking-tight sm:text-3xl">
        🎓 Education
      </h2>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 bg-primary"></div>
          <time className="mb-1 text-sm font-normal leading-none dark:text-gray-400 text-gray-500">
            March 2023 - December 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Backend with Java
          </h3>
          <p className="mb-4 max-w-prose font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
            Globant University
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 bg-primary"></div>
          <time className="mb-1 text-sm font-normal leading-none dark:text-gray-400 text-gray-500">
            November 2017 - January 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Electrical Engineer
          </h3>
          <p className="max-w-prose mb-10 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
            Universidad Técnica Estatal de Quevedo
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 bg-primary"></div>
          <time className="mb-1 text-sm font-normal leading-none dark:text-gray-400 text-gray-500">
            August 2021 - November 2021
          </time>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Web Developer
          </h3>
          <p className="max-w-prose mb-10 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
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
      <h2 className="mb-6 text-gray-800 dark:text-white text-3xl font-bold tracking-tight sm:text-3xl">
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
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://centrosuragraria.com/index.php/revista/article/view/131/304"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more <Icons.extlink className="ml-1" size={18} />
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
