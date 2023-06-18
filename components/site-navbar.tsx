"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { socialList } from "@/data";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { Download, Menu2 } from "tabler-icons-react";
import { NavLink } from "./navlink";
import { buttonVariants } from "./ui/button";

export function Navbar() {
  return (
    <header className="bg-slate-900/50 backdrop-blur-md px-2 py-4 sticky top-0 z-10 border-b dark:border-b-slate-700/25">
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
}

function MobileMenu() {
  return (
    <div className="sm:hidden container">
      <NavigationMenu className="justify-start">
        <NavigationMenuList className="space-x-0">
          <NavigationMenuItem className="flex items-center">
            <NavigationMenuTrigger className="bg-transparent p-1 h-auto">
              <Menu2 size={20} />
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid grid-cols-1 w-[300px] gap-3 p-2 md:w-[500px] lg:w-[600px] ">
                {routes.map((route) => (
                  <li key={route.path} className="flex p-2 border-b">
                    <Link href={route.path} legacyBehavior passHref>
                      <NavigationMenuLink className="flex-1">{route.name}</NavigationMenuLink>
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="/cv.pdf" className="flex-1 p-2" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </li>
                <li className="flex justify-between gap-3">
                  {socialList.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      className={buttonVariants({ variant: "secondary" })}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <s.icon size={22} />
                    </a>
                  ))}
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function DesktopMenu() {
  return (
    <div className="hidden sm:flex container w-full flex-row justify-between">
      <nav>
        <ul className="flex gap-4 [&_a]:font-bold [&_a]:text-sm">
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink href={route.path}>{route.name}</NavLink>
            </li>
          ))}
          <li>
            <a href="/cv.pdf" className="text-muted-foreground px-2 py-2" target="_blank" rel="noopener noreferrer">
              Cv
              <Download className="inline-block ml-1" size={18} />{" "}
            </a>
          </li>
        </ul>
      </nav>
      <ul className="flex gap-3 items-center">
        {socialList.map((s) => (
          <li key={s.label} className="hover:text-blue-600 text-muted-foreground">
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              <s.icon size={22} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
