import { Component } from "@angular/core";

import { FeatherIcon } from "../../../../shared/component/feather-icon/feather-icon";
import * as data from "../../../../shared/data/data/table/bootstrap-table";

@Component({
  selector: "app-hoverable-rows-border",
  imports: [FeatherIcon],
  templateUrl: "./hoverable-rows-border.html",
  styleUrls: ["./hoverable-rows-border.scss"],
})
export class HoverableRowsBorder {
  public hoverableRowsBorder = data.hoverableRowsBorder;
}
