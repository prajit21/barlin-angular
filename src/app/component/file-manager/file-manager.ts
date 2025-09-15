import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgbProgressbarModule } from "@ng-bootstrap/ng-bootstrap";

import { FileContent } from "./file-content/file-content";
import { FeatherIcon } from "../../shared/component/feather-icon/feather-icon";
import { sidebarData } from "../../shared/data/data/file-maganer";
import { ClickOutsideDirective } from "../../shared/directive/click-outside.directive";

@Component({
  selector: "app-file-manager",
  imports: [
    CommonModule,
    FeatherIcon,
    NgbProgressbarModule,
    FileContent,
    ClickOutsideDirective,
  ],
  templateUrl: "./file-manager.html",
  styleUrl: "./file-manager.scss",
})
export class FileManager {
  public sidebar = sidebarData;
  public isOpen: boolean = false;
}
