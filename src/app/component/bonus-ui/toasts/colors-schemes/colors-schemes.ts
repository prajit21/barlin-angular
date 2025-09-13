import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-colors-schemes',
  imports: [CommonModule],
  templateUrl: './colors-schemes.html',
  styleUrls: ['./colors-schemes.scss'],
})
export class ColorsSchemes {
  public isShow: boolean = false;
}
