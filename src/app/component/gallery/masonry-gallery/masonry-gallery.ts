import { Component, viewChild } from '@angular/core';

import { LightboxModule } from 'ng-gallery/lightbox';
import { NgxMasonryComponent, NgxMasonryModule, NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-masonry-gallery',
  imports: [NgxMasonryModule, LightboxModule],
  templateUrl: './masonry-gallery.html',
  styleUrls: ['./masonry-gallery.scss'],
})
export class MasonryGallery {
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  readonly masonry = viewChild(NgxMasonryComponent);

  public masonryImages: (string | boolean)[][];
  public limit = 20;
  public dummyPictures = [
    { image_url: 'assets/images/masonry/1.jpg' },
    { image_url: 'assets/images/masonry/2.jpg' },
    { image_url: 'assets/images/masonry/3.jpg' },
    { image_url: 'assets/images/masonry/4.jpg' },
    { image_url: 'assets/images/masonry/5.jpg' },
    { image_url: 'assets/images/masonry/6.jpg' },
    { image_url: 'assets/images/masonry/7.jpg' },
    { image_url: 'assets/images/masonry/8.jpg' },
    { image_url: 'assets/images/masonry/9.jpg' },
    { image_url: 'assets/images/masonry/10.jpg' },
    { image_url: 'assets/images/masonry/11.jpg' },
    { image_url: 'assets/images/masonry/12.jpg' },
    { image_url: 'assets/images/masonry/13.jpg' },
    { image_url: 'assets/images/masonry/14.jpg' },
    { image_url: 'assets/images/masonry/15.jpg' },
    { image_url: 'assets/images/masonry/1.jpg' },
  ];
}
