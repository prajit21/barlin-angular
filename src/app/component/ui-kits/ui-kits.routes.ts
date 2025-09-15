import { Routes } from "@angular/router";

import { Accordion } from "./accordion/accordion";
import { Alert } from "./alert/alert";
import { Avatars } from "./avatars/avatars";
import { Divider } from "./divider/divider";
import { Dropdown } from "./dropdown/dropdown";
import { Grid } from "./grid/grid";
import { HelperClasses } from "./helper-classes/helper-classes";
import { Lists } from "./lists/lists";
import { Modal } from "./modal/modal";
import { NavigateLinks } from "./navigate-links/navigate-links";
import { Offcanvas } from "./offcanvas/offcanvas";
import { Placeholder } from "./placeholder/placeholder";
import { Popover } from "./popover/popover";
import { ProgressBar } from "./progress-bar/progress-bar";
import { Tabs } from "./tabs/tabs";
import { TagPills } from "./tag-pills/tag-pills";
import { Tooltip } from "./tooltip/tooltip";
import { Typography } from "./typography/typography";

export default [
  {
    path: "typography",
    component: Typography,
    data: {
      title: "Typography",
      breadcrumb: "Typography",
    },
  },
  {
    path: "helper-classes",
    component: HelperClasses,
    data: {
      title: "Helper Classes",
      breadcrumb: "Helper Classes",
    },
  },
  {
    path: "grid",
    component: Grid,
    data: {
      title: "Grid",
      breadcrumb: "Grid",
    },
  },
  {
    path: "tag-pills",
    component: TagPills,
    data: {
      title: "Tag & Pills",
      breadcrumb: "Tag & Pills",
    },
  },
  {
    path: "progress-bar",
    component: ProgressBar,
    data: {
      title: "Progress",
      breadcrumb: "Progress",
    },
  },
  {
    path: "modal",
    component: Modal,
    data: {
      title: "Modal",
      breadcrumb: "Modal",
    },
  },
  {
    path: "divider",
    component: Divider,
    data: {
      title: "Divider",
      breadcrumb: "Divider",
    },
  },
  {
    path: "avatars",
    component: Avatars,
    data: {
      title: "Avatars",
      breadcrumb: "Avatars",
    },
  },
  {
    path: "alert",
    component: Alert,
    data: {
      title: "Alert",
      breadcrumb: "Alert",
    },
  },
  {
    path: "popover",
    component: Popover,
    data: {
      title: "Popover",
      breadcrumb: "Popover",
    },
  },
  {
    path: "placeholder",
    component: Placeholder,
    data: {
      title: "Placeholders",
      breadcrumb: "Placeholders",
    },
  },
  {
    path: "tooltip",
    component: Tooltip,
    data: {
      title: "Tooltip",
      breadcrumb: "Tooltip",
    },
  },
  {
    path: "dropdown",
    component: Dropdown,
    data: {
      title: "Dropdown",
      breadcrumb: "Dropdown",
    },
  },
  {
    path: "according",
    component: Accordion,
    data: {
      title: "Accordion",
      breadcrumb: "Accordion",
    },
  },
  {
    path: "tabs",
    component: Tabs,
    data: {
      title: "Bootstrap Tabs",
      breadcrumb: "Bootstrap Tabs",
    },
  },
  {
    path: "Offcanvas",
    component: Offcanvas,
    data: {
      title: "Offcanvas",
      breadcrumb: "Offcanvas",
    },
  },
  {
    path: "navigate-links",
    component: NavigateLinks,
    data: {
      title: "Navigate Links",
      breadcrumb: "Navigate Links",
    },
  },
  {
    path: "lists",
    component: Lists,
    data: {
      title: "Lists",
      breadcrumb: "Lists",
    },
  },
] as Routes;
