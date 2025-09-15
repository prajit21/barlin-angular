import { Component } from "@angular/core";

import { ContactDetails } from "./contact-details/contact-details";
import { ContactSidebar } from "./contact-sidebar/contact-sidebar";
import { contactData } from "../../shared/data/data/contacts";

@Component({
  selector: "app-contact",
  imports: [ContactSidebar, ContactDetails],
  templateUrl: "./contact.html",
  styleUrl: "./contact.scss",
})
export class Contact {
  public activeTab: string;
  public contacts = contactData;

  tabValue(value: string) {
    this.activeTab = value;
  }
}
