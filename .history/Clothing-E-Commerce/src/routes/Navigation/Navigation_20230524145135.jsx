import React from "react";

import { Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div>I am a Navigation</div>
      <Outlet />
    </div>
  );
}

export default Navigation;
