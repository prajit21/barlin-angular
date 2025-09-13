import { Component } from '@angular/core';

@Component({
  selector: 'app-underline-offset',
  imports: [],
  templateUrl: './underline-offset.html',
  styleUrl: './underline-offset.scss',
})
export class UnderlineOffset {
  public data = [
    {
      class: '',
      title: 'Default link',
    },
    {
      class: 'link-offset-1',
      title: 'Offset 1 link',
    },
    {
      class: 'link-offset-2',
      title: 'Offset 2 link',
    },
    {
      class: 'link-offset-3',
      title: 'Offset 3 link',
    },
  ];
}
