import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";

export default function Messages() {
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
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Dialog onClose={handleClickClose} open={open}>
        <DialogTitle
          onClose={handleClickClose}
          style={{
            width: "30rem",
          }}
        >
          Inbox
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>No messages...</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus>New Message</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
