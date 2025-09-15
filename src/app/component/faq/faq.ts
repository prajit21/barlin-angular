import { Component } from "@angular/core";

import { CommanData } from "./comman-data/comman-data";
import { FeaturedTutorials } from "./featured-tutorials/featured-tutorials";
import { LatestArticlesVideos } from "./latest-articles-videos/latest-articles-videos";
import { LatestUpdates } from "./latest-updates/latest-updates";
import { Navigation } from "./navigation/navigation";
import { Questions } from "./questions/questions";
import { SearchArticles } from "./search-articles/search-articles";
import {
  articlesAndVideosData,
  commanTopData,
  featuredTutorialData,
} from "../../shared/data/data/faq";

@Component({
  selector: "app-faq",
  imports: [
    Questions,
    SearchArticles,
    Navigation,
    LatestUpdates,
    FeaturedTutorials,
    LatestArticlesVideos,
    CommanData,
  ],
  templateUrl: "./faq.html",
  styleUrls: ["./faq.scss"],
})
export class Faq {
  public commanData = commanTopData;
  public featuredTutorialData = featuredTutorialData;
  public articlesAndVideosData = articlesAndVideosData;
}
