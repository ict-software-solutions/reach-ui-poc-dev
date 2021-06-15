import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { AlertDialog } from "@reach/alert-dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#eaf0f7",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(5),
    color: theme.palette.text.secondary,
  },
}));

function ModalContainer({ children }) {
  const classes = useStyles();
  const cancelRef = useRef();
  return (
    <div>
      <AlertDialog leastDestructiveRef={cancelRef} className={classes.root}>
        <Paper className={classes.paper} elevation={8}>
          {children}
        </Paper>
      </AlertDialog>
    </div>
  );
}

export default ModalContainer;
