import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Contact from "./Pages/Contact.jsx";
import Services from "./Pages/Services.jsx";
import SingleBlog from "./components/SingleBlog.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogs/${params.id}}`),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
