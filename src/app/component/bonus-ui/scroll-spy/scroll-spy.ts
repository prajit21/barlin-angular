import { Component } from "@angular/core";

import { CustomScrollspy } from "./custom-scrollspy/custom-scrollspy";
import { ListGroupScrollspy } from "./list-group-scrollspy/list-group-scrollspy";
import { NavbarScrollspy } from "./navbar-scrollspy/navbar-scrollspy";
import { NestedScrollspy } from "./nested-scrollspy/nested-scrollspy";

@Component({
  selector: "app-scroll-spy",
  imports: [
    NavbarScrollspy,
    NestedScrollspy,
    ListGroupScrollspy,
    CustomScrollspy,
  ],
  templateUrl: "./scroll-spy.html",
  styleUrl: "./scroll-spy.scss",
})
export class ScrollSpy {}
