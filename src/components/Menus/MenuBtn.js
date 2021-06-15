import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { MenuButton } from "@reach/menu-button";
import "@reach/menu-button/styles.css";

const useStyles = makeStyles((theme) => ({
  button: {
    alignItems: "center",
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    padding: "4px 10px",
    border: "none",
    background: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    width: 200,
    height: 50,
  },
}));

function MenuBtn({ children }) {
  const classes = useStyles();
  return (
    <div>
      <MenuButton className={classes.button}>
        {children} <ArrowDropDownIcon />
      </MenuButton>
    </div>
  );
}

export default MenuBtn;
