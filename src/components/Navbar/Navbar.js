import React from "react";
import { Route, Redirect, useHistory, Switch } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Layout from "./Layout";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import About from "../../pages/About/About";
import Global from "../../pages/Global/Global";

function Navbar() {
  const history = useHistory();
  return (
    <div>
      {/* {history.location.pathname === "/" ||
      history.location.pathname === "/login" ||
      history.location.pathname === "/register" ? null : (
        <Layout>
          <Route exact path="/home" component={Home} />
        </Layout>
      )}
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} /> */}

      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <div>
          <Layout>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/global" component={Global} />
          </Layout>
        </div>
      </Switch>
    </div>
  );
}

export default Navbar;
