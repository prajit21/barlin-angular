import { Component, input } from '@angular/core';

import { FeatherIcon } from '../../../shared/component/feather-icon/feather-icon';
import { articlesAndVideos } from '../../../shared/data/data/faq';

@Component({
  selector: 'app-latest-articles-videos',
  imports: [FeatherIcon],
  templateUrl: './latest-articles-videos.html',
  styleUrls: ['./latest-articles-videos.scss'],
})
export class LatestArticlesVideos {
  readonly data = input<articlesAndVideos[]>();
}
