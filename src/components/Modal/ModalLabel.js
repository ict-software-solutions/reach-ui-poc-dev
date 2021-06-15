import React from "react";
import { AlertDialogLabel } from "@reach/alert-dialog";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#000",
    fontWeight: "bold",
    marginTop: theme.spacing(-4),
    fontSize: 18,
    maxWidth: theme.spacing(50),
  },
}));

function ModalLabel({ children }) {
  const classes = useStyles();
  return (
    <div>
      <AlertDialogLabel className={classes.title}>{children}</AlertDialogLabel>
    </div>
  );
}

export default ModalLabel;
