import { Component } from "@angular/core";

import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

import * as data from "../../../../../shared/data/data/social-app";

@Component({
  selector: "app-mutual-friends",
  imports: [NgbCollapseModule],
  templateUrl: "./mutual-friends.html",
  styleUrl: "./mutual-friends.scss",
})
export class MutualFriends {
  public isCollapsed = false;
  public mutualFriendsData = data.mutualFriendsData;
}
