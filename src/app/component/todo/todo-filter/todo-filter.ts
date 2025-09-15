import { Component } from "@angular/core";

import { FeatherIcon } from "../../../shared/component/feather-icon/feather-icon";
import { ClickOutsideDirective } from "../../../shared/directive/click-outside.directive";

@Component({
  selector: "app-todo-filter",
  imports: [FeatherIcon, ClickOutsideDirective],
  templateUrl: "./todo-filter.html",
  styleUrl: "./todo-filter.scss",
})
export class TodoFilter {
  public isOpen: boolean = false;
}
