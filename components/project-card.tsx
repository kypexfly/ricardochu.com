"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useCardSpotlight from "@/hooks/use-card-spotlight";
import type { Project } from "@/types";
import { Icons } from "./icons";
import { AspectRatio } from "./ui/aspect-ratio";
import { buttonVariants } from "./ui/button";

interface ProjectCardProps extends Project {
  showCover?: boolean;
  index?: number;
}

export default function ProjectCard({
  showCover,
  title,
  description,
  article,
  cover,
  demo,
  source,
  tech,
  index,
}: ProjectCardProps) {
  const {
    divRef,
    handleMouseMove,
    handleFocus,
    handleBlur,
    handleMouseEnter,
    handleMouseLeave,
    opacity,
    position,
  } = useCardSpotlight();

  return (
    <Card
      className="relative flex h-full flex-col overflow-hidden rounded-lg border shadow-lg dark:border-slate-800 dark:bg-slate-900/25"
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={divRef}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />
      {showCover && (
        <AspectRatio ratio={1800 / 900}>
          <Image
            alt={`${title} image preview`}
            className="object-cover"
            fill
            priority={Number.isInteger(index) ? (index as number) < 3 : false}
            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 300px"
            src={cover as string} // only load the first 3 images as priority for mobile/desktop
          />
        </AspectRatio>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <ul className="flex w-full flex-wrap gap-2 text-[0.75rem]">
          {tech?.map((item) => (
            <li
              className="rounded bg-slate-100 px-2 dark:bg-slate-800"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </CardHeader>
      <CardFooter className="mt-auto flex flex-wrap gap-6 py-2 [&>a]:px-0 [&_.icon]:ml-1">
        {article && (
          <Link
            className={buttonVariants({ variant: "link", size: "sm" })}
            href={article}
          >
            Article
          </Link>
        )}
        {source && (
          <a
            className={buttonVariants({ variant: "link", size: "sm" })}
            href={source}
            rel="noopener noreferrer"
            target="_blank"
          >
            Source <Icons.extlink size={18} />
          </a>
        )}
        {demo && (
          <a
            className={buttonVariants({ variant: "link", size: "sm" })}
            href={demo}
            rel="noopener noreferrer"
            target="_blank"
          >
            Demo <Icons.extlink size={18} />
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
