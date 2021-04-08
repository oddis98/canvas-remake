import React from "react";
import { List } from "@material-ui/core";

import Messages from "./Messages.js";
import Notifications from "./Notifications.js";
import Calender from "./Calender.js";

export default function ActionList() {
  return (
    <List component="nav" aria-label="main mailbox folders">
      <Messages />
      <Notifications />
      <Calender />
    </List>
  );
}
