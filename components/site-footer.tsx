import { socialList } from "@/data";

export function Footer() {
  return (
    <footer className="border-t border-t-slate-300/25 bg-slate-100/25 px-2 py-8 dark:border-t-slate-700/25 dark:bg-slate-900/25">
      <div className="container mx-auto flex w-full flex-col text-center">
        <div>
          <ul className="flex h-full justify-center gap-3 md:hidden">
            {socialList.map((s) => (
              <li
                className="text-muted-foreground hover:text-violet-500"
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
            <li className="h-full w-px bg-muted-foreground" />
          </ul>
        </div>
        <p className="text-muted-foreground text-sm">
          Ricardo Chu • Ecuador • 2026
        </p>
      </div>
    </footer>
  );
}
