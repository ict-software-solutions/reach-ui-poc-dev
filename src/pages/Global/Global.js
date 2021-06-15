import React from "react";
import Menu from "../../components/Menus/MenuLayout";
import MenuButton from "../../components/Menus/MenuBtn";
import MenuList from "../../components/Menus/List";
import MenuItem from "../../components/Menus/Item";

function Global() {
  return (
    <div>
      <Menu>
        <MenuButton>Action</MenuButton>
        <MenuList>
          <MenuItem>Refresh</MenuItem>
          <MenuItem>Download</MenuItem>
          <MenuItem>Feedback</MenuItem>
          <MenuItem>Help</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Global;
