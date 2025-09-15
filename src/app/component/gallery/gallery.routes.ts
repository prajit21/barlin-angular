import { Routes } from "@angular/router";

import { GalleryGrid } from "./gallery-grid/gallery-grid";
import { GalleryGridWithDesc } from "./gallery-grid-with-desc/gallery-grid-with-desc";
import { ImageHoverEffects } from "./image-hover-effects/image-hover-effects";
import { MasonryGallery } from "./masonry-gallery/masonry-gallery";
import { MasonryGalleryWithDesc } from "./masonry-gallery-with-desc/masonry-gallery-with-desc";

export default [
  {
    path: "gallary-grid",
    component: GalleryGrid,
    data: {
      title: "Gallery",
      breadcrumb: "Gallery",
    },
  },
  {
    path: "gallery-grid-desc",
    component: GalleryGridWithDesc,
    data: {
      title: "Gallery Grid With Description",
      breadcrumb: "Gallery Grid With Description",
    },
  },
  {
    path: "masonry-gallery",
    component: MasonryGallery,
    data: {
      title: "Masonry Gallery",
      breadcrumb: "Masonry Gallery",
    },
  },
  {
    path: "masonry-with-desc",
    component: MasonryGalleryWithDesc,
    data: {
      title: "Masonry Gallery With Description",
      breadcrumb: "Masonry Gallery With Description",
    },
  },
  {
    path: "hover-effects",
    component: ImageHoverEffects,
    data: {
      title: "Image Hover Effects",
      breadcrumb: "Image Hover Effects",
    },
  },
] as Routes;
