import React, { Fragment } from "react";

const ListTasks = () => {
  // const getTasks = () => {
  //   try {
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  const tasks = [
    {
      id: 1,
      description: "Commit to master",
    },
    {
      id: 2,
      description: "Re-do User Stories",
    },
    {
      id: 3,
      description: "Prepare Presentation",
    },
  ];

  return (
    <Fragment>
      <table class="table mt-5 text-center">
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
