import { Component, inject } from '@angular/core';

import { LayoutService } from '../../../service/layout.service';

@Component({
  selector: 'app-layout-type',
  imports: [],
  templateUrl: './layout-type.html',
  styleUrl: './layout-type.scss',
})
export class LayoutType {
  public layoutType: string = 'ltr';

  public layoutService = inject(LayoutService);

  customizeLayoutType(value: string) {
    this.layoutType = value;
    this.layoutService.config.settings.layout_type = value;
    if (value == 'rtl') {
      document.getElementsByTagName('html')[0].setAttribute('dir', value);
      document.body?.classList.add('rtl');
      document.body?.classList.remove('box-layout');
    } else if (value == 'box-layout') {
      document.getElementsByTagName('html')[0].setAttribute('dir', value);
      document.body?.classList.add('box-layout');
    } else {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
      document.body?.classList.add('ltr');
      document.body?.classList.remove('box-layout');
    }
  }
}
