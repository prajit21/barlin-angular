import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Dropdown } from '../../../../shared/component/dropdown/dropdown';
import { trendingNews } from '../../../../shared/data/data/dashboard';

@Component({
  selector: 'app-trending-news',
  imports: [Dropdown, RouterModule],
  templateUrl: './trending-news.html',
  styleUrl: './trending-news.scss',
})
export class TrendingNews {
  public trendingNews = trendingNews;
  public dropdownList: string[] = ['Weekly', 'Monthly', 'Yearly'];
}
