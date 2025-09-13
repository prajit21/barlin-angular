import { Component } from '@angular/core';

@Component({
  selector: 'app-hovered-link-opacity',
  imports: [],
  templateUrl: './hovered-link-opacity.html',
  styleUrl: './hovered-link-opacity.scss',
})
export class HoveredLinkOpacity {
  public data = [
    {
      class: 'link-opacity-10-hover',
      title: 'Link hover opacity 10',
    },
    {
      class: 'link-opacity-25-hover',
      title: 'Link hover opacity 25',
    },
    {
      class: 'link-opacity-50-hover',
      title: 'Link hover opacity 50',
    },
    {
      class: 'link-opacity-75-hover',
      title: 'Link hover opacity 75',
    },
    {
      class: 'link-opacity-100-hover',
      title: 'Link hover opacity 100',
    },
  ];
}
