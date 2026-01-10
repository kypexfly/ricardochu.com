"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { routes } from "@/lib/routes";
import { Icons } from "./icons";
import { NavLink } from "./navlink";
import { ThemeToggler } from "./theme-toggle";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      animate={hidden ? "hidden" : "visible"}
      className="sticky top-0 z-10 border-b border-b-slate-300/20 bg-slate-100/30 backdrop-blur-md dark:border-b-slate-700/20 dark:bg-slate-900/30"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      variants={{
        visible: {
          y: 0,
        },
        hidden: {
          y: "-100%",
        },
      }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 sm:px-2 sm:py-2">
        <div className="hidden sm:block" />
        <MobileMenu />
        <DesktopMenu />
        <ThemeToggler />
      </div>
      <div />
    </motion.header>
  );
}

function MobileMenu() {
  return (
    <div className="sm:hidden">
      <NavigationMenu className="justify-start">
        <NavigationMenuList className="space-x-0">
          <NavigationMenuItem className="flex items-center">
            <NavigationMenuTrigger
              aria-label="Open navigation menu"
              className="h-auto bg-transparent p-1"
            >
              <Icons.close
                className="absolute scale-0 transition duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:scale-100"
                size={20}
              />
              <Icons.menu
                className="scale-100 transition duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:scale-0"
                size={20}
              />
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <nav className="fixed top-[61px] left-0 flex h-screen w-full flex-col bg-background py-16 text-center">
                {routes.map((route) => (
                  <Link
                    className="flex p-2"
                    href={route.path}
                    key={route.path}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink className="p-5 font-bold text-3xl">
                      {route.name}
                    </NavigationMenuLink>
                  </Link>
                ))}
              </nav>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function DesktopMenu() {
  return (
    <div className="hidden flex-row justify-between sm:flex">
      <nav className="rounded-xl border border-border/50 bg-background/50 px-4 py-2">
        <ul className="flex gap-6 [&_a]:font-bold [&_a]:text-sm">
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink href={route.path}>{route.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
