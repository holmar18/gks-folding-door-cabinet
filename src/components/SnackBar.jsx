import {useState} from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function CustomizedSnackbars({
  handleClick,
  text,
  severity = "success",
  open,
  setOpen,
}) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={() => handleClick(open, setOpen)}>Loka</Button>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{vertical: "bottom", horizontal: "center"}}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant='filled'
          sx={{width: "100%"}}>
          {text}
        </Alert>
      </Snackbar>
    </div>
  );
}
