import { Component } from "@angular/core";

import { UserProfileFifth } from "./user-profile-fifth/user-profile-fifth";
import { UserProfileFirst } from "./user-profile-first/user-profile-first";
import { UserProfileFourth } from "./user-profile-fourth/user-profile-fourth";
import { UserProfileSecond } from "./user-profile-second/user-profile-second";
import { UserProfileThird } from "./user-profile-third/user-profile-third";

@Component({
  selector: "app-user-profile",
  imports: [
    UserProfileFirst,
    UserProfileFifth,
    UserProfileFourth,
    UserProfileSecond,
    UserProfileThird,
  ],
  templateUrl: "./user-profile.html",
  styleUrls: ["./user-profile.scss"],
})
export class UserProfile {}
