import React, { Fragment } from "react";

const ListTasks = () => {
  const getTasks = () => {
    try {
    } catch (error) {
      console.error(error.message);
    }
  };

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
          {/* <tr>
            <td>1</td>
            <td>Commit master branch</td>
          </tr> */}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTasks;
