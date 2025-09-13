import { Component } from '@angular/core';

@Component({
  selector: 'app-live-alert',
  imports: [],
  templateUrl: './live-alert.html',
  styleUrls: ['./live-alert.scss'],
})
export class LiveAlert {
  public array: number[] = [];
  public counter: number = 0;

  add() {
    this.counter++;
    this.array.push(this.counter);
  }

  close(data: number) {
    this.array.splice(this.array.indexOf(data), 1);
  }
}
