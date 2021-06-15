import React from "react";
import AccordionContainer from "../../components/Accordion/AccordionContainer";
import AccordionBody from "../../components/Accordion/AccordionBody";
import AccordionDetails from "../../components/Accordion/AccordionDetails";
import AccordionBtn from "../../components/Accordion/AccordionBtn";
import Typography from "@material-ui/core/Typography";

function Home() {
  return (
    <div>
      <AccordionContainer>

        <AccordionBody>
          <AccordionBtn>Accordion 1</AccordionBtn>
          <AccordionDetails>
            <Typography variant="h6" gutterBottom>
              What is React Js ?
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes.
            </Typography>
          </AccordionDetails>
        </AccordionBody>

        <AccordionBody>
          <AccordionBtn>Accordion 2</AccordionBtn>
          <AccordionDetails>
            <Typography variant="h6" gutterBottom>
              What is Angular ?
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Angular makes it painless to create interactive UIs. Design simple
              views for each state in your application, and Angular will
              efficiently update and render just the right components when your
              data changes.
            </Typography>
          </AccordionDetails>
        </AccordionBody>
        
      </AccordionContainer>
    </div>
  );
}

export default Home;
