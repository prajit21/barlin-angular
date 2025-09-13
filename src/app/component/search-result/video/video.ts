import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import * as data from '../../../shared/data/data/search-result';

@Component({
  selector: 'app-video',
  imports: [],
  templateUrl: './video.html',
  styleUrl: './video.scss',
})
export class Video {
  public videosData = data.videosData;
  public sanitizer = inject(DomSanitizer);

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
