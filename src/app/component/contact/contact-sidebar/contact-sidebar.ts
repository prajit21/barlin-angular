import { Component, input, output, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { FeatherIcon } from "../../../shared/component/feather-icon/feather-icon";
import { contacts } from "../../../shared/data/data/contacts";
import { ClickOutsideDirective } from "../../../shared/directive/click-outside.directive";
import { AddCategory } from "../widgets/add-category/add-category";
import { AddContact } from "../widgets/add-contact/add-contact";

@Component({
  selector: "app-contact-sidebar",
  imports: [ClickOutsideDirective, FeatherIcon],
  templateUrl: "./contact-sidebar.html",
  styleUrl: "./contact-sidebar.scss",
})
export class ContactSidebar {
  readonly data = input<contacts[]>();
  public isOpen: boolean = false;
  readonly activeTabValue = output<string>();
  public activeTab?: string = "personal";

  private modal = inject(NgbModal);

  ngOnInit() {
    this.activeTabValue.emit(this.activeTab!);
  }

  openFilter() {
    this.isOpen = !this.isOpen;
  }

  changeTab(value?: string) {
    this.activeTab = value;
    this.activeTabValue.emit(this.activeTab!);
  }

  openModal(value: string) {
    if (value == "contact") {
      this.modal.open(AddContact, {
        size: "lg",
        windowClass: "modal-bookmark",
      });
    } else if (value == "category") {
      this.modal.open(AddCategory);
    }
  }
}
