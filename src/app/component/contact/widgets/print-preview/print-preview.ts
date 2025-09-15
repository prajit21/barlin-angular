import { Component, inject, Input } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgxPrintModule } from "ngx-print";

import { contactDetails } from "../../../../shared/data/data/contacts";

@Component({
  selector: "app-print-preview",
  imports: [NgxPrintModule],
  templateUrl: "./print-preview.html",
  styleUrl: "./print-preview.scss",
})
export class PrintPreview {
  @Input() printDetails: contactDetails;

  public modal = inject(NgbModal);
}
