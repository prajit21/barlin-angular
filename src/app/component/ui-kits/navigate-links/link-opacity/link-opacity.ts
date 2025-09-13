import { Component } from '@angular/core';

@Component({
  selector: 'app-link-opacity',
  imports: [],
  templateUrl: './link-opacity.html',
  styleUrl: './link-opacity.scss',
})
export class LinkOpacity {
  public data = [
    {
      class: 'link-opacity-10',
      title: 'Link opacity 10',
    },
    {
      class: 'link-opacity-25',
      title: 'Link opacity 25',
    },
    {
      class: 'link-opacity-50',
      title: 'Link opacity 50',
    },
    {
      class: 'link-opacity-75',
      title: 'Link opacity 75',
    },
    {
      class: 'link-opacity-100',
      title: 'Link opacity 100',
    },
  ];
}
