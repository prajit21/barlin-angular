import { Component } from '@angular/core';

@Component({
  selector: 'app-link-utilities',
  imports: [],
  templateUrl: './link-utilities.html',
  styleUrl: './link-utilities.scss',
})
export class LinkUtilities {
  public data = [
    {
      class: 'link-primary',
      title: 'Link primary',
    },
    {
      class: 'link-secondary',
      title: 'Link secondary',
    },
    {
      class: 'link-success',
      title: 'Link success',
    },
    {
      class: 'link-danger',
      title: 'Link danger',
    },
    {
      class: 'link-warning',
      title: 'Link warning',
    },
    {
      class: 'link-info',
      title: 'Link info',
    },
    {
      class: 'link-light',
      title: 'Link light',
    },
    {
      class: 'link-dark',
      title: 'Link dark',
    },
    {
      class: 'link-body-emphasis',
      title: 'Link emphasis',
    },
  ];
}
