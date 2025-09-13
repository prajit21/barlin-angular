import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import * as data from '../../../../shared/data/data/ui-kits/list';

@Component({
  selector: 'app-contextual-classes',
  imports: [CommonModule],
  templateUrl: './contextual-classes.html',
  styleUrls: ['./contextual-classes.scss'],
})
export class ContextualClasses {
  public contextualClassListData = data.contextualClassListData;
}
