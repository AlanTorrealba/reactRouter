import { Outlet } from "react-router-dom";
import { items } from "../data/items";
import React from "react";
import Menu from "./components/Menu";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Menu />
      <div className="mainContainer">
        <div className="sidebar">
          {items.map((item) => (
            <div>
              <Link to={`/contacts/${item.id}`}>{item.name}</Link>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
