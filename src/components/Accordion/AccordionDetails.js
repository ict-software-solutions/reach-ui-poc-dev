import React from "react";
import { AccordionPanel } from "@reach/accordion";
import "@reach/accordion/styles.css";
import Container from "@material-ui/core/Container";

function AccordionDetails({ children }) {
  return (
    <div>
      <Container>
        <AccordionPanel>{children}</AccordionPanel>
      </Container>
    </div>
  );
}

export default AccordionDetails;
