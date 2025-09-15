import { Component, inject } from "@angular/core";

import { ProductFilter } from "./product-filter/product-filter";
import { ProductShow } from "./product-show/product-show";
import { FeatherIcon } from "../../../shared/component/feather-icon/feather-icon";
import { ProductService } from "../../../shared/service/product.service";

@Component({
  selector: "app-product",
  imports: [FeatherIcon, ProductFilter, ProductShow],
  templateUrl: "./product.html",
  styleUrls: ["./product.scss"],
})
export class Product {
  public listView: boolean = false;
  public openSidebar: boolean = false;
  public isShow: Boolean = false;

  public productServices = inject(ProductService);

  gridOpens() {
    this.listView = false;
    this.productServices.gridOpen();
  }

  listOpens() {
    this.listView = true;
    this.productServices.listOpen();
  }

  grid2s() {
    this.listView = false;
    this.productServices.grid2();
  }

  grid3s() {
    this.listView = false;
    this.productServices.grid3();
  }

  grid6s() {
    this.listView = false;
    this.productServices.grid6();
  }

  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
  }
}
