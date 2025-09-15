import { Component } from "@angular/core";

import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

import * as data from "../../../../../shared/data/data/social-app";

@Component({
  selector: "app-friends",
  imports: [NgbCollapseModule],
  templateUrl: "./friends.html",
  styleUrl: "./friends.scss",
})
export class Friends {
  public isCollapsed = false;
  public Friends = data.Friends;
}
