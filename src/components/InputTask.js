import React, { Fragment, useState } from "react";

const InputTask = () => {
  // set up component state
  const [key, setKey] = useState(0);
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
      let uniqueKey = key;
      uniqueKey++;
      setKey(uniqueKey);
      // Check if localStorage already has this key, get an array of the keys and check if its in it,includes()?
      let localStorageKeys = Object.keys(localStorage).sort();

      // If true, set the new key to the length of the localStorage array (one greater than the last element).
      if (localStorageKeys.includes(uniqueKey.toString())) {
        let key = localStorage.length + 1;
        localStorage.setItem(key, description);
      } else {
        // If not just add the key
        localStorage.setItem(uniqueKey, description);
      }
    } catch (err) {
      console.error(err.message);
    }
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
