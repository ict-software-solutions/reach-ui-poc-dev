import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import theme from "./theme/default";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
