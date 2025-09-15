import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CommonSvgIcons } from "../../../shared/component/common-svg-icons/common-svg-icons";
import { friendCard } from "../../../shared/data/data/friend";

@Component({
  selector: "app-friends",
  imports: [CommonSvgIcons, RouterModule],
  templateUrl: "./friends.html",
  styleUrl: "./friends.scss",
})
export class Friends {
  public friendCard = friendCard;
}
