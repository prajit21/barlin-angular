import { Component } from "@angular/core";

import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

import { All } from "./all/all";
import { Image } from "./image/image";
import { Video } from "./video/video";
import { FeatherIcon } from "../../shared/component/feather-icon/feather-icon";

@Component({
  selector: "app-search-result",
  imports: [NgbNavModule, Image, Video, All, FeatherIcon],
  templateUrl: "./search-result.html",
  styleUrl: "./search-result.scss",
})
export class SearchResult {
  public active = 1;
}
