import { Component } from "@angular/core";

import * as data from "../../../../shared/data/data/ui-kits/typography";

@Component({
  selector: "app-blockquotes",
  imports: [],
  templateUrl: "./blockquotes.html",
  styleUrls: ["./blockquotes.scss"],
})
export class Blockquotes {
  public blockQuotesData = data.blockQuotesData;
}
