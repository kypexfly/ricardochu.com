"use client";

import { Balancer } from "react-wrap-balancer";
import { Icons } from "../icons";
import { StaggerAnimateInView, fadeInLeft, fadeInRight } from "../stagger-animate";
import { buttonVariants } from "../ui/button";
import { motion } from "framer-motion";
import { socialList } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeaderSection() {
  return (
    <header className="text-center mt-16 relative overflow-x-hidden container px-2 py-4 sm:py-8 sm:px-8">
      <StaggerAnimateInView className="max-w-2xl mx-auto container" viewport={{ amount: 0.5 }}>
        <motion.h1 variants={fadeInLeft} className="text-5xl sm:text-6xl font-bold tracking-tight">
          <span className="text-gradient-flame">Ricardo Chu</span>
        </motion.h1>

        <motion.h2
          variants={fadeInLeft}
          className="block mb-3 leading-relaxed text-2xl font-bold text-gray-800 dark:text-white"
        >
          FullStack Developer
        </motion.h2>

        <h3 className="mb-3 md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <Balancer>
            I have over 2 years of experience in web development, where I have worked extensively
            with React, Typescript, and Node.js, among other technologies. Attention to detail, UX
            and performance.
          </Balancer>
        </h3>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-8 mx-auto"
          src="https://skillicons.dev/icons?i=js,ts,react,nextjs,postgres,mongodb,nodejs,tailwind"
          alt="JavaScript, TypeScript, React.js, Next.js, PostgreSQL, MongoDB, Node.js, TailwindCSS"
          title="JavaScript, TypeScript, React.js, Next.js, PostgreSQL, MongoDB, Node.js, TailwindCSS"
        />

        <div className="flex gap-2 justify-center mt-12">
          <a
            href="#contact"
            className={cn(buttonVariants({ variant: "secondary" }), "flex md:hidden")}
          >
            Contact me
          </a>

          <a
            href="https://drive.google.com/file/d/1QUC9P8ZYpSCGvAPiYXM_bRs5Bx5W_LCJ/view?usp=sharing"
            className={buttonVariants()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <Icons.extlink className="ml-2" width={18} height={18} />
          </a>

          <motion.ul
            variants={fadeInRight}
            className="hidden absolute top-0 right-0 space-y-3 h-full px-2 md:flex flex-col items-center"
          >
            {socialList.map((s) => (
              <li key={s.label} className="hover:text-violet-500 text-muted-foreground">
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
            <div className="w-[1px] h-full bg-gradient-to-t from-transparent to-muted-foreground" />
          </motion.ul>
        </div>
      </StaggerAnimateInView>
    </header>
  );
}
