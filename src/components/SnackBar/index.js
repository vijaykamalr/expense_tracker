import { Alert, Snackbar } from "@mui/material";
import React from "react";

import { useStyles } from "./styles";

const SnackBarCustom = ({ open, setOpen }) => {
  const classes = useStyles();
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={6000}
      >
        <Alert
          severity="success"
          onClose={handleClose}
          variant="filled"
          elevation={6}
        >
          Transaction successfully created.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackBarCustom;
