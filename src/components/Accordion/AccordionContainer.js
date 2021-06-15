import React from "react";
import { Accordion } from "@reach/accordion";
import "@reach/accordion/styles.css";

function AccordionContainer({ children }) {
  return (
    <div>
      <Accordion defaultIndex={children} multiple>
        {children}
      </Accordion>
    </div>
  );
}

export default AccordionContainer;
