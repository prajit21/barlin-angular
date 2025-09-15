import { Routes } from "@angular/router";

import { FeatherIcons } from "./feather-icon/feather-icon";
import { FlagIcons } from "./flag-icons/flag-icons";
import { FontAwesome } from "./font-awesome/font-awesome";
import { IcoIcon } from "./ico-icon/ico-icon";
import { ThemifyIcon } from "./themify-icon/themify-icon";
import { WhetherIcon } from "./whether-icon/whether-icon";

export default [
  {
    path: "flag-icon",
    component: FlagIcons,
    data: {
      title: "Flag Icons",
      breadcrumb: "Flag Icons",
    },
  },
  {
    path: "fontawesome",
    component: FontAwesome,
    data: {
      title: "Font Awesome Icon",
      breadcrumb: "Font Awesome Icon",
    },
  },
  {
    path: "ico-icons",
    component: IcoIcon,
    data: {
      title: "ICO Icon",
      breadcrumb: "ICO Icon",
    },
  },
  {
    path: "themify-icons",
    component: ThemifyIcon,
    data: {
      title: "Themify icon",
      breadcrumb: "Themify icon",
    },
  },
  {
    path: "feather-icons",
    component: FeatherIcons,
    data: {
      title: "Feather Icons",
      breadcrumb: "Feather Icons",
    },
  },
  {
    path: "weather-icons",
    component: WhetherIcon,
    data: {
      title: "Whether Icon",
      breadcrumb: "Whether Icon",
    },
  },
] as Routes;
