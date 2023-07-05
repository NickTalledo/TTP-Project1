import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Review, {
  loader as movieidLoader,
  action as reviewAction,
} from "./components/Review.jsx";
import Movies, { loader as movieLoader } from "./components/Movies.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import EditMovie, {
  loader as editMovieLoader,
  action as editMovieAction,
} from "./components/EditMovie.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/movies",
        element: <Movies />,
        loader: movieLoader,
      },
    ],
  },
  {
    path: "/movies/review/:id",
    element: <Review />,
    loader: movieidLoader,
    action: reviewAction,
    children: [
      {
        path: "movies/:id/edit",
        element: <EditMovie />,
        loader: editMovieLoader,
        action: editMovieAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
