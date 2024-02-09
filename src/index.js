import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import PostDetail from "./Pages/PostDetail";
import Login from "./Pages/Login";
import UserProfile from "./Pages/Userprofile";
import CreatePost from "./Pages/CreatePost";
import Authors from "./Pages/Authors";
import CategoryPosts from "./Pages/CategoryPosts";
import AuthorPosts from "./Pages/AuthorPosts";
import Dashboard from "./Pages/Dashboard";
import EditPost from "./Pages/EditPost";
import Logout from "./Pages/Logout";
import Error from "./Pages/Error.jsx";
import DeletePost from "./Pages/DeletePost.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,

    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "authors", element: <Authors /> },
      { path: "create", element: <CreatePost /> },
      { path: "posts/categories/:category", element: <CategoryPosts /> },
      { path: "posts/users/:id", element: <AuthorPosts /> },
      { path: "myposts/:id", element: <Dashboard /> },
      { path: "posts/:id/edit", element: <EditPost /> },
      { path: "posts/:id/delete", element: <DeletePost /> },

      { path: "logout", element: <Logout /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

