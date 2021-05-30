import { Anagram, Home, Detail } from "pages"

const appRoutes = [
  {
    name: "Anagram",
    component: Anagram,
    exact: true,
    path: "/anagram",
  },
  {
    name: "Detail",
    component: Detail,
    exact: true,
    path: "/detail/:title",
  },
  {
    name: "Home",
    component: Home,
    exact: true,
    path: "/",
  },
];

export default appRoutes