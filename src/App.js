import React from "react";
import "./App.css";
import { render } from "@testing-library/react";
import Callback from "../src/components/Auth/Auth/Callback";
import Signup from "../src/components/Auth/Auth/Signup";
import { Route } from "react-router-dom";

//components

import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className='App'>
      <Dashboard />
      <Route exact path="/" component={Signup} exact />
      <Route exact path="/callback" component={Callback} exact />
      <Onboarding />
    </div>
  );
}

export default App;
