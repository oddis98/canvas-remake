import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Calender() {
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
          <CalendarTodayIcon />
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
      <Dialog onClose={handleClickClose} open={open}>
        <DialogTitle
          onClose={handleClickClose}
          style={{
            width: "30rem",
          }}
        >
          Calendar
        </DialogTitle>
        <DialogContent dividers>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: "Lecture", date: "2021-04-20" },
              { title: "Lecture", date: "2021-04-26" },
              { title: "Lecture", date: "2021-04-15" },
            ]}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
