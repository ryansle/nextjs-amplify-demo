export const routes = [
  {
    path: "/",
    title: "Dashboard",
    isProtectedRoute: false,
  },
  {
    path: "/dynamic-routes",
    title: "Dynamic Routes",
    isProtectedRoute: false,
  },
  {
    path: "/protected-routes",
    title: "Protected Routes",
    isProtectedRoute: true,
  },
];

// {
//   path: "the page it should render",
//   title: "the page title",
//   isProtectedRoute: should this route render when a user isn't logged in?,
// },