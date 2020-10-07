import React from "react";
import InputTask from "./InputTask";
import ListTasks from "./ListTasks";

const Tasks = () => {
  let storage = [];

  let keys = Object.keys(localStorage).sort();
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
