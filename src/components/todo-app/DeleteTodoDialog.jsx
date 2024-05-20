import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const DeleteTodoDialog = ({ title, handleDelete, handleClose }) => {
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Delete <strong>{title}</strong> todo ?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure, you want to delete this{" "}
          <strong>
            {" "}
            <em>{title}</em>{" "}
          </strong>{" "}
          todo from the list?
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
        <Button onClick={handleDelete} variant="contained" color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteTodoDialog.propTypes = {
  title: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default DeleteTodoDialog;
