import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-color-variant',
  imports: [CommonModule],
  templateUrl: './color-variant.html',
  styleUrls: ['./color-variant.scss'],
})
export class ColorVariant {
  public colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'inverse'];
}
