import { Routes } from "@angular/router";

import { GroupChat } from "./group-chat/group-chat";
import { PrivateChat } from "./private-chat/private-chat";

export default [
  {
    path: "private-chat",
    component: PrivateChat,
    data: {
      title: "Private Chat",
      breadcrumb: "Private Chat",
    },
  },
  {
    path: "group-chat",
    component: GroupChat,
    data: {
      title: "Group-Chat",
      breadcrumb: "Group-Chat",
    },
  },
] as Routes;
