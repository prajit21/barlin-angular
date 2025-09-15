import { Component, inject } from "@angular/core";

import {
  Gallery,
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
} from "ng-gallery";
import { Lightbox, LightboxModule } from "ng-gallery/lightbox";

import * as Data from "../../../shared/data/data/gallery/hover";

@Component({
  selector: "app-image-hover-effects",
  imports: [LightboxModule],
  templateUrl: "./image-hover-effects.html",
  styleUrls: ["./image-hover-effects.scss"],
})
export class ImageHoverEffects {
  public gallery = inject(Gallery);
  public lightbox = inject(Lightbox);

  public imgData = Data.imgData;
  public hoverData = Data.hoverData;
  private items: GalleryItem[];

  ngOnInit() {
    this.items = this.imgData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }),
    );
    const lightboxRef = this.gallery.ref("lightbox");
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    lightboxRef.load(this.items);
  }
}
