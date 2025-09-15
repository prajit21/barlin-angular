import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-alerts",
  imports: [CommonModule, NgbAlertModule],
  templateUrl: "./alerts.html",
  styleUrls: ["./alerts.scss"],
})
export class Alerts {}
