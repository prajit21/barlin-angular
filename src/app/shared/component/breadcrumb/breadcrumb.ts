import { Component, inject } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
  RouterModule,
} from "@angular/router";

import { filter, map } from "rxjs";

import { CommonSvgIcons } from "../common-svg-icons/common-svg-icons";

@Component({
  selector: "app-breadcrumb",
  imports: [RouterModule, CommonSvgIcons],
  templateUrl: "./breadcrumb.html",
  styleUrl: "./breadcrumb.scss",
})
export class Breadcrumb {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  public breadcrumbs: {
    parentBreadcrumb?: string;
    childBreadcrumb?: string;
    enable?: boolean;
  } = {};
  public title: string = "";

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
      )
      .pipe(filter((route) => route.outlet === PRIMARY_OUTLET))
      .subscribe((route) => {
        let title = route.snapshot.data["title"];
        let parent = route.parent?.snapshot.data["breadcrumb"];
        let child = route.snapshot.data["breadcrumb"];
        this.breadcrumbs = {};
        this.title = title;
        this.breadcrumbs = {
          parentBreadcrumb: parent,
          childBreadcrumb: child,
        };
      });
  }
}
