import { Component } from '@angular/core';

import { defaultRadio } from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-default-radio',
  imports: [],
  templateUrl: './default-radio.html',
  styleUrls: ['./default-radio.scss'],
})
export class DefaultRadio {
  public defaultRadio = defaultRadio;
}
