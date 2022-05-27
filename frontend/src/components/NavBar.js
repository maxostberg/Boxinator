import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to={"/addBox"}>Add a box</Link>
      <Link to={"/listboxes"}>List Boxes</Link>
    </div>
  );
}

export default NavBar;
