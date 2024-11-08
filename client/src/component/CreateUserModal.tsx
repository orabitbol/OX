import React, { useState } from "react";
import { ICreateUserModal } from "../model/global";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import "./createUserModal.scss";

const CreateUserModal: React.FC<ICreateUserModal> = ({
  closeModal,
  employees,
}) => {
  const [userName, setUserName] = useState("");
  const [status, setStatus] = useState("Working");

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setUserName(value);
    } else {
      alert("Only English alphabetical characters are allowed.");
    }
  };

  const uniqueStatuses = Array.from(
    new Set(employees.map((employee) => employee.status))
  );

  return (
    <Dialog
      open={true}
      onClose={closeModal}
      fullWidth
      maxWidth="sm"
      className="create-user-modal-component"
    >
      <DialogTitle>Create New User</DialogTitle>
      <Divider />
      <DialogContent>
        <FormControl fullWidth margin="normal" variant="standard">
          <TextField
            label="User name:"
            value={userName}
            onChange={handleUserNameChange}
            placeholder="Enter user name"
            fullWidth
            variant="standard"
            className="input-name"
          />
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
          <Select
            fullWidth
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            label="Age"
          >
            {uniqueStatuses.map((status) => (
              <MenuItem key={status} value={status}>
                <span>{status}</span>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <DialogActions className="position-button">
          <Button
            onClick={closeModal}
            variant="contained"
            color="primary"
            className="create-button"
          >
            Create
          </Button>
          <Button className="cancel-button" onClick={closeModal} variant="outlined" color="primary">
            Cancel
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUserModal;
