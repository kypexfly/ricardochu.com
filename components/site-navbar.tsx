"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { Icons } from "./icons";
import { NavLink } from "./navlink";
import { ThemeToggler } from "./theme-toggle";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

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
      className="border-b-slate-300/20 border-b dark:border-b-slate-700/20 bg-slate-100/30 dark:bg-slate-900/30 backdrop-blur-md sticky top-0 z-10"
      variants={{
        visible: {
          y: 0,
        },
        hidden: {
          y: "-100%",
        },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 sm:py-2 sm:px-2">
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
              className="bg-transparent p-1 h-auto"
            >
              <Icons.close
                className="absolute transition duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:scale-100 scale-0"
                size={20}
              />
              <Icons.menu
                className="transition duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:scale-0 scale-100"
                size={20}
              />
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <nav className="w-full fixed flex flex-col left-0 top-[61px] bg-background h-screen py-16 text-center">
                {routes.map((route) => (
                  <Link
                    href={route.path}
                    key={route.path}
                    className="flex p-2"
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
    <div className="hidden sm:flex flex-row justify-between">
      <nav className="border border-border/50 rounded-xl px-4 py-2 bg-background/50">
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
