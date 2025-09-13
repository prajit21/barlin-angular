import { Component, output } from '@angular/core';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History {
  readonly closeHistory = output<boolean>();

  close() {
    this.closeHistory.emit(false);
  }
}
