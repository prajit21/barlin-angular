import { Component } from "@angular/core";

import * as data from "../../../../shared/data/data/user";

@Component({
  selector: "app-add-update-projects",
  imports: [],
  templateUrl: "./add-update-projects.html",
  styleUrls: ["./add-update-projects.scss"],
})
export class AddUpdateProjects {
  public addUpdateData = data.addUpdateData;
}
