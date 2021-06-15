import React from "react";
import { MenuItem } from "@reach/menu-button";
import "@reach/menu-button/styles.css";

function Item({ children }) {
  return (
    <div>
      <MenuItem>{children}</MenuItem>
    </div>
  );
}

export default Item;
