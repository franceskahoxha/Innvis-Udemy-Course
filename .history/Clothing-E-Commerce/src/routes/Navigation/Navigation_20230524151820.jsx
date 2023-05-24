import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownSvg } from "../../assets/crown.svg";

function Navigation() {
  return (
    <Fragment>
      {/* is a component that renders to nothing in the browser*/}
      <div className="navigation">
        <Link className="logo-container" to="/">
          {CrownSvg}
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
