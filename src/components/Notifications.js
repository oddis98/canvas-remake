import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";

export default function Notifications() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <ListItem button onClick={handleClickOpen}>
        <ListItemIcon>
          <NotificationImportantIcon />
        </ListItemIcon>
        <ListItemText primary="Notifications" />
      </ListItem>
      <Dialog onClose={handleClickClose} open={open}>
        <DialogTitle
          onClose={handleClickClose}
          style={{
            width: "30rem",
          }}
        >
          Notifications
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>UiB: Happy easter!</Typography>
          <Typography gutterBottom>
            INFO215: Don't forget to sign up to your lab groups!
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
