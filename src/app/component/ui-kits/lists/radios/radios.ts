import { Component } from "@angular/core";

import { radio } from "../../../../shared/data/data/ui-kits/list";

@Component({
  selector: "app-radios",
  imports: [],
  templateUrl: "./radios.html",
  styleUrls: ["./radios.scss"],
})
export class Radios {
  public radio = radio;
}
