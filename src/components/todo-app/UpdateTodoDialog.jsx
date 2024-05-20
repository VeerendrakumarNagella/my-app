import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Switch } from "@mui/material";

const UpdateTodoDialog = ({
  todo,
  handleUpdate,
  handleClose,
  setUpdateDialog,
}) => {
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Update the todo</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <div className="add-todo">
            <div className="todo-form">
              <input
                type="text"
                placeholder="Add a new todo"
                className="new-todo"
                onChange={(e) =>
                  setUpdateDialog({ ...todo, title: e.target.value })
                }
                value={todo.title}
              />
              <Switch
                checked={todo.completed}
                onChange={(_e, checked) =>
                  setUpdateDialog({ ...todo, completed: checked })
                }
              />
            </div>
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="outlined"
          color="primary"
          autoFocus
        >
          Cancel
        </Button>
        <Button onClick={handleUpdate} variant="contained" color="error">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

UpdateTodoDialog.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  setUpdateDialog: PropTypes.func.isRequired,
};

export default UpdateTodoDialog;
