"use client";

import { useTheme } from "next-themes";
import { Icons } from "./icons";

export function ThemeToggler() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () =>
    currentTheme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <button
      aria-label="Toggle theme"
      className="flex justify-center px-2 text-muted-foreground"
      onClick={toggleTheme}
      type="button"
    >
      <Icons.sun
        className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        size={22}
      />
      <Icons.moon
        className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        size={22}
      />
    </button>
  );
}
