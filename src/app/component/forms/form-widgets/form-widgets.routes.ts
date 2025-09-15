import { Routes } from "@angular/router";

import { ClipBoard } from "./clip-board/clip-board";
import { DatePicker } from "./date-picker/date-picker";
import { SelectTwo } from "./select-two/select-two";
import { Switch } from "./switch/switch";
import { Touchspin } from "./touchspin/touchspin";
import { Typeahead } from "./touchspin/typeahead/typeahead";

export default [
  {
    path: "datepicker",
    component: DatePicker,
    data: {
      title: "Datepicker",
      breadcrumb: "Datepicker",
    },
  },
  {
    path: "touchspin",
    component: Touchspin,
    data: {
      title: "Touchspin",
      breadcrumb: "Touchspin",
    },
  },
  {
    path: "select2",
    component: SelectTwo,
    data: {
      title: "Select2",
      breadcrumb: "Select2",
    },
  },
  {
    path: "switch",
    component: Switch,
    data: {
      title: "Switch",
      breadcrumb: "Switch",
    },
  },
  {
    path: "typeahead",
    component: Typeahead,
    data: {
      title: "Typeahead",
      breadcrumb: "Typeahead",
    },
  },
  {
    path: "clipboard",
    component: ClipBoard,
    data: {
      title: "Clipboard",
      breadcrumb: "Clipboard",
    },
  },
] as Routes;
