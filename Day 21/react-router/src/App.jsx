import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import Errorpage from "./components/Errorpage";
import Home from "./components/Home";
import Portlio, { Portfolioloader } from "./components/Portfolio";
import User from "./components/User";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" Component={Layout} errorElement={<Errorpage />}>
        <Route index Component={Home} />
        <Route path="about" Component={About} />
        <Route path="contact" Component={Contact} />
        <Route path="portfolio" loader={Portfolioloader} Component={Portlio} />
        <Route path="user/" Component={User} />
        <Route path="user/:username" Component={User} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
