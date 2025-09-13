import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-select',
  imports: [NgSelectModule, FormsModule],
  templateUrl: './select.html',
  styleUrls: ['./select.scss'],
})
export class Select {
  public selectedCityIds: string[] = [];

  public option = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
  ];
}
