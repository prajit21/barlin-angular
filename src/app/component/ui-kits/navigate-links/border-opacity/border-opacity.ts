import { Component } from '@angular/core';

@Component({
  selector: 'app-border-opacity',
  imports: [],
  templateUrl: './border-opacity.html',
  styleUrl: './border-opacity.scss',
})
export class BorderOpacity {
  public data = [
    {
      class: 'mb-xl-3 mb-2 border-primary',
      title: 'This is default primary border',
    },
    {
      class: 'mb-xl-3 mb-2 border-opacity-75',
      title: 'This is 75% opacity primary border',
    },
    {
      class: 'mb-xl-3 mb-2 border-opacity-50',
      title: 'This is 50% opacity primary border',
    },
    {
      class: 'mb-xl-3 mb-2 border-opacity-25',
      title: 'This is 25% opacity primary border',
    },
    {
      class: 'border-opacity-10',
      title: 'This is 10% opacity primary border',
    },
  ];
}
