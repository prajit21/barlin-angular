import { CommonModule } from "@angular/common";
import { Component, Input, output } from "@angular/core";

import { contactDetails } from "../../../../shared/data/data/contacts";

@Component({
  selector: "app-edit-form",
  imports: [CommonModule],
  templateUrl: "./edit-form.html",
  styleUrl: "./edit-form.scss",
})
export class EditForm {
  @Input() editContactDetails: contactDetails;
  readonly edit = output<boolean>();
  public days = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  public months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  public editMore: boolean = false;

  showDetails() {
    this.edit.emit(false);
  }

  editMoreInfo() {
    this.editMore = true;
  }
}
