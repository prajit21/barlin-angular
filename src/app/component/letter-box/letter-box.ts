import { Component } from '@angular/core';

import { RightAside } from './right-aside/right-aside';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-letter-box',
  imports: [Sidebar, RightAside],
  templateUrl: './letter-box.html',
  styleUrl: './letter-box.scss',
})
export class LetterBox {
  public selectedId: number;

  addItem(item: any) {
    this.selectedId = item;
  }
}
