import { Icon } from "tabler-icons-react";

export interface Social {
  label: string;
  url: string;
  icon: Icon;
}

export interface Route {
  path: string;
  name: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  logo: string;
}

export interface Project {
  title: string;
  description: string;
  date: string;
  source?: string;
  cover?: string;
  demo?: string;
  article?: string;
  tech?: string[];
  highlight?: boolean;
}

// export type Post = {
//   title: string;
//   description: string;
//   date: string;
//   src: string;
// };
