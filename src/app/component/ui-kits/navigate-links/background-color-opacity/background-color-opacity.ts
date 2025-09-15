import { Component } from "@angular/core";

@Component({
  selector: "app-background-color-opacity",
  imports: [],
  templateUrl: "./background-color-opacity.html",
  styleUrl: "./background-color-opacity.scss",
})
export class BackgroundColorOpacity {
  public data = [
    {
      class: "bg-primary p-2 mb-3 text-white",
      title: "This is default success background",
    },
    {
      class: "p-2 mb-3 text-white bg-opacity-75",
      title: "This is 75% opacity success background",
    },
    {
      class: "p-2 mb-3 text-dark bg-opacity-50",
      title: "This is 50% opacity success background",
    },
    {
      class: "p-2 mb-3 text-dark bg-opacity-25",
      title: "This is 25% opacity success background",
    },
    {
      class: "p-2 mb-3 text-dark bg-opacity-10",
      title: "This is 10% opacity success background",
    },
  ];
}
