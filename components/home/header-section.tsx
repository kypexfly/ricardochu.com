"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Balancer } from "react-wrap-balancer";
import { socialList } from "@/data";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { SkillIcons } from "../skill-icons";
import {
  fadeInLeft,
  fadeInRight,
  StaggerAnimateInView,
} from "../stagger-animate";
import { buttonVariants } from "../ui/button";

export function HeaderSection() {
  const CV_URL = process.env.NEXT_PUBLIC_CV_URL ?? "/#";
  return (
    <header className="container relative mx-auto mt-16 overflow-x-hidden py-4 text-center sm:px-8 sm:py-8">
      <StaggerAnimateInView className="container mx-auto max-w-2xl">
        <motion.h1
          className="font-bold text-5xl tracking-tight sm:text-6xl"
          variants={fadeInLeft}
        >
          <span className="text-gradient-flame">Ricardo Chu</span>
        </motion.h1>

        <motion.h2
          className="mb-3 block font-bold text-2xl text-gray-800 leading-relaxed dark:text-white"
          variants={fadeInLeft}
        >
          FullStack Developer
        </motion.h2>

        <p className="mb-3 text-gray-700 text-sm leading-relaxed md:text-base dark:text-gray-300">
          <Balancer>
            I bring ideas to life through code and creativity, crafting modern
            web applications with attention to detail, UX and performance.
          </Balancer>
        </p>

        <div className="mt-4 flex justify-center gap-2">
          <a
            className={cn(buttonVariants({ variant: "secondary" }))}
            href="#contact"
          >
            Contact me
          </a>

          <a
            className={buttonVariants({ variant: "link" })}
            href={CV_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
            <Icons.extlink className="ml-2" height={18} width={18} />
          </a>

          <motion.ul
            className={clsx(
              "absolute top-0 right-0 hidden h-full flex-col items-center space-y-3 px-2 md:flex",
              "after:mt-3 after:h-full after:w-[1px] after:bg-gradient-to-t after:from-transparent after:to-muted-foreground"
            )}
            variants={fadeInRight}
          >
            {socialList.map((s) => (
              <li
                className="text-muted-foreground transition-all ease-in-out hover:scale-125 hover:text-foreground"
                key={s.label}
              >
                <a
                  aria-label={`Open ${s.label} to a new tab`}
                  className="block p-2"
                  href={s.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <s.icon size={22} />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="mt-9" style={{ height: 36 }}>
          <Marquee autoFill gradient pauseOnHover speed={30}>
            {Object.entries(SkillIcons).map((s) => {
              const [name, Icon] = s;
              return <Icon className="mx-2 h-9 w-9" key={name} title={name} />;
            })}
          </Marquee>
        </div>
      </StaggerAnimateInView>
    </header>
  );
}
