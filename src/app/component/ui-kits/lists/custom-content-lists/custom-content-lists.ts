import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { customContentData } from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-custom-content-lists',
  imports: [CommonModule],
  templateUrl: './custom-content-lists.html',
  styleUrls: ['./custom-content-lists.scss'],
})
export class CustomContentLists {
  public customContentData = customContentData;
}
