import { Routes } from "@angular/router";

import { FooterDark } from "./footer-dark/footer-dark";
import { FooterFixed } from "./footer-fixed/footer-fixed";
import { FooterLight } from "./footer-light/footer-light";
import { HideScrollNav } from "./hide-scroll-nav/hide-scroll-nav";

export default [
  {
    path: "hide-nav-scroll",
    component: HideScrollNav,
    data: {
      title: "Hide Menu On Scroll",
      breadcrumb: "Hide Menu On Scroll",
    },
  },
  {
    path: "footer-dark",
    component: FooterDark,
    data: {
      title: "Footer Dark",
      breadcrumb: "Footer Dark",
    },
  },
  {
    path: "footer-light",
    component: FooterLight,
    data: {
      title: "Footer Light",
      breadcrumb: "Footer Light",
    },
  },
  {
    path: "footer-fixed",
    component: FooterFixed,
    data: {
      title: "Footer Fixed",
      breadcrumb: "Footer Fixed",
    },
  },
] as Routes;
