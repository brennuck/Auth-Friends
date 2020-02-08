import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
