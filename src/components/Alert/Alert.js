import React from "react";
import Alert from "@reach/alert";

function AlertComponent({ children }) {
  return (
    <div>
      <Alert
        style={{
          background: "hsla(10, 50%, 50%, .10)",
          padding: "10px",
        }}
      >
        ❗️ {children}
      </Alert>
    </div>
  );
}

export default AlertComponent;
