import { Component, input, inject } from '@angular/core';

import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-svg-icon',
  imports: [],
  templateUrl: './svg-icon.html',
  styleUrl: './svg-icon.scss',
})
export class SvgIcon {
  public readonly icon = input<string>();

  public layoutService = inject(LayoutService);
}
