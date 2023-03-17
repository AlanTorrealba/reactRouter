import { Link, Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import React from "react";

function Home() {
  return (
    <div>
        <Menu/>
    <div>
        <Outlet/>
    </div>
    </div>
  );
}

export default Home;
