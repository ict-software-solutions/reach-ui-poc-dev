import React from "react";
import { AlertDialogDescription } from "@reach/alert-dialog";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  description: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(1),
    fontWeight: "normal",
    fontSize: 15,
    maxWidth: theme.spacing(50),
  },
}));

function ModalDescription({ children }) {
  const classes = useStyles();
  return (
    <div>
      <AlertDialogDescription className={classes.description}>
        {children}
      </AlertDialogDescription>
    </div>
  );
}

export default ModalDescription;
