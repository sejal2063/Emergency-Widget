// App.jsx
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Applayout from "./Applayout/Applayout";
import ContactCard from "./components/ContactCard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import jsonData from "./Data/pune_emergency_contacts.json";
import "./App.css";

// Runtime guards that access localStorage inside component render
const RootWrapper = () => {
  const isAuth = typeof window !== "undefined" && !!localStorage.getItem("loggedInUser");
  return isAuth ? <Applayout /> : <Navigate to="/Login" replace />;
};

const LoginGuard = () => {
  const isAuth = typeof window !== "undefined" && !!localStorage.getItem("loggedInUser");
  return isAuth ? <Navigate to="/" replace /> : <Login />;
};

const SignUpGuard = () => {
  const isAuth = typeof window !== "undefined" && !!localStorage.getItem("loggedInUser");
  return isAuth ? <Navigate to="/" replace /> : <SignUp />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootWrapper />,
    children: [
      { index: true, element: <Home /> },
      { path: "ContactCard", element: <ContactCard data={jsonData} /> },
      { path: "AboutUs", element: <AboutUs /> },
    ],
  },
  {
    path: "/Login",
    element: <LoginGuard />,
  },
  {
    path: "/SignUp",
    element: <SignUpGuard />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
