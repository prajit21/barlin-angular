import { Component } from '@angular/core';

import { basicRadioAndCheckbox } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-basic-radio-and-checkbox',
  imports: [],
  templateUrl: './basic-radio-and-checkbox.html',
  styleUrls: ['./basic-radio-and-checkbox.scss'],
})
export class BasicRadioAndCheckbox {
  public basicRadioAndCheckbox = basicRadioAndCheckbox;
}
