import { Component } from '@angular/core';

import {
  BorderedRadio,
  IconsRadio,
  FilledRadio,
} from '../../../../../shared/data/data/forms/chechbox-radio';

@Component({
  selector: 'app-custom-radio',
  imports: [],
  templateUrl: './custom-radio.html',
  styleUrls: ['./custom-radio.scss'],
})
export class CustomRadio {
  public BorderedRadio = BorderedRadio;
  public IconsRadio = IconsRadio;
  public FilledRadio = FilledRadio;
}
