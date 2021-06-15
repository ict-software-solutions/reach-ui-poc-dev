import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#3f51b5";

export default createMuiTheme({
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: "#f50057",
    },
  },
});
