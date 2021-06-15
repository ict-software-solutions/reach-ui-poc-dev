import React from "react";
import ModalContainer from "../../components/Modal/ModalContainer";
import ModalLabel from "../../components/Modal/ModalLabel";
import ModalDescription from "../../components/Modal/ModalDescription";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function About() {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <div>
      <button onClick={open}>Open Dialog</button>
      {showDialog && (
        <ModalContainer>
          <ModalLabel>Do you want to like ?</ModalLabel>
          <ModalDescription>
            Reach UI is built and tested with Yarn.Some columns have multiple
            widths defined, causing the layout to change at the defined
            breakpoint.
          </ModalDescription>

          <Grid container spacing={3} style={{ marginTop: 24 }}>
            <Grid item>
              <Button variant="contained" color="primary" onClick={close}>
                Accept
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" onClick={close}>
                Decline
              </Button>
            </Grid>
          </Grid>
        </ModalContainer>
      )}
    </div>
  );
}

export default About;
