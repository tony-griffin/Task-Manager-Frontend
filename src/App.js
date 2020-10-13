import React, { Fragment } from "react";
import "./App.css";
import "./components/InputTask";
import Tasks from "./components/Tasks";

console.log("ENV VAR:", process.env.API_PORT_NUM);
const port = process.env.API_PORT_NUM;

function App() {
  return (
    <Fragment>
      <div className="container">
        <Tasks />
      </div>
      <p>{port}</p>
    </Fragment>
  );
}

export default App;
