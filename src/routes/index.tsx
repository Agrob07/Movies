import Home from "../pages/home/Home"

export const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "messages",
      },
    ],
  },
  { path: "team", element: <></> },
  { path: "*", element: <>Error 404</> },
]
