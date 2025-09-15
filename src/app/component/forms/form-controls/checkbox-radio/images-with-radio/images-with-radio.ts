import { Component } from "@angular/core";

import { imagesWithRadio } from "../../../../../shared/data/data/forms/chechbox-radio";

@Component({
  selector: "app-images-with-radio",
  imports: [],
  templateUrl: "./images-with-radio.html",
  styleUrls: ["./images-with-radio.scss"],
})
export class ImagesWithRadio {
  public imagesWithRadio = imagesWithRadio;
}
