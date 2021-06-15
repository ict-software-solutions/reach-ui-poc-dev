import React from "react";
import Paper from "@material-ui/core/Paper";
import { MenuList } from "@reach/menu-button";
import "@reach/menu-button/styles.css";

function List({ children }) {
  return (
    <div>
      <Paper>
        <MenuList style={{ width: 200 }}>{children}</MenuList>
      </Paper>
    </div>
  );
}

export default List;
