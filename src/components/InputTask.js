import React, { Fragment, useState } from "react";

const InputTask = () => {
  // set up component state
  const [id, setId] = useState(0);
  const [description, setDescription] = useState(
    localStorage.getItem("myValueInLocalStorage") || ""
  );

  const onChange = (event) => {
    setDescription(event.target.value);
  };

  // submit the form to send data out
  const onSubmitForm = (event) => {
    event.preventDefault();

    try {
      let uniqueId = id;
      uniqueId++;
      setId(uniqueId);
      localStorage.setItem(uniqueId, description);
    } catch (err) {
      console.error(err.message);
    }
    console.log("LOCALSTORAGE: -----", localStorage);
  };

  return (
    <Fragment>
      <h2 className="text-center mt-5">Add Task</h2>
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
