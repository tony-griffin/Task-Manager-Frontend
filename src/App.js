import React, { Fragment } from "react";
import "./App.css";
import "./components/InputTask";
import InputTask from "./components/InputTask";
import ListTasks from "./components/ListTasks";

function App() {
  return (
    <Fragment>
      <div class="container">
        <InputTask />
        <ListTasks />
      </div>
    </Fragment>
  );
}

export default App;
