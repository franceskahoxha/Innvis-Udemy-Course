import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Navigation() {
  return (
    <Fragment>
      <div>I am a Navigation</div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
