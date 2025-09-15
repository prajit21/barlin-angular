import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";

import { LeafletModule } from "@bluehalo/ngx-leaflet";
import { NgbProgressbarModule } from "@ng-bootstrap/ng-bootstrap";
import L from "leaflet";

import { CommonSvgIcons } from "../../../../shared/component/common-svg-icons/common-svg-icons";
import { Dropdown } from "../../../../shared/component/dropdown/dropdown";

@Component({
  selector: "app-sales-by-product",
  imports: [LeafletModule, NgbProgressbarModule, CommonSvgIcons, Dropdown],
  templateUrl: "./sales-by-product.html",
  styleUrl: "./sales-by-product.scss",
})
export class SalesByProduct {
  private http = inject(HttpClient);

  public dropdownList: string[] = ["Weekly", "Monthly", "Yearly"];
  public options1 = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "...",
      }),
    ],
    zoom: 5,
    center: L.latLng(46.879966, -121.726909),
  };

  public allOverProductSal = [
    {
      class: "fill-primary",
      country: "United States",
      percentage: 53.23,
    },
    {
      class: "fill-secondary",
      country: "Romania",
      percentage: 31.85,
    },
    {
      class: "fill-success",
      country: "Austalia",
      percentage: 12.98,
    },
    {
      class: "fill-warning",
      country: "Germany",
      percentage: 45.23,
    },
    {
      class: "fill-primary",
      country: "Africa",
      percentage: 53.23,
    },
    {
      class: "fill-secondary",
      country: "Europe",
      percentage: 95.75,
    },
  ];
}
