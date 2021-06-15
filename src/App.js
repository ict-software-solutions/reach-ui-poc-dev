import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import Routing from "./components/Navbar/Routing";
import theme from "./theme/default";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </div>
  );
}

export default App;
