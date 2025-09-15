import { Routes } from "@angular/router";

import { BasicCard } from "./basic-card/basic-card";
import { Breadcrumb } from "./breadcrumb/breadcrumb";
import { CreativeCards } from "./creative-cards/creative-cards";
import { Dropzone } from "./dropzone/dropzone";
import { ImageCrop } from "./image-cropper/image-cropper";
import { OwlCarousel } from "./owl-carousel/owl-carousel";
import { Pagination } from "./pagination/pagination";
import { RangeSlider } from "./range-slider/range-slider";
import { Rating } from "./rating/rating";
import { Ratios } from "./ratios/ratios";
import { Ribbons } from "./ribbons/ribbons";
import { ScrollSpy } from "./scroll-spy/scroll-spy";
import { SweetAlert } from "./sweet-alert/sweet-alert";
import { TimeLine } from "./time-line/time-line";
import { Toasts } from "./toasts/toasts";

export default [
  {
    path: "toasts",
    component: Toasts,
    data: {
      title: "Toasts",
      breadcrumb: "Toasts",
    },
  },
  {
    path: "rating",
    component: Rating,
    data: {
      title: "Rating",
      breadcrumb: "Rating",
    },
  },
  {
    path: "dropzone",
    component: Dropzone,
    data: {
      title: "Dropzone",
      breadcrumb: "Dropzone",
    },
  },
  {
    path: "sweetalert2",
    component: SweetAlert,
    data: {
      title: "Sweet Alert",
      breadcrumb: "Sweet Alert",
    },
  },
  {
    path: "owl-carousel",
    component: OwlCarousel,
    data: {
      title: "Owl Carousel",
      breadcrumb: "Owl Carousel",
    },
  },
  {
    path: "ribbons",
    component: Ribbons,
    data: {
      title: "Ribbons",
      breadcrumb: "Ribbons",
    },
  },
  {
    path: "pagination",
    component: Pagination,
    data: {
      title: "Paginations",
      breadcrumb: "Paginations",
    },
  },
  {
    path: "scrollSpy",
    component: ScrollSpy,
    data: {
      title: "ScrollSpy",
      breadcrumb: "ScrollSpy",
    },
  },
  {
    path: "breadcrumb-ui",
    component: Breadcrumb,
    data: {
      title: "Breadcrumb",
      breadcrumb: "Breadcrumb",
    },
  },
  {
    path: "range-slider",
    component: RangeSlider,
    data: {
      title: "Range Slider",
      breadcrumb: "Range Slider",
    },
  },
  {
    path: "ratios",
    component: Ratios,
    data: {
      title: "Ratios",
      breadcrumb: "Ratios",
    },
  },
  {
    path: "image-cropper",
    component: ImageCrop,
    data: {
      title: "Image Cropper",
      breadcrumb: "Image Cropper",
    },
  },
  {
    path: "basic-card",
    component: BasicCard,
    data: {
      title: "Basic Card",
      breadcrumb: "Basic Card",
    },
  },
  {
    path: "creative-card",
    component: CreativeCards,
    data: {
      title: "Creative Card",
      breadcrumb: "Creative Card",
    },
  },
  {
    path: "timeline",
    component: TimeLine,
    data: {
      title: "Time Line",
      breadcrumb: "Time Line",
    },
  },
] as Routes;
