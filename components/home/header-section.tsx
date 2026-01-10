"use client";

import { Balancer } from "react-wrap-balancer";
import { Icons } from "../icons";
import { StaggerAnimateInView, fadeInLeft, fadeInRight } from "../stagger-animate";
import { buttonVariants } from "../ui/button";
import { motion } from "framer-motion";
import { socialList } from "@/data";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import Marquee from "react-fast-marquee";
import { SkillIcons } from "../skill-icons";

export function HeaderSection() {
  const CV_URL = process.env.NEXT_PUBLIC_CV_URL ?? "/#";
  return (
    <header className="text-center mt-16 relative overflow-x-hidden container mx-auto py-4 sm:py-8 sm:px-8">
      <StaggerAnimateInView className="max-w-2xl mx-auto container">
        <motion.h1 variants={fadeInLeft} className="text-5xl sm:text-6xl font-bold tracking-tight">
          <span className="text-gradient-flame">Ricardo Chu</span>
        </motion.h1>

        <motion.h2
          variants={fadeInLeft}
          className="block mb-3 leading-relaxed text-2xl font-bold text-gray-800 dark:text-white"
        >
          FullStack Developer
        </motion.h2>

        <p className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          <Balancer>
            I bring ideas to life through code and creativity, crafting modern web applications with
            attention to detail, UX and performance.
          </Balancer>
        </p>

        <div className="flex gap-2 justify-center mt-4">
          <a href="#contact" className={cn(buttonVariants({ variant: "secondary" }))}>
            Contact me
          </a>

          <a
            href={CV_URL}
            className={buttonVariants({ variant: "link" })}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <Icons.extlink className="ml-2" width={18} height={18} />
          </a>

          <motion.ul
            variants={fadeInRight}
            className={clsx(
              "hidden absolute top-0 right-0 space-y-3 h-full px-2 md:flex flex-col items-center",
              "after:w-[1px] after:h-full after:bg-gradient-to-t after:from-transparent after:to-muted-foreground after:mt-3"
            )}
          >
            {socialList.map((s) => (
              <li
                key={s.label}
                className="hover:text-foreground hover:scale-125 transition-all ease-in-out text-muted-foreground"
              >
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${s.label} to a new tab`}
                  className="p-2 block"
                >
                  <s.icon size={22} />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="mt-9" style={{ height: 36 }}>
          <Marquee gradient speed={30} autoFill pauseOnHover>
            {Object.entries(SkillIcons).map((s) => {
              const [name, Icon] = s;
              return <Icon key={name} title={name} className="mx-2 w-9 h-9" />;
            })}
          </Marquee>
        </div>
      </StaggerAnimateInView>
    </header>
  );
}
