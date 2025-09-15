import { Component, inject } from "@angular/core";

import {
  Gallery,
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
} from "ng-gallery";
import { Lightbox, LightboxModule } from "ng-gallery/lightbox";

import { galleryGridWithDesc } from "../../../shared/data/data/gallery/gallery";

@Component({
  selector: "app-gallery-grid-with-desc",
  imports: [LightboxModule],
  templateUrl: "./gallery-grid-with-desc.html",
  styleUrls: ["./gallery-grid-with-desc.scss"],
})
export class GalleryGridWithDesc {
  public gallery = inject(Gallery);
  public lightbox = inject(Lightbox);

  private items: GalleryItem[];

  public galleryGridWithDesc = galleryGridWithDesc;

  ngOnInit() {
    this.items = this.galleryGridWithDesc.map(
      (item) => new ImageItem({ src: item.srcUrl }),
    );
    const lightboxRef = this.gallery.ref("lightbox");
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    lightboxRef.load(this.items);
  }
}
