import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LightboxModule } from 'ng-gallery/lightbox';

import { galleryGridData } from '../../../shared/data/data/gallery/gallery';

@Component({
  selector: 'app-gallery-grid',
  imports: [CommonModule, LightboxModule],
  templateUrl: './gallery-grid.html',
  styleUrls: ['./gallery-grid.scss'],
})
export class GalleryGrid {
  public galleryGridData = galleryGridData;
}
