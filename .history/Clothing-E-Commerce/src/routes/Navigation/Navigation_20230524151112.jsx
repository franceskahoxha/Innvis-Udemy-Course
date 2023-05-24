import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Navigation() {
  return (
    <Fragment>
      {/* is a component that renders to nothing in the browser*/}
      <div className="navigation">
        <h1>I am a Navigation</h1>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
