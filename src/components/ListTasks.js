import React, { Fragment } from "react";

const ListTasks = (props) => {
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
          {props.taskItems.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.description}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTasks;
