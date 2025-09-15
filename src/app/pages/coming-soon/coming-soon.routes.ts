import { Routes } from "@angular/router";

import { Comingsoon } from "./comingsoon/comingsoon";
import { ComingsoonBgImg } from "./comingsoon-bg-img/comingsoon-bg-img";
import { ComingsoonBgVideo } from "./comingsoon-bg-video/comingsoon-bg-video";

export default [
  {
    path: "coming-simple",
    component: Comingsoon,
  },
  {
    path: "coming-with-bg-video",
    component: ComingsoonBgVideo,
  },
  {
    path: "coming-with-bg-image",
    component: ComingsoonBgImg,
  },
] as Routes;
