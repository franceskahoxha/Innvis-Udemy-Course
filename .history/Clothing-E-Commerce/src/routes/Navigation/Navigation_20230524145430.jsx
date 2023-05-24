import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Navigation() {
  return (
    {/* is a component that renders to nothing in the browser*/}
    <Fragment>
      
      <div>I am a Navigation</div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
