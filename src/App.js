import React, { Fragment } from "react";
import "./App.css";
import "./components/InputTask";
import Tasks from "./components/Tasks";
require("dotenv").config();

function App() {
  return (
    <Fragment>
      <div className="container">
        <Tasks />
      </div>
    </Fragment>
  );
}

export default App;
