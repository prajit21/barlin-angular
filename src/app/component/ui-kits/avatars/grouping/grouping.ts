import { Component } from "@angular/core";

import { groupingData } from "../../../../shared/data/data/ui-kits/avatars";

@Component({
  selector: "app-grouping",
  imports: [],
  templateUrl: "./grouping.html",
  styleUrls: ["./grouping.scss"],
})
export class Grouping {
  public groupingData = groupingData;
}
