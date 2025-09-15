import { Routes } from "@angular/router";

import { AngularEditors } from "./angular-editors/mde-editors";
import { NgxEditor } from "./ngx-editor/ngx-editor";

export default [
  {
    path: "ngx-editor",
    component: NgxEditor,
    data: {
      title: "Ngx Editor",
      breadcrumb: "Ngx Editor",
    },
  },
  {
    path: "angular-editor",
    component: AngularEditors,
    data: {
      title: "Angular Editor",
      breadcrumb: "Angular Editor",
    },
  },
] as Routes;
