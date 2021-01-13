import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "2px solid blue",
        padding: "1rem",
      }}
    >
      <h4 style={{ margin: "0px" }}>React Routing</h4>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
          flexGrow: "1",
          margin: "0px",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
