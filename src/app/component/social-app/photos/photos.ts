import { Component, inject } from '@angular/core';

import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';

import * as data from '../../.././shared/data/data/social-app';

@Component({
  selector: 'app-photos',
  imports: [LightboxModule],
  templateUrl: './photos.html',
  styleUrl: './photos.scss',
})
export class Photos {
  public gallery = inject(Gallery);
  public lightbox = inject(Lightbox);

  public photosData = data.photosData;
  public items: GalleryItem[];

  ngOnInit() {
    this.items = this.photosData.map(
      item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }),
    );

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    lightboxRef.load(this.items);
  }
}
