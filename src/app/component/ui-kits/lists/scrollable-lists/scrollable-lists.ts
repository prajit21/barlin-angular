import { Component } from "@angular/core";

import { scrollableListData } from "../../../../shared/data/data/ui-kits/list";

@Component({
  selector: "app-scrollable-lists",
  imports: [],
  templateUrl: "./scrollable-lists.html",
  styleUrls: ["./scrollable-lists.scss"],
})
export class ScrollableLists {
  public scrollableListData = scrollableListData;
}
