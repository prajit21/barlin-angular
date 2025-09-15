import { Component } from "@angular/core";

import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

import { Category } from "../../../../shared/data/data/learning";

@Component({
  selector: "app-categories",
  imports: [NgbCollapseModule],
  templateUrl: "./categories.html",
  styleUrls: ["./categories.scss"],
})
export class Categories {
  public Categories = Category;

  public isCollapsed = false;
}
