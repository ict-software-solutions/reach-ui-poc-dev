import React from "react";
import { AccordionButton } from "@reach/accordion";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    alignItems: "center",
    borderRadius: 3,
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    padding: "4px 10px",
  },
  title: {
    appearance: "none",
    background: 0,
    border: 0,
    boxShadow: "none",
    color: "inherit",
    display: "block",
    textAlign: "inherit",
    flexGrow: 1,
    backgroundColor: "#fff",
    flexShrink: 0,
    font: "inherit",
    fontSize: 20,
    fontWeight: "bolder",
    margin: 0,
    padding: "10px 0",
  },
}));

function AccordionBtn({ children }) {
  const classes = useStyles();
  const [icon, setIcon] = React.useState(false);

  const handleClick = () => {
    setIcon(!icon);
  };
  return (
    <div>
      <Paper elevation={4} className={classes.paper} onClick={handleClick}>
        <AccordionButton className={classes.title}>{children}</AccordionButton>
        {icon ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Paper>
    </div>
  );
}

export default AccordionBtn;
