import React, { Fragment, useState } from "react";
import axios from "axios";

const EditTask = ({ task }) => {
  const [description, setDescription] = useState(task.description);

  // Edit description
  const updateDescription = async (e) => {
    e.preventDefault();

    try {
      const body = { description };
      await axios.put(`http://localhost:5000/tasks/${task.task_id}`, body);
      
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      {/* Button to Open the Modal  */}
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${task.task_id}`}
      >
        Edit
      </button>

      {/* The Modal  */}
      <div
        className="modal"
        id={`id${task.task_id}`}
        onClick={() => setDescription(task.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header  */}
            <div className="modal-header">
              <h4 className="modal-title">Edit Task</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(task.description)}
              >
                &times;
              </button>
            </div>

            {/* Modal body  */}
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            {/* Modal footer  */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(event) => updateDescription(event)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(task.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTask;
