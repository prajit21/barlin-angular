import { Component } from "@angular/core";

import { FeatherIcon } from "../../../shared/component/feather-icon/feather-icon";
import * as data from "../../../shared/data/data/knowladgebase";

@Component({
  selector: "app-browser-article",
  imports: [FeatherIcon],
  templateUrl: "./browser-article.html",
  styleUrl: "./browser-article.scss",
})
export class BrowserArticle {
  public browseArticlesData = data.browseArticlesData;
}
