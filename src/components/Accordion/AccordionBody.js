import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { AccordionItem } from "@reach/accordion";
import "@reach/accordion/styles.css";

const useStyles = makeStyles((theme) => ({
  accordion: {
    backgroundColor: "#fff",
  },
}));

function AccordionBody({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={3}>
        <AccordionItem className={classes.accordion}>{children}</AccordionItem>
      </Paper>
    </div>
  );
}

export default AccordionBody;
