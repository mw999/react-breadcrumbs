import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "./routes";

const App = () => (
  <Router>
    <div className="w-screen h-screen flex justify-center items-center">
      <Switch>
        {routes.map(({ path, name, Component }, key) => (
          <Route
            exact
            path={path}
            key={key}
            render={route => <Component {...route} />}
          />
        ))}
      </Switch>
    </div>
  </Router>
);

export default App;
