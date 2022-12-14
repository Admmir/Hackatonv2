import SignIn from "./components/LogIn";
import "./App.css";
import PersistentDrawerLeft from "../src/components/NavBar";
import React, { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeAdmin from "./components/HomeAdmin";
import { useSelector } from "react-redux";

let router;

function App() {
  const isLogged = useSelector((state) => state.userData.user);
  const isAuthentificated = useSelector(
    (state) => state.userData.authentificated
  );
  if (isLogged === "admin" && isAuthentificated) {
    router = createBrowserRouter([
      {
        path: "/",
        element: <SignIn></SignIn>,
      },
      {
        path: "/novosti",
        element: <HomeAdmin />,
      },
      {
        path: "/admin/createUser",
        element: (
          <Fragment>
            <PersistentDrawerLeft />
          </Fragment>
        ),
      },
      {
        path: "/admin/userList",
        element: (
          <Fragment>
            <PersistentDrawerLeft></PersistentDrawerLeft>
          </Fragment>
        ),
      },
      {
        path: "/admin/teacherList",
        element: (
          <Fragment>
            <PersistentDrawerLeft></PersistentDrawerLeft>
          </Fragment>
        ),
      },
      {
        path: "/admin/createTeacher",
        element: (
          <Fragment>
            <PersistentDrawerLeft></PersistentDrawerLeft>
          </Fragment>
        ),
      },
      {
        path: "/admin/pomoc",
        element: (
          <Fragment>
            <PersistentDrawerLeft></PersistentDrawerLeft>
          </Fragment>
        ),
      },
      {
        path: "/admin/kreirajNovost",
        element: (
          <Fragment>
            <PersistentDrawerLeft></PersistentDrawerLeft>
          </Fragment>
        ),
      },
      {
        path: "/admin/napraviRaspored",
        element: (
          <Fragment>
            <PersistentDrawerLeft></PersistentDrawerLeft>
          </Fragment>
        ),
      },
      {
        path: "/raspored",
        element: (
          <Fragment>
            <PersistentDrawerLeft></PersistentDrawerLeft>
          </Fragment>
        ),
      },
      {
        path: "/admin/noviPredmet",
        element: (
          <Fragment>
            <PersistentDrawerLeft></PersistentDrawerLeft>
          </Fragment>
        ),
      },
    ]);
  } else if (isLogged === "ucenik" && isAuthentificated) {
    router = createBrowserRouter([
      {
        path: "/ucenik",
        element: <PersistentDrawerLeft></PersistentDrawerLeft>,
      },
      {
        path: "/novosti",
        element: <PersistentDrawerLeft></PersistentDrawerLeft>,
      },
      {
        path: "/raspored",
        element: (
          <Fragment>
            <PersistentDrawerLeft></PersistentDrawerLeft>
          </Fragment>
        ),
      },
      {
        path: "/profile",
        element: <PersistentDrawerLeft></PersistentDrawerLeft>,
      }
    ]);
  } else {
    router = createBrowserRouter([
      {
        path: "/",
        element: <SignIn></SignIn>,
      },
      {
        path: "*",
        element: <SignIn></SignIn>,
      },
    ]);
  }

  return (
    <RouterProvider router={router}>
      <Fragment>
        <div className="divContainer"></div>
      </Fragment>
    </RouterProvider>
  );
}

export default App;
