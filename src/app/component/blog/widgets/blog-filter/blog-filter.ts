import { Component } from '@angular/core';

import { trendingPosts, recentPosts, popularTags } from '../../../../shared/data/data/blog';
import { ClickOutsideDirective } from '../../../../shared/directive/click-outside.directive';

@Component({
  selector: 'app-blog-filter',
  imports: [ClickOutsideDirective],
  templateUrl: './blog-filter.html',
  styleUrl: './blog-filter.scss',
})
export class BlogFilter {
  public isOpen: boolean = false;
  public trendingPosts = trendingPosts;
  public recentPosts = recentPosts;
  public popularTags = popularTags;
}
