import React from "react";
import { Route, Switch } from "react-router";
import TodoApp from "./component/TodoApp";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"(/)?"} component={TodoApp} />
    </Switch>
  );
};
export default Router;
