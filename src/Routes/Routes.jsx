import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/Login/Login";
import SingUp from "../components/SingUp/SingUp";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructor/Instructor";
import Dashboard from "../Layout/Dashboard";

import AdminRoute from "../Routes/AdminRoute";
import ManageClasses from "../Pages/Dashboard/ManageClasses";

import AddClasses from "../pages/Dashboard/AddClasses";
import SelectedClass from "../pages/Dashboard/SelectedClass";
import EnrolledClass from "../pages/Dashboard/EnrolledClass";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";

import ManageUsers from "../Pages/Dashboard/ManegeUsers";
import MyClass from "../Pages/Dashboard/MyClass";
import UpdateClass from "../Pages/Dashboard/UpdateClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>,
        loader: () => fetch(" http://localhost:5000/instructor"),
      },
      {
        path: "classes",
        element: <Classes></Classes>,
        loader: () => fetch(" http://localhost:5000/approved"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "singup",
        element: <SingUp></SingUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <ManageUsers />,
          </AdminRoute>
        ),
      },

      {
        path: "manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
        loader: () => fetch(" http://localhost:5000/classes"),
      },
      {
        path: "myclass",
        element: (
          <InstructorRoute>
            <MyClass />,
          </InstructorRoute>
        ),
      },
      {
        path: "updateclass",
        element: <UpdateClass></UpdateClass>,
      },
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClasses></AddClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "selectedclass",
        element: (
          <PrivateRoute>
            <SelectedClass></SelectedClass>
          </PrivateRoute>
        ),
      },
      {
        path: "enrolledclass",
        element: (
          <PrivateRoute>
            <EnrolledClass />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
