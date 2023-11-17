import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import App from "./App";
import PageMovie from "./pages/PageMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/films?limit=8`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },

  {
    path: "/films/:id",
    element: <PageMovie />,
    loader: ({ params }) => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/films/${params.id}`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
