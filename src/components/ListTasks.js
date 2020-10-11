import React, { Fragment, useEffect, useState } from "react";
import EditTask from "./EditTask";

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      const jsonData = await response.json();
      setTasks(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  // Delete function
  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      });

      setTasks(tasks.filter((task) => task.task_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.task_id}>
                <td>{task.task_id}</td>
                <td>{task.description}</td>
                <td>
                  <EditTask task={task} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTask(task.task_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTasks;
