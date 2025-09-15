import { Component } from "@angular/core";

import { FlatButtonGroups } from "../../../../shared/data/data/buttons/button-group";

@Component({
  selector: "app-flat-button-group",
  templateUrl: "./flat-button-group.html",
  styleUrls: ["./flat-button-group.scss"],
  imports: [],
})
export class FlatButtonGroup {
  public FlatGroupData = FlatButtonGroups;
}
