import { Component } from "@angular/core";

import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

import * as data from "../../../../../shared/data/data/social-app";

@Component({
  selector: "app-followings",
  imports: [NgbCollapseModule],
  templateUrl: "./followings.html",
  styleUrl: "./followings.scss",
})
export class Followings {
  public isCollapsed = false;
  public Following = data.Following;
}
