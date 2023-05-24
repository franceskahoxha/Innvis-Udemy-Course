import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

function Navigation() {
  return (
    <Fragment>
      {/* is a component that renders to nothing in the browser*/}
      <div className="navigation">
        <div>Logo</div>
        <div className="nav-links-container">
          <Link className="nav-link"></Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
