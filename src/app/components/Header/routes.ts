type Route = {
  name: string;
  path: string;
  enabled: boolean;
};

export const routes: Route[] = [
  {
    name: "about",
    path: "/about",
    enabled: true,
  },
  {
    name: "courses",
    path: "/courses",
    enabled: false,
  },
  {
    name: "blog",
    path: "/blog",
    enabled: false,
  },
  {
    name: "templates",
    path: "/templates",
    enabled: false,
  },
  {
    name: "work",
    path: "/work",
    enabled: true,
  },
  {
    name: "contact",
    path: "/contact",
    enabled: true,
  },
];
