import React, { Fragment, useState } from "react";

const InputTask = () => {
  // set up component state
  const [description, setDescription] = useState("");

  // submit the form to send data out
  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(description);
    try {
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h2 class="text-center mt-5">Add Task</h2>
      <form class="d-flex mt-5" onSubmit={onSubmitForm}>
        <label htmlFor="input" />
        <input
          type="text"
          value={description}
          class="form-control"
          id="input"
          onChange={(event) => setDescription(event.target.value)}
        />

        <button class="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
}

export default InputTask;
