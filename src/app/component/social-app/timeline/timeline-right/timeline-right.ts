import { Component } from "@angular/core";

import { Followers } from "./followers/followers";
import { Followings } from "./followings/followings";
import { Friends } from "./friends/friends";
import { LatestPhotos } from "./latest-photos/latest-photos";
import { ProfileIntro } from "./profile-intro/profile-intro";

@Component({
  selector: "app-timeline-right",
  imports: [ProfileIntro, Followers, Followings, LatestPhotos, Friends],
  templateUrl: "./timeline-right.html",
  styleUrl: "./timeline-right.scss",
})
export class TimelineRight {}
