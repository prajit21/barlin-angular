import { Component } from "@angular/core";

import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

import { About } from "./about/about";
import { Friends } from "./friends/friends";
import { Photos } from "./photos/photos";
import { Timeline } from "./timeline/timeline";

@Component({
  selector: "app-social-app",
  imports: [NgbNavModule, Timeline, About, Friends, Photos],
  templateUrl: "./social-app.html",
  styleUrl: "./social-app.scss",
})
export class SocialApp {
  public active = 1;
}
