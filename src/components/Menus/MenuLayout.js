import React from "react";
import { Menu } from "@reach/menu-button";
import "@reach/menu-button/styles.css";

function MenuLayout({ children }) {
  return (
    <div>
      <Menu>{children}</Menu>
    </div>
  );
}

export default MenuLayout;
