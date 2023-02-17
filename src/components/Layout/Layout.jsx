import React from "react";
import { Link, Outlet } from "react-router-dom";

import Header from "../Header/Header";

import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <div>
        <Link draggable={"false"} to="/" className={classes.link}>
          <Header />
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
