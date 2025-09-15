import { CommonModule } from "@angular/common";
import { Component, input, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";

import { EditForm } from "./edit-form/edit-form";
import { contactDetails, contacts } from "../../../shared/data/data/contacts";
import { History } from "../widgets/history/history";
import { PrintPreview } from "../widgets/print-preview/print-preview";

@Component({
  selector: "app-contact-details",
  imports: [EditForm, History, CommonModule],
  templateUrl: "./contact-details.html",
  styleUrl: "./contact-details.scss",
})
export class ContactDetails {
  readonly activeTab = input<string>();
  readonly data = input<contacts[]>();
  public editContactDetails: contactDetails;
  public contactDetails: contactDetails[];
  public contactData: contacts;
  public contactTitle: string;
  public edit: boolean = false;
  public history: boolean = false;

  private modal = inject(NgbModal);

  ngOnChanges() {
    this.data()?.filter((data) => {
      if (data.value == this.activeTab()) {
        if (data.data) {
          this.contactDetails = data.data;
          this.contactData = data;
        }
      }
    });
  }

  editForm(details: contactDetails) {
    this.edit = true;
    this.editContactDetails = details;
  }

  historyValue(value: boolean) {
    this.history = value;
  }

  changeDetails(details: contactDetails) {
    this.editContactDetails = details;
    if (!details.active) {
      this.data()?.filter((data) => {
        data.data?.forEach((subData: { active: boolean }) => {
          if (data.data?.includes(details)) {
            subData.active = false;
          }
        });
      });
      details.active = !details.active;
    }
  }

  deleteContact(value: contactDetails, index: number) {
    Swal.fire({
      text: "This contact will be deleted from your Personal Contacts and from the chat list too.",
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#EFEFEE !important",
      confirmButtonColor: "var(--theme-default)",
    }).then((result: { isConfirmed: boolean; isDenied: boolean }) => {
      if (result.isConfirmed) {
        this.contactDetails.splice(this.contactDetails.indexOf(value), 1);
        if (index == this.contactDetails.length) {
          if (this.contactDetails.length > 0) {
            this.contactDetails[0].active = true;
          }
        }
        if (this.contactDetails.length != index) {
          this.contactDetails[index].active = true;
        }
      } else {
        Swal.fire("", "Your contact is safe!");
      }
    });
  }

  openHistory() {
    this.history = !this.history;
  }

  printContact(details: contactDetails) {
    const print = this.modal.open(PrintPreview, {
      size: "m",
      centered: true,
      windowClass: "modal-bookmark",
    });
    print.componentInstance.printDetails = details;
  }

  editFormData(value: boolean) {
    this.edit = value;
  }
}
