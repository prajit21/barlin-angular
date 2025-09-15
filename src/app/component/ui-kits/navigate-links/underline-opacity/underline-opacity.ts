import { Component } from "@angular/core";

@Component({
  selector: "app-underline-opacity",
  imports: [],
  templateUrl: "./underline-opacity.html",
  styleUrl: "./underline-opacity.scss",
})
export class UnderlineOpacity {
  public data = [
    {
      class: "link-underline-opacity-0",
      title: "Underline opacity 0",
    },
    {
      class: "link-underline-opacity-10",
      title: "Underline opacity 10",
    },
    {
      class: "link-underline-opacity-25",
      title: "Underline opacity 25",
    },
    {
      class: "link-underline-opacity-50",
      title: "Underline opacity 50",
    },
    {
      class: "link-underline-opacity-75",
      title: "Underline opacity 75",
    },
    {
      class: "link-underline-opacity-100",
      title: "Underline opacity 100",
    },
  ];
}
