import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonSvgIcons } from '../../../shared/component/common-svg-icons/common-svg-icons';
import { blogGrid, blogGrids, latestNewsAndTrends } from '../../../shared/data/data/blog';
import { BlogFilter } from '../widgets/blog-filter/blog-filter';

@Component({
  selector: 'app-blog-grids',
  templateUrl: './blog-grids.html',
  imports: [CommonSvgIcons, RouterModule, BlogFilter],
  styleUrl: './blog-grids.scss',
})
export class BlogGrids {
  public blogGrids = blogGrids;
  public latestNewsAndTrends = latestNewsAndTrends;

  liked(value: blogGrid) {
    return (value.like = !value.like);
  }
}
