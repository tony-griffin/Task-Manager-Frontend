import React, { Fragment, useState } from "react";
import axios from "axios";

const InputTask = () => {
  // set up component state
  const [description, setDescription] = useState("");

  const onChange = (event) => {
    setDescription(event.target.value);
  };

  // submit the form to send data out
  const onSubmitForm = async (event) => {
    event.preventDefault();

    const inputFieldValue = document.getElementById("input");
    if (!inputFieldValue.value) {
      alert("You must enter a task description!");
      return;
    }

    try {
      const body = { description };
      await axios.post(`http://localhost:5000/tasks`, body);

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <h2 className="text-center mt-5">Input Task</h2>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <label htmlFor="input" />
        <input
          type="text"
          value={description}
          className="form-control"
          id="input"
          onChange={onChange}
        />

        <button className="btn btn-success ml-5">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTask;
