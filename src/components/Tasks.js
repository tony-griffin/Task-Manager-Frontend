import React from "react";
import InputTask from "./InputTask";
import ListTasks from "./ListTasks";

const Tasks = () => {
  let storage = [];

  let keys = Object.keys(localStorage);
  keys.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true }) === 1 ? 1 : -1
  );

  for (const key of keys) {
    storage.push({ id: key, description: localStorage.getItem(key) });
  }

  return (
    <div>
      <InputTask />
      <ListTasks taskItems={storage} />
    </div>
  );
};

export default Tasks;
