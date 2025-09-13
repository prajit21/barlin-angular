import { Component } from '@angular/core';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import * as data from '../../../../../shared/data/data/social-app';

@Component({
  selector: 'app-latest-photos',
  imports: [NgbCollapseModule],
  templateUrl: './latest-photos.html',
  styleUrl: './latest-photos.scss',
})
export class LatestPhotos {
  public isCollapsed = false;
  public latestPhotos = data.latestPhotos;
}
