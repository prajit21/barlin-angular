import { Component, input } from "@angular/core";

import { CommonSvgIcons } from "../../../../shared/component/common-svg-icons/common-svg-icons";
import { addProduct } from "../../../../shared/data/data/ecommerce/add-product";

@Component({
  selector: "app-add-product-tab",
  imports: [CommonSvgIcons],
  templateUrl: "./add-product-tab.html",
  styleUrls: ["./add-product-tab.scss"],
})
export class AddProductTab {
  readonly data = input<addProduct[]>();
  readonly activeSteps = input.required<number>();
}
