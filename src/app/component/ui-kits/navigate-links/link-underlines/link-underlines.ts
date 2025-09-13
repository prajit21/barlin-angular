import { Component } from '@angular/core';

@Component({
  selector: 'app-link-underlines',
  imports: [],
  templateUrl: './link-underlines.html',
  styleUrl: './link-underlines.scss',
})
export class LinkUnderlines {
  public data = [
    {
      class: 'link-underline-primary',
      title: 'Primary underline',
    },
    {
      class: 'link-underline-secondary',
      title: 'Secondary underline',
    },
    {
      class: 'link-underline-success',
      title: 'Success underline',
    },
    {
      class: 'link-underline-danger',
      title: 'Danger underline',
    },
    {
      class: 'link-underline-warning',
      title: 'Warning underline',
    },
    {
      class: 'link-underline-info',
      title: 'Info underline',
    },
    {
      class: 'link-underline-light',
      title: 'Light underline',
    },
    {
      class: 'link-underline-dark',
      title: 'Dark underline',
    },
  ];
}
