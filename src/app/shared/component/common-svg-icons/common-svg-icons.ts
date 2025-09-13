import { Component, input } from '@angular/core';

@Component({
  selector: 'app-common-svg-icons',
  imports: [],
  templateUrl: './common-svg-icons.html',
  styleUrl: './common-svg-icons.scss',
})
export class CommonSvgIcons {
  readonly icon = input<string>();
  readonly class = input<string>();
}
