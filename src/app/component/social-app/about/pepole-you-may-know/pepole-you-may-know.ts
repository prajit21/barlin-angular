import { Component } from "@angular/core";

import { peopleKnowYouData } from "../../../../shared/data/data/social-app";

@Component({
  selector: "app-pepole-you-may-know",
  imports: [],
  templateUrl: "./pepole-you-may-know.html",
  styleUrl: "./pepole-you-may-know.scss",
})
export class PepoleYouMayKnow {
  public peopleKnowYouData = peopleKnowYouData;
}
