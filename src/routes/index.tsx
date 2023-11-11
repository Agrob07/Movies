import Home from "../pages/home/Home"

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  { path: "*", element: <>Error 404</> },
]
