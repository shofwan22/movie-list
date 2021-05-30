import { Anagram, Home } from "pages"

const appRoutes = [
  {
    name: "Anagram",
    component: Anagram,
    exact: true,
    path: "/anagram",
  },
  {
    name: "Home",
    component: Home,
    exact: true,
    path: "/",
  },
];

export default appRoutes