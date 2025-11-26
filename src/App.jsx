import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import Applayout from './Applayout/Applayout';
import { ContactCard } from "./components/ContactCard";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import jsonData from "./Data/pune_emergency_contacts.json";
import './App.css';

function isAuthenticated() {
  return !!localStorage.getItem("loggedInUser");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: isAuthenticated() ? <Navigate to="/Home" replace /> : <Navigate to="/Login" replace />,
  },
  {
    path: "/Home",
    element: isAuthenticated() ? <Applayout /> : <Navigate to="/Login" replace />,
    children: [
      { index: true, element: <Home /> },
      { path: "ContactCard", element: <ContactCard data={jsonData} /> },
      { path: "AboutUs", element: <AboutUs /> },
    ],
  },
  {
    path: "/SignUp",
    element: isAuthenticated() ? <Navigate to="/Home" replace /> : <SignUp />,
  },
  {
    path: "/Login",
    element: isAuthenticated() ? <Navigate to="/Home" replace /> : <Login />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

