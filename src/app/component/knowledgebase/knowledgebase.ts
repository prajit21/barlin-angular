import { Component } from '@angular/core';

import { BrowserArticle } from './browser-article/browser-article';
import { TopBanner } from './top-banner/top-banner';
import {
  articlesAndVideosData,
  commanTopData,
  featuredTutorialData,
} from '../../shared/data/data/faq';
import { CommanData } from '../faq/comman-data/comman-data';
import { FeaturedTutorials } from '../faq/featured-tutorials/featured-tutorials';
import { LatestArticlesVideos } from '../faq/latest-articles-videos/latest-articles-videos';

@Component({
  selector: 'app-knowledgebase',
  imports: [TopBanner, CommanData, BrowserArticle, FeaturedTutorials, LatestArticlesVideos],
  templateUrl: './knowledgebase.html',
  styleUrls: ['./knowledgebase.scss'],
})
export class Knowledgebase {
  public commanData = commanTopData;
  public featuredTutorialData = featuredTutorialData;
  public articlesAndVideosData = articlesAndVideosData;
}
