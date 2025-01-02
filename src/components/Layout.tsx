import { Outlet } from "react-router";
import Nav from "./Nav";
import "../styles/layout.css";

function Layout() {
  return (
    <div className="layoutContainer">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Layout;
